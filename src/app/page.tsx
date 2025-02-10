"use client";

import { FaShoppingCart, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-50">
      
      
      {/* Seção Hero */}
      <section className="flex flex-col items-center justify-center flex-grow mt-20">
        <h2 className="text-4xl font-bold text-blue-600">Cestas básicas de qualidade</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-md">
          Garantimos os melhores produtos para empresas que valorizam seus funcionários.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Fazer Pedido
        </button>
      </section>

      {/* Seção de Destaques */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 p-6 w-full max-w-4xl">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <FaShoppingCart className="text-blue-600 text-4xl" />
          <h3 className="text-xl font-semibold mt-4">Variedade</h3>
          <p className="text-gray-600 text-sm mt-2">Oferecemos diversas opções de cestas básicas.</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <FaUsers className="text-blue-600 text-4xl" />
          <h3 className="text-xl font-semibold mt-4">Para Empresas</h3>
          <p className="text-gray-600 text-sm mt-2">Atendemos empresas de todos os portes.</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <FaCheckCircle className="text-blue-600 text-4xl" />
          <h3 className="text-xl font-semibold mt-4">Qualidade</h3>
          <p className="text-gray-600 text-sm mt-2">Produtos selecionados com os melhores fornecedores.</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="w-full bg-white text-gray-600 text-center p-4 mt-12 shadow-md">
        &copy; {new Date().getFullYear()} SuperCestas - Todos os direitos reservados.
      </footer>

    </main>
  );
}
