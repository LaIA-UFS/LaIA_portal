import Projetos from "./Projetos";

function SecProj() {
  return (
    <section
      id="projetos"
      className="flex flex-col justify-center gap-[40px] scroll-mt-20 h-[760px] md:h-[600px] bg-gradient-to-r from-[#142b6f] to-[#2e61ff] px-4 sm:px-0"
    > 
        <h3 className="text-white text-2xl sm:text-5xl font-semibold text-center">
          Conheça nossas <span className="bg-gradient-to-r from-[#4cd6e6] via-[#05b3f8] to-[#fd45bc] bg-clip-text text-transparent">missões</span>
        </h3>
          <div className="h-[550px] sm:h-auto"><Projetos /></div>
    </section>
  );
}

export default SecProj;
