import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { AiOutlineArrowRight, AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import Curriculo from "../../assets/cv.pdf";

export default function index() {
  return (
    <section className="flex justify-center items-center lg:h-screen">
      <section className="w-10/12 flex flex-col justify-center items-center">
        <div className="text-center lg:mb-9 w-screen ">
          <h2 className="lg:text-5xl text-3xl font-semibold text-[#1E3A5F] dark:text-white">
            Contato
          </h2>

          <h3 className="lg:text-3xl text-1xl font-medium">
            Gostou do meu trabalho?
          </h3>
          <p className="text-[#A1A1AA]">
            Entre em contato ou acompanhe as minhas redes sociais!
          </p>
        </div>

        <ul className="lg:w-7/12 w-12/12 ">
          <li>
            <a
              className=" flex items-center justify-between p-10 m-3 lg:w-2/2 bg-[#343A40] text-white dark:bg-white dark:text-black h-20 rounded-sm text-center "
              href="https://www.linkedin.com/in/kleber-matos/"
              target="_blank"
            >
              <FaLinkedin className="w-7 h-7 " />
              <span className="text-xs  lg:text-base">
                linkedin.com/in/kleber-matos/
              </span>
              <AiOutlineArrowRight className="w-7 h-7 rotate-320 hidden lg:flex" />
            </a>
          </li>
          <li>
            <a
              className=" flex items-center justify-between p-10 m-3 lg:w-2/2 bg-[#343A40] text-white dark:bg-white dark:text-black h-20 rounded-sm text-center "
              href="https://wa.me/5521983775532?text=Olá! Quero saber mais sobre seu trabalho."
              target="_blank"
            >
              <FaWhatsapp className="w-7 h-7 " />
              <span className="text-xs  lg:text-base">+55 (21) 98128-7174</span>
              <AiOutlineArrowRight className="w-7 h-7 rotate-320 hidden lg:flex" />
            </a>
          </li>
          <li>
            <a
              className=" flex items-center justify-between p-10 m-3 lg:w-2/2 bg-[#343A40] text-white dark:bg-white dark:text-black h-20 rounded-sm text-center "
              href="https://www.linkedin.com/in/kleber-matos/"
              target="_blank"
            >
              <FaGithub className="w-7 h-7 " />
              <span className="text-xs lg:text-base">
                github.com/kleber-matos
              </span>
              <AiOutlineArrowRight className="w-7 h-7 rotate-320 hidden lg:flex" />
            </a>
          </li>
          <li>
            <a
              className=" flex items-center justify-between p-10 m-3 lg:w-2/2 bg-[#343A40] text-white dark:bg-white dark:text-black h-20 rounded-sm text-center "
              href="mailto:klebermatos2019@gmail.com?subject=Quero falar com você!&body=Olá, gostaria de saber mais sobre seus serviços."
              target="_blank"
            >
              <MdEmail className="w-7 h-7 " />
              <span className="text-xs  lg:text-base">
                klebermatos2019@gmail.com
              </span>
              <AiOutlineArrowRight className="w-7 h-7 rotate-320 hidden lg:flex" />
            </a>
          </li>
          <li>
            <a
              className=" flex items-center justify-between p-10 m-3 lg:w-2/2 bg-[#343A40] text-white dark:bg-white dark:text-black h-20 rounded-sm text-center "
              href="https://www.instagram.com/kleber_sk/"
              target="_blank"
            >
              <AiFillInstagram className="w-7 h-7 " />
              <span className="text-xs  lg:text-base">
                instagram.com/kleber_sk/
              </span>
              <AiOutlineArrowRight className="w-7 h-7 rotate-320 hidden lg:flex" />
            </a>
          </li>
          <li>
            <a
              className=" flex items-center justify-between p-10 m-3 lg:w-2/2 bg-[#1E3A5F] text-white dark:bg-[#1E3A5F] dark:text-white h-20 rounded-sm text-center"
              href={Curriculo}
              target="_blank"
            >
              <FaLinkedin className="w-7 h-7 " />
              <span className="text-xs  lg:text-base">Download CV</span>
              <AiOutlineArrowRight className="w-7 h-7 rotate-320 hidden lg:flex" />
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}
