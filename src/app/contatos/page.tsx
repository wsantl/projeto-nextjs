// app/contatos/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importando useRouter

export default function Contatos() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const router = useRouter(); // Hook para navegação

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário (no momento, apenas seta como enviado)
    setIsSubmitted(true);
  };

  const handleBack = () => {
    router.push("/"); // Redireciona para a página inicial
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-blue-600">Fale Conosco</h2>
      <p className="text-lg text-gray-700 mt-4">Estamos aqui para te ouvir! Preencha o formulário abaixo para entrar em contato.</p>

      {isSubmitted ? (
        <div className="mt-6 p-6 bg-green-100 text-green-700 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Mensagem enviada com sucesso!</h3>
          <p>Em breve, entraremos em contato.</p>
          <button
            onClick={handleBack}
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Voltar para a Página Inicial
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Seu nome"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Seu email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold">Mensagem</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escreva sua mensagem"
              rows={5}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      )}
    </main>
  );
}
