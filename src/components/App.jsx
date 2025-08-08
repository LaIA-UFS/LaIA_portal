// Componente central da aplicação
import "../css/index.css"
import "../js/index.js"
import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import SecProj from "./SecProj.jsx"
import Contact from "./Contact.jsx"
import Equipe from "./Equipe.jsx"
import Footer from "./Footer.jsx"

function App() {

  return (
    <>
      <div className="App overflow-x-hidden">
        <Header/>
        <Hero/>
        <SecProj/>
        <Equipe/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
