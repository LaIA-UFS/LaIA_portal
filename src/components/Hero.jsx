import GridCell from './GridCell.jsx'

function Hero() {
  return (
    <section
      id="hero"
      className="relative md:h-180 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#0b0212] to-[#0d1b46] text-white h-215 px-12 md:px-6 pt-24 md:pt-10 overflow-hidden"
    >
      {/* Texto Principal */}
      <div className="flex flex-col md:flex-row md:pl-30 w-full md:w-200 text-center md:text-left">
        <div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl pt-10 md:pt-0 font-bold leading-tight">
            Liga Acadêmica de <br/> <span className="bg-gradient-to-r from-[#184be1] via-[#05b3f8] to-[#b02f83] bg-clip-text text-transparent">Inteligência Artificial</span>
          </h1>
          <div className="text-base pt-10 md:text-lg text-gray-300 mb-8 text-left md:text-justify">
            <p>
              A Liga Acadêmica de Inteligência Artificial da UFS (LaIA), 
              tem seus objetivos baseados em pilares como pesquisa, ensino, 
              extensão e inovação.
            </p>
            <p>
              Somos um liga voltada para o
              desenvolvimento da área de IA, com a proposta de utilizar
              esse tema tanto como meio quanto como fim, 
              auxiliando ligantes e não ligantes a realizarem pesquisas com 
              apoio técnico estrutural, fomentando o protagonismo e o desenvolvimento 
              do discente, além de trazer impactos positivos para outras áreas e sociedade em 
              geral.
            </p>
            <p className="indent-8">
              <br/>
              A inovação e extensão da liga propõe um apoio para 
              realização de projetos inovadores, sempre com uma visão finalística 
              de melhorar a realidade que estamos envolvidos e com uma importante 
              perspectiva ética e moral.
            </p>
          </div>
        </div>
      </div>

    {/* Movimentação de imagem */}
    <div className="flex-1 hidden xl:block justify-center md:absolute md:justify-end md:right-6">
        <GridCell />
    </div>

      {/*ONDA AZUL ESCURO*/}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[30px] sm:h-[90px] md:h-[100px]"
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
          className="w-full h-[60px] sm:h-[130px] md:h-[160px]"
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
            className="w-full h-[40px] md:h-[140px]"
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