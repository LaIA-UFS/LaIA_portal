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
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="bg-[#3f6df6] rounded-xl overflow-hidden">

        {/* cards */}
        <div className="flex transition-transform duration-500 h-[450px] z-0" style={{transform:`translateX(-${current * 100}%)`}}>
          {cards.map((slide, indice) => (
            <div key={indice} className="flex flex-col flex-shrink-0 md:flex-row items-center justify-between w-full px-12 py-12">
              
                {/* Texto */}
                <div className="max-w-1/2 px-10">
                  <h2 className="text-4xl md:text-4xl font-bold text-[#0a2780] mb-4">{slide.title}</h2>
                  <p className="text-white mb-6">{slide.text}</p>
                  {/* <button className="bg-[#2e61ff] hover:bg-[#224fd3] text-black px-6 py-3 rounded-md font-semibold transition">
                    {slide.btn}
                  </button> */}
                </div>

                {/* Imagem */}
                <div className="mt-0 md:mt-0">
                  <img src={slide.img} alt={`Slide ${indice + 1}`} className=" rounded-xl w-[520px] object-contain" />
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Setas */}
      <button
        onClick={anteCard}
        className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
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
        className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
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