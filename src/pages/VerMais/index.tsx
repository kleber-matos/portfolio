import { Link } from "react-router-dom";

export default function index() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-semibold mb-2">
          Pagina em construção! 🚧
        </h1>
        <p className="mb-10 text-[#A1A1AA]">
          Meu github possui diversos projetos, uma alternativa provisoria.
        </p>
        <a
          className="bg-[#343A40] m-3 rounded-sm text-white font-semibold h-13 w-1/2 lg:w-4/12 dark:bg-white dark:text-black flex justify-center items-center"
          href="https://github.com/kleber-matos"
          target="_blank"
        >
          Vizualizar Github
        </a>
        <Link
          className="bg-[#1E3A5F] rounded-sm text-white font-semibold h-13 w-1/2 lg:w-4/12 dark:bg-white dark:text-black flex justify-center items-center"
          to="/"
        >
          Voltar
        </Link>
      </div>
    </section>
  );
}
