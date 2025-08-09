import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "~/components/ui/accordion";
import { cn } from "~/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "Como funciona o agente de investimentos no WhatsApp?",
    answer:
      "Nosso agente inteligente se integra ao WhatsApp e oferece assessoria financeira 24/7. Você pode fazer perguntas, receber recomendações personalizadas e acompanhar seus investimentos através de conversas naturais.",
  },
  {
    question: "É seguro compartilhar informações financeiras pelo WhatsApp?",
    answer:
      "Sim! Utilizamos criptografia de ponta a ponta e seguimos os mais altos padrões de segurança. Seus dados são protegidos e nunca compartilhados com terceiros. Tudo permanece entre você e nosso sistema seguro.",
  },
  {
    question: "Preciso ter conhecimento sobre investimentos para usar?",
    answer:
      "Não! Nosso agente é especialmente projetado para iniciantes. Ele ensina conceitos básicos, explica termos financeiros de forma simples e guia você passo a passo na construção da sua educação financeira.",
  },
  {
    question: "Quanto custa para usar o serviço?",
    answer:
      "O serviço é gratuito. Você pode usar o agente sem nenhum custo adicional.",
  },
  {
    question: "O agente pode me ajudar com minha situação específica?",
    answer:
      "Sim! O agente analisa seu perfil, idade, renda e objetivos para oferecer conselhos personalizados. Ele considera sua situação atual e sugere estratégias adequadas para seu momento de vida.",
  },
  {
    question: "Como começar a usar o Dalio AI?",
    answer:
      "É muito simples! Basta adicionar nosso número no WhatsApp, enviar uma mensagem de 'Oi' e seguir as instruções iniciais. Em poucos minutos você estará recebendo seus primeiros conselhos financeiros personalizados.",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="xs:py-16 mx-auto w-full max-w-screen-xl px-6 py-8">
      <h2 className="xs:text-4xl text-center text-3xl !leading-[1.15] font-bold tracking-tighter md:text-5xl">
        Perguntas Frequentes
      </h2>
      <p className="xs:text-lg text-muted-foreground mt-1.5 text-center">
        Tire suas dúvidas sobre a Dalio AI e descubra como ela pode transformar
        sua vida financeira.
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 gap-4 space-y-4 md:columns-2"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent !mt-0 !mb-4 break-inside-avoid rounded-xl border-none px-4 py-1"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg",
                  )}
                >
                  {question}
                  <PlusIcon className="text-muted-foreground h-5 w-5 shrink-0 transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
