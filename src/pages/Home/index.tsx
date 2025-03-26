import Intro from "../../components/Intro";
import Header from "../../components/Header";
import Buttonmode from "../../components/ButtonMode";

import Sobre from "../../components/Sobre";
import Tecnologias from "../../components/Tecnologias";
import Projetos from "../../components/Projetos";
import VerMais from "../../components/VerMais";
import { data } from "../../data/data";
import { useRef } from "react";
import Contato from "../../components/Contato";

export default function index() {
  const sobreRef = useRef<HTMLDivElement>(null);
  const tecRef = useRef<HTMLDivElement>(null);

  const scrollToSobre = () => {
    sobreRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTec = () => {
    tecRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="dark:bg-[#212529] dark:text-[#F8F9FA]">
      <Header scrollToSobre={scrollToSobre} scrollToTec={scrollToTec} />
      <Intro />
      <span ref={sobreRef}></span>
      <Buttonmode />
      <Sobre />

      <Tecnologias />
      <span ref={tecRef}></span>

      {data.map((e, id): any => (
        <Projetos
          key={id}
          image={e.imagem}
          title={e.title}
          description={e.description}
          tec={e.tec}
          previa={e.previa}
          code={e.code}
          id={id}
        />
      ))}

      <VerMais />
      <Contato />
    </div>
  );
}
