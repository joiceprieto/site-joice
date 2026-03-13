export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold text-slate-800">Joice Prieto</div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#sobre" className="hover:text-slate-600 transition-colors">Sobre</a>
            <a href="#tratamentos" className="hover:text-slate-600 transition-colors">Tratamentos</a>
            <a href="#contato" className="hover:text-slate-600 transition-colors">Contato</a>
          </div>
          <a href="#contato" className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors">Agendar</a>
        </div>
      </nav>

      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-slate-500 mb-4">Psicanalista | Hipnoterapeuta</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Supere a <span className="text-slate-700">ansiedade</span> e reencontre seu bem-estar</h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">+15 mil horas de experiência em psicanálise clínica e hipnoterapia. Atendimento online para todo o Brasil.</p>
          <a href="#contato" className="bg-slate-800 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-700 transition-colors">Agendar Consulta</a>
        </div>
      </section>

      <section id="sobre" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Sobre a dra. Joice Prieto</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-slate-600">
              <p>Sou <strong>psicanalista</strong> com ênfase em <strong>neuropsicanálise</strong> e <strong>hipnoterapia</strong>, pós-graduada em neurociência pela USP.</p>
              <p>Sou sócia fundadora do <strong>Instituto Psicanálise Ativa</strong>, onde atendo adolescentes e adultos que buscam superar desafios emocionais.</p>
              <p>Minha abordagem integra o conhecimento científico do cérebro com a psicanálise, oferecendo um tratamento completo para quem busca transformação real.</p>
              <p>Atendo de forma online para todo o Brasil com resultados comprovados em:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>• Ansiedade</li>
                <li>• Depressão</li>
                <li>• Estresse</li>
                <li>• Fobias</li>
                <li>• Dificuldades emocionais</li>
                <li>• Baixa autoesti</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Formação</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><span>✓</span> <span>Pós-graduada em Neurociência</span></li>
                <li className="flex gap-2"><span>✓</span> <span>Especialização pela USP</span></li>
                <li className="flex gap-2"><span>✓</span> <span>Hipnoterapeuta</span></li>
                <li className="flex gap-2"><span>✓</span> <span>Tratamento de vícios</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="tratamentos" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Como funciona o tratamento</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold mb-3">Psicanálise</h3>
              <p className="text-slate-600 text-sm">Tratamento profundo que busca compreender as raízes inconscientes do sofrimento. Através da associação livre, você pode entender melhor seus padrões emocionais.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold mb-3">Hipnoterapia</h3>
              <p className="text-slate-600 text-sm">Técnica complementar que potencializa resultados no tratamento de vícios, ansiedades e fobias. Segura e eficaz.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center text-sm">
            <div className="flex items-center gap-2"><span>💻</span> <span>Atendimento online</span></div>
            <div className="flex items-center gap-2"><span>📱</span> <span>WhatsApp disponível</span></div>
            <div className="flex items-center gap-2"><span>🇧🇷</span> <span>Todo o Brasil</span></div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-16 px-6 bg-slate-800 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Agende sua consulta</h2>
          <p className="text-slate-300 mb-8">Atendimento online para todo o Brasil</p>
          <div className="space-y-4">
            <a href="https://wa.me/5511993091490" target="_blank" rel="noopener noreferrer" className="block bg-green-500 px-6 py-4 rounded-xl font-medium hover:bg-green-600 transition-colors">📱 Agendar pelo WhatsApp</a>
            <a href="tel:11993091490" className="block bg-white/10 px-6 py-4 rounded-xl font-medium hover:bg-white/20 transition-colors">📞 (11) 99309-1490</a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-200 text-center">
        <p className="text-slate-500 text-sm">© 2026 Joice Prieto - Psicanalista | CRP sob consulta</p>
      </footer>
    </main>
  );
}
