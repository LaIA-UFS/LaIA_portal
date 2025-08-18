import { useState } from "react";
import logo from '../img/LaIA_logo.png';

function Header (){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-br from-[#0b0b1e] to-[#1438a5] text-white shadow-md p-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">

       {/* Nossa logo bonita */} 
        <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo LaIA" className="h-12"/>
       </div>

       {/* Botão sanduíche - Mobile */}
       <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Menu de navegação - Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 md:text-[1rem] font-medium">
            <li><a href="#hero" className="px-4 py-2 rounded-md hover:bg-[#1438a5] bg-opacity-50">A LaIA</a></li>
            <li><a href="#projetos" className="px-4 py-2 rounded-md hover:bg-[#1438a5] bg-opacity-50">Projetos</a></li>
            <li><a href="#equipe" className="px-4 py-2 rounded-md hover:bg-[#1438a5] bg-opacity-50">Quem somos</a></li>
            <li><a href="#contato" className="px-4 py-2 rounded-md hover:bg-[#1438a5] bg-opacity-50">Contato</a></li>
          </ul>
        </nav>
      </div>

      {/* Menu de navegação - Mobile */}
      {menuOpen && (
        <nav className="md:hidden mt-3 bg-[#0b0b1e] bg-opacity-90 shadow-lg rounded-md">
          <ul className="flex flex-col space-y-2 p-4 font-medium">
            <li><a href="#hero" className="block px-4 py-2 rounded-md hover:bg-[#1438a5]">A LaIA</a></li>
            <li><a href="#projetos" className="block px-4 py-2 rounded-md hover:bg-[#1438a5]">Projetos</a></li>
            <li><a href="#equipe" className="block px-4 py-2 rounded-md hover:bg-[#1438a5]">Quem somos</a></li>
            <li><a href="#contato" className="block px-4 py-2 rounded-md hover:bg-[#1438a5]">Contato</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header;