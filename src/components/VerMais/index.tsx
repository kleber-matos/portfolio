import { Link } from "react-router-dom";

export default function index() {
  return (
    <>
      <Link
        id="contato"
        to="/vermais"
        className="flex justify-center items-center text-2xl text-center mt-15 mb-15 lg:mb-0  cursor-pointer"
      >
        Ver mais projetos +
      </Link>
    </>
  );
}
