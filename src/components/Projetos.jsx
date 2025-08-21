import BANNER_MISSOES from '../img/banner_missoes.jpg';
import { useState } from "react";

const cards = [
  {title: "Inovação",
    text: "Nossa missão é ir além da teoria. Buscamos ser um catalisador de ideias, incentivando a criação e o desenvolvimento de projetos práticos que  apliquem os conceitos de Inteligência Artificial para resolver desafios reais. Fomentamos o empreendedorismo, a criatividade e o pensamento crítico para que nossos membros se tornem agentes de mudança, prontos para inovar no mercado de trabalho e na sociedade.",
    btn: "Veja Mais",
    img: BANNER_MISSOES,},
  {title: "Educação",
    text: "Acreditamos que o conhecimento em IA deve ser acessível a todos. Atuamos na democratização da informação, organizando workshops, palestras e eventos que traduzem conceitos complexos em conteúdos claros e palpáveis. Nossa meta é capacitar acadêmicos, jovens e profissionais, formando uma nova geração de especialistas e entusiastas que estejam preparados para os avanços tecnológicos.",
    btn: "Veja Mais",
    img: BANNER_MISSOES,},
  {title: "Pesquisa",
    text: "Valorizamos a base científica e a excelência acadêmica. Nossa missão é promover a pesquisa de ponta em Inteligência Artificial, incentivando a colaboração entre estudantes e professores em projetos de investigação. Buscamos contribuir ativamente com a produção científica da nossa universidade, gerando estudos, publicando artigos e participando de eventos acadêmicos, garantindo que a LaIA esteja na vanguarda do conhecimento.",
    btn: "Veja Mais",
    img: BANNER_MISSOES,},
];

function Projetos() {

  const [current, setCurrent] = useState(0);
  const proxCard = () => setCurrent((prev) => (prev + 1) % cards.length);
  const anteCard = () => setCurrent((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="flex flex-col justify-center relative md:h-[94%] md:w-full w-[75%] md:max-w-[70vw] mx-auto">
      <div className="bg-[#3f6df6] rounded-xl overflow-hidden">

        {/* cards */}
        <div className="flex transition-transform duration-500 h-[63vh] sm:h-[90vh] md:h-[65vh] z-0" style={{transform:`translateX(-${current * 100}%)`}}>
          {cards.map((slide, indice) => (
            <div key={indice} className="flex flex-col md:flex-row flex-shrink-0 items-center justify-between w-full px-[4vw] sm:px-[2vw] md:px-[3vw] py-[2.5vh]">
              
                {/* Texto */}
                <div className="w-full md:max-w-[50%] px-[7%] sm:px-[0%] md:px-[4%] text-center md:text-left">
                  <h2 className="text-[150%] sm:text-[170%] md:text-[220%] font-bold text-[#0a2780] mb-[1.5vh]">{slide.title}</h2>
                  <p className="text-sm sm:text-base md:text-white mb-[7%] sm:mb-[0%]">{slide.text}</p>
                </div>

                {/* Imagem */}
                <div className="mt-[0%] md:mt-[0%]">
                  <img src={slide.img} alt={`Slide ${indice + 1}`} className="rounded-xl w-full md:w-[520px] object-contain mt-4 md:mt-0" />
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Setas */}
      <button
        onClick={anteCard}
        className="absolute top-[50%] -left-[6%] md:-left-[3.5%] -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 md:w-5 md:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
      </button>
      
      <button
        onClick={proxCard}
        className="absolute top-[50%] -right-[6%] md:-right-[3.5%] transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 md:w-5 md:h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute -bottom-[6%] left-[50%] transform -translate-x-[50%] flex gap-2 z-10">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${current === i ? "bg-[#2edcff]" : "bg-gray-300"} transition`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Projetos