"use client";

import {
  MessageCircle,
  UserCheck,
  PieChart,
  Smartphone,
  Shield,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: MessageCircle,
    title: "Mande uma mensagem no WhatsApp",
    description:
      "Abra o WhatsApp e mande um 'Oi' para nosso número. É só isso! Nosso bot vai te responder na hora e começar uma conversa amigável.",
    color: "from-[#6a8fdb] to-[#84a8e4]",
    features: [
      "Resposta instantânea 24/7",
      "Interface familiar do WhatsApp",
      "Sem downloads ou cadastros",
    ],
  },
  {
    id: 2,
    icon: UserCheck,
    title: "Responda e conceda informações pessoais",
    description:
      "Compartilhe algumas informações básicas sobre seus objetivos financeiros, renda e perfil de risco. Tudo com segurança máxima e criptografia.",
    color: "from-[#84a8e4] to-[#9ec0ed]",
    features: [
      "Dados protegidos e criptografados",
      "Perguntas simples e rápidas",
      "Análise de perfil personalizada",
    ],
  },
  {
    id: 3,
    icon: PieChart,
    title: "Comece a acompanhar ações/carteira",
    description:
      "Receba análises da sua carteira, alertas de mercado e conselhos personalizados baseados no seu perfil e objetivos financeiros.",
    color: "from-[#9ec0ed] to-[#b7d9f6]",
    features: [
      "Monitoramento em tempo real",
      "Alertas personalizados",
      "Conselhos baseados em IA",
    ],
  },
];

const GettingStarted = () => {
  return (
    <section
      id="getting-started"
      className="xs:py-24 bg-gradient-to-br from-white to-gray-50 px-6 py-16"
    >
      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Como Começar
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Em apenas 3 passos simples, você terá seu agente financeiro pessoal
            funcionando. Leva menos de 5 minutos e é totalmente gratuito para
            começar.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;

            return (
              <div key={step.id} className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 hidden h-24 w-px -translate-x-1/2 translate-y-12 transform bg-gradient-to-b from-[#6a8fdb] to-transparent lg:block"></div>
                )}

                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 ${isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                    <div className="mb-6 flex items-center gap-4">
                      <div
                        className={`h-16 w-16 bg-gradient-to-br ${step.color} flex items-center justify-center rounded-2xl shadow-lg`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-6xl font-bold text-[#6a8fdb] opacity-10">
                        0{step.id}
                      </div>
                    </div>

                    <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                      {step.title}
                    </h3>

                    <p className="mb-8 text-lg leading-relaxed text-gray-600">
                      {step.description}
                    </p>

                    <div className="mb-8 space-y-4">
                      {step.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-[#6a8fdb]"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${isEven ? "lg:col-start-1" : ""}`}>
                    {step.id === 1 && (
                      <div className="relative">
                        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl">
                          <div className="mb-6 flex items-center gap-4">
                            <Smartphone className="h-8 w-8 text-[#6a8fdb]" />
                            <h4 className="text-xl font-semibold">WhatsApp</h4>
                            <div className="ml-auto h-3 w-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="rounded-2xl bg-gray-50 p-6">
                            <div className="mb-4 flex justify-end">
                              <div className="max-w-xs rounded-2xl rounded-br-md bg-[#dcf8c6] px-4 py-2">
                                <p className="text-sm">Oi! 👋</p>
                              </div>
                            </div>
                            <div className="flex justify-start">
                              <div className="max-w-xs rounded-2xl rounded-bl-md bg-white px-4 py-2 shadow-sm">
                                <p className="text-sm">
                                  Olá! Sou seu assistente financeiro pessoal.
                                  Vamos começar sua jornada para a liberdade
                                  financeira? 🚀
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 rounded-full bg-[#6a8fdb] px-3 py-1 text-sm font-medium text-white shadow-lg">
                          Instantâneo
                        </div>
                      </div>
                    )}

                    {step.id === 2 && (
                      <div className="relative">
                        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl">
                          <div className="mb-6 flex items-center gap-4">
                            <Shield className="h-8 w-8 text-[#6a8fdb]" />
                            <h4 className="text-xl font-semibold">
                              Dados Seguros
                            </h4>
                          </div>
                          <div className="space-y-4">
                            <div className="rounded-xl bg-gray-50 p-4">
                              <p className="mb-2 text-sm font-medium">
                                Qual sua idade?
                              </p>
                              <div className="w-fit rounded-lg bg-[#6a8fdb] px-3 py-1 text-sm text-white">
                                25 anos
                              </div>
                            </div>
                            <div className="rounded-xl bg-gray-50 p-4">
                              <p className="mb-2 text-sm font-medium">
                                Qual seu objetivo principal?
                              </p>
                              <div className="w-fit rounded-lg bg-[#6a8fdb] px-3 py-1 text-sm text-white">
                                Criar reserva de emergência
                              </div>
                            </div>
                            <div className="rounded-xl bg-gray-50 p-4">
                              <p className="mb-2 text-sm font-medium">
                                Qual seu perfil de risco?
                              </p>
                              <div className="w-fit rounded-lg bg-[#6a8fdb] px-3 py-1 text-sm text-white">
                                Conservador
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white shadow-lg">
                          🔒 Seguro
                        </div>
                      </div>
                    )}

                    {step.id === 3 && (
                      <div className="relative">
                        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl">
                          <div className="mb-6 flex items-center gap-4">
                            <TrendingUp className="h-8 w-8 text-[#6a8fdb]" />
                            <h4 className="text-xl font-semibold">
                              Sua Carteira
                            </h4>
                          </div>
                          <div className="space-y-4">
                            <div className="rounded-xl bg-gradient-to-r from-green-50 to-green-100 p-4">
                              <div className="mb-2 flex items-center justify-between">
                                <span className="font-medium">
                                  Tesouro Selic
                                </span>
                                <span className="font-bold text-green-600">
                                  +2.3%
                                </span>
                              </div>
                              <div className="h-2 rounded-full bg-green-200">
                                <div className="h-2 w-2/3 rounded-full bg-green-500"></div>
                              </div>
                            </div>
                            <div className="rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-4">
                              <div className="mb-2 flex items-center justify-between">
                                <span className="font-medium">
                                  CDB Bradesco
                                </span>
                                <span className="font-bold text-blue-600">
                                  +1.8%
                                </span>
                              </div>
                              <div className="h-2 rounded-full bg-blue-200">
                                <div className="h-2 w-1/3 rounded-full bg-blue-500"></div>
                              </div>
                            </div>
                            <div className="rounded-xl bg-gray-50 p-4 text-center">
                              <p className="text-sm text-gray-600">
                                💡 Dica: Considere diversificar com ações da
                                ITUB4
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 rounded-full bg-[#6a8fdb] px-3 py-1 text-sm font-medium text-white shadow-lg">
                          24/7
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
