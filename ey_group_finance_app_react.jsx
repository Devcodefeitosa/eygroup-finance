export default function EYGroupFinanceApp() {
  const dashboardCards = [
    { title: 'Receitas', value: 'R$ 245.430,00', color: 'text-green-600' },
    { title: 'Despesas', value: 'R$ 96.680,00', color: 'text-red-600' },
    { title: 'Lucro Líquido', value: 'R$ 148.750,00', color: 'text-blue-700' },
    { title: 'Fluxo de Caixa', value: '+18%', color: 'text-purple-700' },
  ];

  const transactions = [
    {
      cliente: 'Cliente Premium',
      categoria: 'Venda',
      valor: 'R$ 12.450,00',
      status: 'Receita',
    },
    {
      cliente: 'Meta Ads',
      categoria: 'Marketing',
      valor: 'R$ 3.200,00',
      status: 'Despesa',
    },
    {
      cliente: 'Funcionários',
      categoria: 'RH',
      valor: 'R$ 8.900,00',
      status: 'Despesa',
    },
  ];

  const menu = [
    'Dashboard',
    'Entradas',
    'Saídas',
    'Fluxo de Caixa',
    'Funcionários',
    'Fornecedores',
    'Boletos',
    'PIX',
    'Relatórios',
    'Metas',
    'Impostos',
    'Investimentos',
    'Configurações',
  ];

  return (
    <div className="min-h-screen flex bg-[#021B4B] text-white">
      <aside className="w-80 bg-[#01153A] p-6 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex flex-col items-center mb-10">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-2xl mb-5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616554.png"
                alt="Wolf Logo"
                className="w-24 h-24"
              />
            </div>

            <h1 className="text-5xl font-black tracking-wide">EY GROUP</h1>
            <p className="text-blue-200 text-lg mt-2">
              Sistema Financeiro Inteligente
            </p>
          </div>

          <nav className="space-y-3">
            {menu.map((item) => (
              <button
                key={item}
                className="w-full bg-blue-700 hover:bg-blue-600 transition-all rounded-2xl px-5 py-4 text-left font-semibold shadow-lg"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-blue-700 rounded-3xl p-6 mt-8 shadow-2xl">
          <p className="text-blue-100">Saldo Empresarial</p>
          <h2 className="text-4xl font-black mt-3">R$ 148.750,00</h2>
          <p className="text-green-300 mt-2">Caixa positivo</p>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-5xl font-black">Painel Administrativo</h2>
            <p className="text-blue-200 mt-2 text-lg">
              Controle completo da sua empresa em tempo real
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-green-600 px-6 py-4 rounded-2xl font-bold shadow-xl hover:bg-green-500 transition">
              Nova Receita
            </button>

            <button className="bg-red-600 px-6 py-4 rounded-2xl font-bold shadow-xl hover:bg-red-500 transition">
              Nova Despesa
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {dashboardCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-3xl p-7 text-black shadow-2xl"
            >
              <p className="text-gray-500 font-bold text-lg">{card.title}</p>
              <h3 className={`text-4xl font-black mt-4 ${card.color}`}>
                {card.value}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
          <div className="bg-white text-black rounded-3xl p-6 shadow-2xl xl:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-black">Lançamentos Financeiros</h3>
              <button className="bg-blue-700 text-white px-5 py-3 rounded-2xl font-bold">
                Exportar PDF
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Descrição"
                className="border p-4 rounded-2xl"
              />

              <input
                type="number"
                placeholder="Valor"
                className="border p-4 rounded-2xl"
              />

              <select className="border p-4 rounded-2xl">
                <option>Entrada</option>
                <option>Saída</option>
              </select>

              <select className="border p-4 rounded-2xl">
                <option>PIX</option>
                <option>Cartão</option>
                <option>Boleto</option>
                <option>Transferência</option>
              </select>

              <input
                type="date"
                className="border p-4 rounded-2xl"
              />

              <select className="border p-4 rounded-2xl">
                <option>Marketing</option>
                <option>RH</option>
                <option>Operacional</option>
                <option>Financeiro</option>
              </select>
            </div>

            <button className="w-full mt-6 bg-blue-700 hover:bg-blue-600 transition text-white py-5 rounded-2xl text-xl font-black shadow-xl">
              Salvar Lançamento
            </button>
          </div>

          <div className="bg-white text-black rounded-3xl p-6 shadow-2xl">
            <h3 className="text-3xl font-black mb-6">Recursos Premium</h3>

            <div className="space-y-4">
              {[
                'Controle de Funcionários',
                'Relatórios Automáticos',
                'Controle de Metas',
                'Fluxo de Caixa Inteligente',
                'Sistema PIX',
                'Controle de Impostos',
                'Gestão de Fornecedores',
                'Alertas Financeiros',
                'Controle de Lucro',
                'Integração Bancária',
              ].map((feature) => (
                <div
                  key={feature}
                  className="bg-gray-100 p-4 rounded-2xl font-semibold"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white text-black rounded-3xl p-6 shadow-2xl mb-10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-black">Últimas Movimentações</h3>
            <input
              placeholder="Pesquisar..."
              className="border p-3 rounded-2xl"
            />
          </div>

          <div className="space-y-5">
            {transactions.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-5 rounded-2xl"
              >
                <div>
                  <h4 className="font-black text-xl">{item.cliente}</h4>
                  <p className="text-gray-500">{item.categoria}</p>
                </div>

                <div className="text-right">
                  <strong
                    className={
                      item.status === 'Receita'
                        ? 'text-green-600 text-2xl'
                        : 'text-red-600 text-2xl'
                    }
                  >
                    {item.valor}
                  </strong>
                  <p className="text-gray-500">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-black">Receitas</h3>
            <p className="text-5xl font-black mt-4">R$ 245K</p>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-red-700 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-black">Despesas</h3>
            <p className="text-5xl font-black mt-4">R$ 96K</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-black">Lucro</h3>
            <p className="text-5xl font-black mt-4">R$ 148K</p>
          </div>
        </div>
      </main>
    </div>
  );
}
