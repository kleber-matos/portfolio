import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center flex flex-col items-center ">
        <h1 className="text-6xl font-semibold">Pagina não encontrada! :(</h1>
        <Link
          className="bg-[#1E3A5F] text-white w-50 flex justify-center items-center h-15 rounded-sm text-2xl font-semibold cursor-pointer mt-15"
          to="/"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
