"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  ArrowUpRight,
  TrendingUp,
  Bot,
  User,
  MessageCircle,
} from "lucide-react";
import { TypewriterText } from "~/components/typewriter-text";
import { api } from "~/trpc/react";

// Componente de chat interativo
const FinanceChatDemo = () => {
  const messages = [
    {
      id: 1,
      type: "agent",
      text: "Opa! Ação da Tesla subiu 3%. Quer investir agora?",
      time: "14:32",
    },
    {
      id: 2,
      type: "user",
      text: "Claro!",
      time: "14:33",
    },
    {
      id: 3,
      type: "agent",
      text: "Perfeito! Com base no seu perfil, recomendo investir R$ 1.000. Você está diversificando bem sua carteira! 📈",
      time: "14:33",
    },
    {
      id: 4,
      type: "user",
      text: "Obrigado! Como está meu portfólio hoje?",
      time: "14:34",
    },
    {
      id: 5,
      type: "agent",
      text: "Excelente! Rentabilidade de +12% no mês. Suas ações tech estão performando muito bem! 🚀",
      time: "14:35",
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl bg-[#d1f1ff]/40 p-8">
      {/* Header do chat */}
      <div className="border-border/50 flex items-center gap-3 border-b pb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6a8fdb]">
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Dalio AI</h3>
          <p className="text-muted-foreground text-sm text-white">
            Seu assessor inteligente
          </p>
        </div>
        <div className="ml-auto">
          <TrendingUp className="h-5 w-5 text-[#6a8fdb]" />
        </div>
      </div>

      {/* Mensagens */}
      <div className="mt-6 min-h-[300px] space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex max-w-[70%] items-start gap-3 ${
                message.type === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                  message.type === "agent"
                    ? "bg-[#6a8fdb] text-white"
                    : "bg-[#84a8e4] text-white"
                }`}
              >
                {message.type === "agent" ? (
                  <Bot className="h-5 w-5" />
                ) : (
                  <User className="h-5 w-5" />
                )}
              </div>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.type === "agent"
                    ? "bg-background border shadow-sm"
                    : "bg-[#6a8fdb] text-white"
                }`}
              >
                <p className="text-base">{message.text}</p>
                <p
                  className={`mt-2 text-xs ${
                    message.type === "agent"
                      ? "text-muted-foreground"
                      : "text-white/70"
                  }`}
                >
                  {message.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input de digitação (simulado) */}
      <div className="border-border/50 mt-6 border-t pt-4">
        <div className="bg-background rounded-full border px-6 py-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex space-x-1">
                <div className="bg-muted-foreground/50 h-2 w-2 animate-bounce rounded-full"></div>
                <div
                  className="bg-muted-foreground/50 h-2 w-2 animate-bounce rounded-full"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="bg-muted-foreground/50 h-2 w-2 animate-bounce rounded-full"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
            <Button
              size="sm"
              className="h-10 w-10 rounded-full bg-[#6a8fdb] p-0 hover:bg-[#84a8e4]"
            >
              <ArrowUpRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const subscribeEmail = api.email.subscribe.useMutation({
    onSuccess: (data) => {
      setMessage(data.message);
      setIsSuccess(true);
      setEmail("");
    },
    onError: (error) => {
      setMessage(error.message);
      setIsSuccess(false);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage("Por favor, digite um email válido");
      setIsSuccess(false);
      return;
    }
    
    subscribeEmail.mutate({ email });
  };

  const typewriterTexts = [
    "feito para a geração Z",
    "que ensina a investir",
    "direto no seu WhatsApp",
    "que entende suas metas",
    "disponível 24/7",
    "focado no seu futuro",
  ];

  return (
    <div className="border-accent flex min-h-screen w-full flex-col items-center justify-center overflow-hidden border-b bg-gradient-to-br from-[#2a3a7b] to-[#6ec1e4] px-6 py-12">
      <div className="flex w-full max-w-screen-xl flex-col items-center space-y-16 text-center">
        {/* Seção de texto centralizada */}
        <div className="mt-36 max-w-4xl space-y-8">
          <h1 className="xs:text-5xl text-4xl !leading-[1.1] font-bold tracking-tight text-white sm:text-6xl lg:text-5xl">
            Assessor de investimentos de IA
            <br />
            <TypewriterText texts={typewriterTexts} />
          </h1>

          <p className="xs:text-xl text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed text-white lg:text-2xl">
            Conquiste sua liberdade financeira com nosso assessor de
            investimentos de inteligência artificial! Receba conselhos
            financeiros personalizados, aprenda sobre investimentos e muito
            mais, direto no WhatsApp.
          </p>

          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
            <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-lg flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribeEmail.isPending}
                className="min-w-0 flex-1 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white backdrop-blur-sm placeholder:text-white/70 focus:ring-2 focus:ring-[#6a8fdb] focus:outline-none sm:min-w-[200px] disabled:opacity-50"
              />
              <Button
                type="submit"
                size="sm"
                disabled={subscribeEmail.isPending}
                className="h-auto rounded-md bg-[#6a8fdb] px-6 py-2 text-base shadow-lg hover:bg-[#84a8e4] sm:w-auto disabled:opacity-50"
              >
                {subscribeEmail.isPending ? "Enviando..." : "Entrar na lista de espera"}
              </Button>
            </form>
          </div>

          {/* Mensagem de feedback */}
          {message && (
            <div
              className={`mx-auto mt-4 max-w-lg p-3 rounded-md text-sm font-medium ${
                isSuccess
                  ? "bg-green-500/20 text-green-100 border border-green-500/30"
                  : "bg-red-500/20 text-red-100 border border-red-500/30"
              }`}
            >
              {message}
            </div>
          )}
        </div>

        {/* Chat demo em formato maior */}
        <FinanceChatDemo />
      </div>
    </div>
  );
};

export default Hero;
