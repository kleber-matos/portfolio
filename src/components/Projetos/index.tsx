// import projeto1 from "../../assets/projeto1.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
// import { data } from "../../data/data";

interface PropProjeto {
  image: string;
  title: string;
  description: string;
  tec: any;
  previa: string;
  code: string;
  id: number;
}
export default function index({
  image,
  title,
  description,
  tec,
  previa,
  code,
}: PropProjeto) {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="mt-20 w-11/12 justify-between flex lg:flex-row flex-col text-center lg:text-start items-center">
          <img className="  lg:w-1/2" src={image} alt="imagem do projeto" />

          <div className="lg:w-2/5 flex flex-col justify-between text-justify">
            <h2 className="lg:text-4xl font-semibold mb-2">{title}</h2>
            <p className="text-sm">{description}</p>

            <div className="flex w-5/5   lg:3/5 flex-wrap justify-center lg:justify-start mt-5">
              {tec.map((e: any, id: number) => (
                <span
                  key={id}
                  className="bg-[#E0E0E0] w-2/5 lg:w-3/12 h-9 flex justify-center items-center rounded-sm font-semibold text-[#1E3A5F] mr-3  text-xs mt-2 p-1"
                >
                  {e}
                </span>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row ">
              <button className="w-1/1  lg:w-4/12 bg-[#1E3A5F] h-13 text-white rounded-sm text-2xl flex justify-center items-center mt-5 lg:mr-4 dark:bg-[#E0E0E0] dark:text-black">
                <a
                  className="flex items-center"
                  href={previa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prévia
                  <AiOutlineArrowRight className="ml-3 cursor-pointer" />
                </a>
              </button>
              <button className="w-1/1  lg:w-4/12 bg-[#1E3A5F] h-13 text-white rounded-sm text-2xl flex justify-center items-center mt-5 dark:bg-[#E0E0E0] dark:text-black">
                <a className="flex items-center" href={code} target="_blank">
                  Code
                  <FaGithub className="ml-3 cursor-pointer" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
