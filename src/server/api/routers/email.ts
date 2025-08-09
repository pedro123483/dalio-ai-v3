import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const emailRouter = createTRPCRouter({
  subscribe: publicProcedure
    .input(
      z.object({
        email: z.string().email("Email inválido"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        // Verifica se o email já existe
        const existingSubscriber = await ctx.db.emailSubscriber.findUnique({
          where: { email: input.email },
        });

        if (existingSubscriber) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Este email já está na lista de espera",
          });
        }

        // Cria novo subscriber
        const subscriber = await ctx.db.emailSubscriber.create({
          data: {
            email: input.email,
          },
        });

        return {
          success: true,
          message: "Email adicionado à lista de espera com sucesso!",
          data: subscriber,
        };
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Erro interno do servidor",
        });
      }
    }),

  getSubscribers: publicProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).max(100).default(10),
      })
    )
    .query(async ({ ctx, input }) => {
      const { page, limit } = input;
      const skip = (page - 1) * limit;

      const [subscribers, total] = await Promise.all([
        ctx.db.emailSubscriber.findMany({
          skip,
          take: limit,
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            email: true,
            createdAt: true,
          },
        }),
        ctx.db.emailSubscriber.count(),
      ]);

      return {
        subscribers,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    }),

  getCount: publicProcedure.query(async ({ ctx }) => {
    const count = await ctx.db.emailSubscriber.count();
    return { count };
  }),
}); 