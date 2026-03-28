import GridCell from './GridCell.jsx'

function Hero() {
  return (
    <section
      id="hero"
      className="relative  sm:h-[103vh]  md:h-[103vh] flex flex-col md:flex-row 
      items-start  justify-start  bg-gradient-to-br from-[#0b0212]  to-[#0d1b46] 
      text-white h-[90vh] md:bg-[url(../img/fundos/hero-bg.svg)]"
    >
      {/* Texto Principal */}
      <div className="flex flex-col pt-[35%] md:pt-[10%] md:pl-[8.45vw] w-full
      md:w-[52vw] text-center md:text-left">

      <h1 className="text-[180%] md:text-[350%] font-bold leading-tight">
        <p className="text-[80%] md:text-[60%] mb-4">
            Bem vindo à{" "}
          <span className="relative inline-block bg-gradient-to-r from-[#184be1] 
          to-[#b02f83] bg-clip-text text-transparent">
            LaIA
            <span className="absolute left-0 -bottom-[2px] h-[3px] w-full 
            bg-gradient-to-r from-[#184be1] to-[#b02f83]">
            </span>
          </span>
        <br/>
        </p>
            Liga Acadêmica de
        <span className="relative inline-block">
          <span className="absolute -left-2 md:-left-3 -top-6.5 md:-top-13.5 h-[160%] 
          w-[3px] md:w-[4px] bg-gradient-to-b from-[#184be1] via-[#05b3f8] to-[#b02f83]">
          </span>
          <span className="bg-gradient-to-r from-[#184be1] via-[#05b3f8] to-[#b02f83] 
          bg-clip-text text-transparent">
            Inteligência Artificial
          </span>
        </span>

      </h1>
    </div>

    {/* Movimentação de imagem */}
    <div className="flex-1 w-120 hidden xl:block self-center md:absolute md:top-8 md:right-[8%]">
        <GridCell />
    </div>

      {/*ONDA AZUL ESCURO*/}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[3.4vh] sm:h-[13vh] md:h-[14.5vh]"
        >
          {/* GRADIENTE*/}
          <defs>
            <linearGradient id="ondaGradientHero" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#142b6f" />
              <stop offset="100%" stopColor="#2e61ff" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            fill="url(#ondaGradientHero)"
          />
        </svg>
      </div>

      {/*ONDA AZUL CLARO*/}
      <div className="absolute bottom-0 left-0 w-full leading-none z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[6.8vh] sm:h-[20.5vh] md:h-[23.2vh]"
        >
          {/* GRADIENTE*/}
          <defs>
            <linearGradient id="ondaGradientAzulClaro" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="40%" stopColor="#101f5e" />
              <stop offset="60%" stopColor="#4082f3" />
              <stop offset="100%" stopColor="#ca5b97" />
            </linearGradient>
          </defs>
          <path
            d="M0,20 C350,120 850,30 1200,80 L1200,120 L0,120 Z"
            fill="url(#ondaGradientAzulClaro)"
          />
        </svg>
      </div>
      
      {/* ONDA FININHA ANIMADA*/}
      <div className="absolute -bottom-22 md:bottom-0 left-0 w-full h-[140px] z-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-[4.53vh] md:h-[20.3vh]"
          >
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 0"
                to="-1200 0"
                dur="25s"
                repeatCount="indefinite"
              />
              <path
                d="M0,70 Q300,30 600,70 T1200,70"
                fill="none"
                stroke="#A8D5FF"
                strokeWidth="6"
                strokeOpacity="0.2"
              />
              <path
                d="M1200,70 Q1500,30 1800,70 T2400,70"
                fill="none"
                stroke="#A8D5FF"
                strokeWidth="6"
                strokeOpacity="0.2"
              />
            </g>
          </svg>
      </div>
    </section>
  );
}

export default Hero;