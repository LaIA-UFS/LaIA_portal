import { useState } from "react";
import FlipCard from "./FlipCard";

import PRESIDENTE from '../img/artur_lima.png';
import VICE_PRESIDENTE from '../img/pericles_leite.png';
import SECRETARIO_GERAL from '../img/nayara_oliveira.png';
import DIRETOR_ENSINO from '../img/joao_vitor.png';
import DIRETOR_MTK from '../img/arthur_barreto.png';
import DIRETOR_FINANCAS from '../img/arthur_felipe.png';
import DIRETOR_RH from '../img/bruno_carvalho.png';
import DIRETOR_PROJETOS from '../img/danilo_deichmann.png';
import DIRETOR_PESQUISA from '../img/filipe_ciriaco.png';
import DIRETOR_INOVACAO from '../img/helen_bispo.png';
import DIRETOR_EVENTOS from '../img/raissa_cavalcante.png';
import PROF_ORIENTADOR from '../img/gilton_mal.png';


import PRESIDENTE_VERSO from '../img/frase_artur_lima.png';
import VICE_PRESIDENTE_VERSO from '../img/frase_pericles_leite.png';
import SECRETARIO_GERAL_VERSO from '../img/frase_nayara_oliveira.png';
import DIRETOR_ENSINO_VERSO from '../img/frase_joao_vitor.png';
import DIRETOR_MTK_VERSO from '../img/frase_arthur_vinicius.png';
import DIRETOR_FINANCAS_VERSO from '../img/frase_arthur_felipe.png';
import DIRETOR_RH_VERSO from '../img/frase_bruno_carvalho.png';
import DIRETOR_PROJETOS_VERSO from '../img/frase_danilo_deichmann.png';
import DIRETOR_PESQUISA_VERSO from '../img/frase_filipe_ciriaco.png';
import DIRETOR_INOVACAO_VERSO from '../img/frase_helen_bispo.png';
import DIRETOR_EVENTOS_VERSO from '../img/frase_raissa_cavalcante.png';

const members = [
  { id: 1, img: PRESIDENTE, backImg: PRESIDENTE_VERSO , type: "administracao" },
  { id: 2, img: VICE_PRESIDENTE, backImg: VICE_PRESIDENTE_VERSO,type: "administracao" },
  { id: 3, img: SECRETARIO_GERAL, backImg: SECRETARIO_GERAL_VERSO , type: "administracao" },
  { id: 4, img: DIRETOR_ENSINO, backImg: DIRETOR_ENSINO_VERSO , type: "diretoria" },
  { id: 5, img: DIRETOR_MTK, backImg: DIRETOR_MTK_VERSO , type: "diretoria" },
  { id: 6, img: DIRETOR_FINANCAS, backImg: DIRETOR_FINANCAS_VERSO , type: "diretoria" },
  { id: 7, img: DIRETOR_RH, backImg: DIRETOR_RH_VERSO , type: "diretoria" },
  { id: 8, img: DIRETOR_PROJETOS, backImg: DIRETOR_PROJETOS_VERSO , type: "diretoria" },
  { id: 9, img: DIRETOR_PESQUISA, backImg: DIRETOR_PESQUISA_VERSO , type: "diretoria" },
  { id: 10, img: DIRETOR_INOVACAO, backImg: DIRETOR_INOVACAO_VERSO , type: "diretoria" },
  { id: 11, img: DIRETOR_EVENTOS, backImg: DIRETOR_EVENTOS_VERSO , type: "diretoria" },
  { id: 12, img: PROF_ORIENTADOR, disableFlip: true, type: "orientador" },
];

const filters = [
  { id: "all-btn", label: "Todos", value: "todos" },
  { id: "dev-btn", label: "Administração", value: "administracao" },
  { id: "dsg-btn", label: "Diretoria", value: "diretoria" },
  { id: "seo-btn", label: "Orientador", value: "orientador" },
];

function Equipe() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filteredMembers = members.filter(
    (member) => activeFilter === "todos" ? true : member.type === activeFilter
  );

  return (
    <div
      id="equipe"
      className="-scroll-mt-5 relative bg-gradient-to-r from-[#bedffb] to-[#fefeff] min-h-[840px] h-full"
    >
    {/*ONDA AZUL CLARO*/}
      <div className="absolute top-0 left-0 w-full leading-none z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
        <linearGradient id="ondaGradientAzulClaro" x1="100%" y1="100%" x2="0%" y2="100%">
          <stop offset="20%" stopColor="#101f5e" />
          <stop offset="30%" stopColor="#4082f3" />
          <stop offset="100%" stopColor="#ca5b97"/>
        </linearGradient>
          <path
            d="M0,60 C350,80 840,0 1200,110 L1200,35 L0,0 Z"
            fill="url(#ondaGradientAzulClaro)"
          />
        </svg>
      </div>
      
      {/*ONDA AZUL ESCURO*/}
      <div className="absolute top-0 left-0 w-full leading-none z-10">
        <svg
          viewBox="0 0 1200 180"
          preserveAspectRatio="none"
          className="w-full h-[140px]"
        >
          <defs>
            <linearGradient id="ondaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#142b6f" />
              <stop offset="100%" stopColor="#2e61ff" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="url(#ondaGradient)"
          />
        </svg>
      </div>
      
      {/* ONDA FININHA ANIMADA*/}
        <div className="absolute top-0 left-0 w-full h-[140px] z-20">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
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

      {/* Conteúdo principal*/}
      <div className="relative z-30 max-w-6xl mx-auto px-4 pt-[100px] pb-[50px]">

        {/* Título */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-semibold mb-2 text-[#0b0b1e]">Conheça nossa Equipe</h3>
        </div>

        {/* Botões de filtro */}
        <div
          id="filter-btn-box"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              id={filter.id}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition shadow-sm
                ${
                  activeFilter === filter.value
                    ? " bg-[#2e61ff] text-white"
                    : "border border-gray-400 text-gray-800 hover:bg-gray-100"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredMembers.map((member) => (
            <FlipCard key={member.id} frontImg={member.img} backImg={member.backImg}  disableFlip={member.disableFlip}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Equipe;