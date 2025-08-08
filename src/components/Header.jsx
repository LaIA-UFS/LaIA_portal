import logo from '../img/LaIA_logo.png';

function Header (){
    return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-br from-[#0b0b1e] to-[#1438a5] text-white shadow-md p-3">
      <div className="flex flex-row justify-between items-center pl-25 x-auto">
        <div className="flex flex-row items-center space-x-4">
            <img src={logo} alt="Logo LaIA" className="h-12"/>
       </div>

        {/* Menu de navegação */}
        <nav>
          <ul className="flex space-x-10 md:text-[1rem] font-medium pr-20">
            <button 
              className="rounded-md py-2 px-4 hover:bg-[#1438a5] bg-opacity-50"><a href="#hero">A LaIA</a></button>
            <button className="rounded-md py-2 px-4 hover:bg-[#1438a5] bg-opacity-50"><a href="#projetos">Projetos</a></button>
            <button className="rounded-md py-2 px-4 hover:bg-[#1438a5] bg-opacity-50"><a href="#equipe">Quem somos</a></button>
            <button className="rounded-md py-2 px-4 hover:bg-[#1438a5] bg-opacity-50"><a href="#contato">Contato</a></button>
          </ul>
        </nav>
        </div>
    </header>
    )
}

export default Header;
