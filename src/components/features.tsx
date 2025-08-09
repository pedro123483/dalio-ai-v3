import { Card, CardContent, CardHeader } from "~/components/ui/card";
import {
  BookCheck,
  ChartPie,
  MessageCircle,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  // {
  //   icon: Target,
  //   title: "Metas Financeiras Inteligentes",
  //   description:
  //     "Defina e acompanhe suas metas financeiras com sugestões personalizadas baseadas no seu perfil e objetivos de vida.",
  // },
  {
    icon: BookCheck,
    title: "Educação Financeira Diária",
    description:
      "Aprenda sobre investimentos, economia e planejamento financeiro com conteúdo adaptado para jovens brasileiros.",
  },
  // {
  //   icon: ChartPie,
  //   title: "Análise de Gastos em Tempo Real",
  //   description:
  //     "Receba insights instantâneos sobre seus gastos e descubra onde você pode economizar e investir melhor.",
  // },
  {
    icon: TrendingUp,
    title: "Recomendações de Investimento",
    description:
      "Sugestões personalizadas de investimentos baseadas no seu perfil de risco, idade e objetivos financeiros.",
  },
  {
    icon: MessageCircle,
    title: "Assessoria 24/7 no WhatsApp",
    description:
      "Tire dúvidas, receba conselhos e monitore seus investimentos a qualquer hora, direto no app que você já usa.",
  },
  // {
  //   icon: Zap,
  //   title: "Automação Financeira",
  //   description:
  //     "Configure aportes automáticos, lembretes de pagamento e alertas de oportunidades de investimento.",
  // },
];

const Features = () => {
  return (
    <div
      id="features"
      className="xs:py-20 mx-auto w-full max-w-screen-xl px-6 py-12"
    >
      <h2 className="xs:text-4xl text-center text-3xl font-bold tracking-tight sm:mx-auto sm:max-w-xl md:text-5xl md:leading-[3.5rem]">
        Conquiste sua liberdade financeira com{" "}
        <span className="text-[#6a8fdb]">Inteligência Artificial</span>
      </h2>
      <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center">
        Descubra como nossa inteligência artificial pode ajudar você a alcançar
        a independência financeira de forma simples e eficiente, direto no
        WhatsApp.
      </p>
      <div className="xs:mt-14 mx-auto mt-8 grid w-full gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col overflow-hidden rounded-xl border shadow-none transition-shadow hover:shadow-md"
          >
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d1f1ff]">
                <feature.icon className="h-6 w-6 text-[#6a8fdb]" />
              </div>
              <h4 className="!mt-3 text-xl font-bold tracking-tight">
                {feature.title}
              </h4>
              <p className="text-muted-foreground xs:text-[17px] mt-1 text-sm">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
              <div className="ml-6 flex h-52 items-center justify-center rounded-tl-xl bg-gradient-to-br from-[#d1f1ff] to-[#b7d9f6]">
                <feature.icon className="h-16 w-16 text-[#84a8e4]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
