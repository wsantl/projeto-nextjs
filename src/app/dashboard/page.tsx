// app/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";

export default function Dashboard() {
  // Estado fictício para as estatísticas
  const [data, setData] = useState({
    totalUsers: 1200,
    totalOrders: 350,
    totalRevenue: 45000,
    newMessages: 10,
  });

  // Simula o carregamento de dados
  useEffect(() => {
    setTimeout(() => {
      setData({
        totalUsers: 1300,
        totalOrders: 400,
        totalRevenue: 50000,
        newMessages: 15,
      });
    }, 3000); // Simulando o carregamento de dados
  }, []);

  return (
    <main className="bg-gradient-to-r from-blue-200 to-blue-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Título da página */}
        <h2 className="text-4xl font-bold text-gray-800">Dashboard</h2>
        <p className="text-lg text-gray-600 mt-2">Visão geral do sistema</p>

        {/* Cards de informações */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-700">Usuários Totais</h3>
            <p className="text-4xl font-bold text-blue-500">{data.totalUsers}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-700">Pedidos Totais</h3>
            <p className="text-4xl font-bold text-green-500">{data.totalOrders}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-700">Receita Total</h3>
            <p className="text-4xl font-bold text-yellow-500">R${data.totalRevenue}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-700">Novas Mensagens</h3>
            <p className="text-4xl font-bold text-red-500">{data.newMessages}</p>
          </div>
        </div>

        {/* Gráficos e Tabela */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gráfico (Placeholder para adicionar gráficos futuramente) */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-700">Gráfico de Vendas</h3>
            {/* Placeholder para o gráfico */}
            <div className="h-64 bg-gradient-to-r from-green-200 to-green-100 rounded-lg mt-4 flex items-center justify-center">
              <p className="text-center text-gray-600">Gráfico de vendas aqui</p>
            </div>
          </div>

          {/* Tabela de Atividades */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-700">Atividades Recentes</h3>
            <table className="min-w-full mt-4 table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Atividade</th>
                  <th className="px-4 py-2 text-left text-gray-600">Data</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-4 py-2 text-gray-700">Novo Pedido #1234</td>
                  <td className="px-4 py-2 text-gray-600">10/02/2025</td>
                </tr>
                <tr className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-4 py-2 text-gray-700">Novo Usuário Registrado</td>
                  <td className="px-4 py-2 text-gray-600">09/02/2025</td>
                </tr>
                <tr className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-4 py-2 text-gray-700">Mensagem Recebida</td>
                  <td className="px-4 py-2 text-gray-600">08/02/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
