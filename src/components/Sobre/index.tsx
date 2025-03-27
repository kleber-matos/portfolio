import foto from "../../assets/kleber.png";
// import foto2 from "../../assets/kleber2.png";
import Curriculo from "../../assets/cv.pdf";

export default function index() {
  return (
    <>
      <section
        className="flex items-center justify-center lg:h-screen"
        id="sobre"
      >
        <div className="flex items-center justify-between flex-col lg:flex-row m-2 lg:m-30">
          <img
            className="rounded-full w-1/2 lg:w-1/3 "
            src={foto}
            alt="Minha imagem (kleber matos)"
          />

          <div className="w-screen  lg:w-7/12 text-center lg:text-start mt-2 flex flex-col justify-center lg:items-start items-center p-3">
            <p className="lg:text-sm">Quem sou eu?</p>
            <h2 className="text-[#1E3A5F] text-5xl font-bold dark:text-white">
              Sobre Mim
            </h2>
            <p className="lg:text-lg text-justify mb-3 mt-3">
              Sou um programador front-end curioso e autodidata, sempre
              explorando novas tecnologias para desenvolver soluções web que
              combinam usabilidade e design.
            </p>
            <p className="lg:text-lg text-justify mb-2 mt-2">
              Durante minha jornada, atuei como
              <span className="font-semibold">
                {" "}
                instrutor em uma escola de programação
              </span>
              , desenvolvendo habilidades como trabalho em equipe, didática e
              criação de desafios técnicos.
            </p>
            <p className="lg:text-lg text-justify mb-2 mt-2">
              Atualmente, estudo e aplico
              <span className="font-semibold ml-1">
                {" "}
                React.js (React Router, Axios, useContext), Styled-components,
                SASS, Tailwind CSS e JavaScript
              </span>
              , além de aprender
              <span className="font-semibold ml-1">
                Vue.js, Next.js e TypeScript
              </span>
              , aprimorando minha lógica e habilidades técnicas por meio de
              projetos práticos.
            </p>

            <a
              className="bg-[#1E3A5F] rounded-sm text-white font-semibold h-13 w-1/2 lg:w-4/12 dark:bg-white dark:text-black flex justify-center items-center mt-8"
              href={Curriculo}
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
