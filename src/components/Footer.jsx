function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Logo e descrição */}
        <div>
          <h2 className="text-2xl font-bold mb-2">LaIA</h2>
          <p className="text-sm text-gray-300 max-w-xs">
            Liga Acadêmica de Inteligência Artificial. Explorando o futuro com tecnologia e inovação.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Navegação</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#hero" className="hover:underline text-gray-300">A LaIA</a></li>
            <li><a href="#equipe" className="hover:underline text-gray-300">Quem somos</a></li>
            <li><a href="#projetos" className="hover:underline text-gray-300">Projetos</a></li>
            <li><a href="#contato" className="hover:underline text-gray-300">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contato</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Email: liga.ia.ufs@gmail.com</li>
            <li>Instagram: @laia.ufs</li>
            <li>Endereço: Universidade Federal de Sergipe, Dcomp</li>
          </ul>
        </div>
      </div>

      {/* Créditos */}
      <div className="mt-8 border-t border-white/20"/>
      <div className="flex flex-col items-center gap-2 px-4 py-5 text-center text-xs text-gray-400">
        <span>© {new Date().getFullYear()} LaIA. Todos os direitos reservados.</span>
        <code className="select-text font-mono text-[10px] tracking-[0.2em] text-blue-100/55">
          T05PTUFUT1BFSUE=
        </code>
      </div>
    </footer>
  );
}

export default Footer;
