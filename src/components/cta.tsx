"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

const CTA = () => {
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

  return (
    <section className="bg-gradient-to-br from-[#2a3a7b] to-[#6ec1e4] py-16 px-6 w-full min-w-full">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título principal */}
        <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          O caminho para sua liberdade financeira começa aqui
        </h2>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Inscreva-se na lista de espera para começar a conquistar sua liberdade financeira!
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={subscribeEmail.isPending}
            className="flex-1 px-3 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-[#6a8fdb] backdrop-blur-sm min-w-0 sm:min-w-[200px] disabled:opacity-50"
          />
          <Button
            type="submit"
            size="sm"
            disabled={subscribeEmail.isPending}
            className="sm:w-auto text-base px-6 py-2 h-auto bg-[#6a8fdb] hover:bg-[#84a8e4] shadow-lg rounded-md disabled:opacity-50"
          >
            {subscribeEmail.isPending ? "Enviando..." : "Entrar na lista de espera"}
          </Button>
        </form>

        {/* Mensagem de feedback */}
        {message && (
          <div
            className={`mt-4 p-3 rounded-md text-sm font-medium ${
              isSuccess
                ? "bg-green-500/20 text-green-100 border border-green-500/30"
                : "bg-red-500/20 text-red-100 border border-red-500/30"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;