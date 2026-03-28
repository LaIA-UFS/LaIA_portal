import { useState, useRef, useEffect } from "react";
import contraste from '../img/icons/contraste.svg'
import SandwichMenu from "./SandwichMenu.jsx"
import lupa from '../img/icons/lupa.svg'
import logo from '../img/LaIA_logo.svg'


function Header(){
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Efeito para mobile, desaparecer ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)){
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <header className="z-50 fixed flex h-14 w-full p-[0.75%] liquid-glass-header">
      {/* Container interno do Header */}
      <div className="z-60 flex w-full justify-between items-center mx-5 md:mx-10">
        {/* Nossa logo bonita */} 
        <div>
          <img 
            src={logo} 
            alt="Logo LaIA" 
            className="h-[3vh] md:h-[4.5vh] hover:scale-105 duration-100"/>
        </div>

        {/* Container de itens de navegaçao e icones */}
        <div className="z-60 w-auto flex flex-row items-center justify-center gap-5
         md:gap-10">
            {/* Menu de navegação - Desktop */}
            <nav className="hidden md:flex text-white flex md:text-[100%] font-medium 
            gap-12">
                <button className="w-12 relative shrink-1 pb-1 group cursor-pointer">
                  <a href="">
                    Inicio
                  </a>
                  <span className="line-hover-effect"></span>
                </button>

                <button className="relative w-12 pb-1 group cursor-pointer">
                  <a href="">
                    Blog
                  </a>
                  <span className="line-hover-effect"></span>
                </button>
            </nav>

            <button className="relative hidden md:inline-flex liquid-glass-btn h-6 
            w-20 overflow-hidden group cursor-pointer hover:scale-105 duration-300">
              Arena
              <span className="shining-btn-effect"></span>
            </button>
            
            {/* icones da navbar */}
            <div className="flex flex-row gap-5 md:gap-8">
              <img src={lupa}      alt="Pesquisar" className="h-[1.8vh] md:h-[2vh] 
              hover:scale-115 duration-100"/>
              <img src={contraste} alt="Contraste" className="h-[1.8vh] md:h-[2vh] 
              hover:scale-115 duration-100"/>
            </div>

            <div ref={menuRef} className="relative">
              {/* Botão sanduíche - Mobile */}
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="md:hidden flex flex-col space-y-1"
              >
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
              </button>

              {/* Menu de navegação - Mobile */}
              <div
                className={`absolute mt-2 -right-5 transition-all duration-200 w-35 
                ${open?"block opacity-100 scale-100":"hidden opacity-0 scale-95"}`}
              >
                <SandwichMenu item1="Inicio" item2="Blog" item3="Arena" />
              </div>
            </div>
        </div>
      </div>
    </header>
)}

export default Header;