import Projetos from "./Projetos";

function SecProj() {
  return (
    <section
      id="projetos"
      className="flex flex-col justify-center gap-[4.5vh] scroll-mt-20 h-[85vh] sm:h-[110vh] md:h-[86vh] bg-gradient-to-r from-[#142b6f] to-[#2e61ff]"
    > 
        <h3 className="text-white text-[150%] md:text-[250%] font-semibold text-center">
          Conheça nossas <span className="bg-gradient-to-r from-[#4cd6e6] via-[#05b3f8] to-[#fd45bc] bg-clip-text text-transparent">missões</span>
        </h3>
          <div className="h-[62vh] sm:h-[100vh] md:h-[70vh]"><Projetos /></div>
    </section>
  );
}

export default SecProj;
