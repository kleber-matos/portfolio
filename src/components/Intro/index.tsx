import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
// import { RiScrollToBottomLine } from "react-icons/ri";

import { AiOutlineArrowDown } from "react-icons/ai";

import ButtonMode from "../ButtonMode";

export default function index() {
  return (
    <>
      <section className="h-screen flex items-center justify-center flex-col relative ">
        <div className="h-9/12 flex flex-col justify-center ">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-medium m-5">
              Olá, eu sou Kleber Matos
            </h3>

            <h2 className="text-4xl md:text-8xl font-bold">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1900}
                deleteSpeed={75}
                loop={0}
                typeSpeed={75}
                words={["Front End Developer", "Web Developer"]}
              />
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center absolute bottom-10">
          <div className="flex justify-between items-end w-40  ">
            <a
              href="https://github.com/kleber-matos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="size-8 md:size-9" />
            </a>

            <a
              href="https://www.linkedin.com/in/kleber-matos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="size-8 md:size-9" />
            </a>

            <a
              href="https://www.instagram.com/kleber_sk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="size-8 md:size-9" />
            </a>
          </div>
          <AiOutlineArrowDown className="hidden mt-8 md:size-10 md:block cursor-pointer animate-bounce" />
        </div>
        <ButtonMode />
      </section>
    </>
  );
}
