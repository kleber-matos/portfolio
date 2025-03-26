import { useContext } from "react";
import { ModeContext } from "../../Context/ModeContext";
import { IoInvertModeSharp, IoInvertMode } from "react-icons/io5";

export default function Index() {
  const { mode, setMode }: any = useContext(ModeContext);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <>
      <button
        className="fixed right-6 md:right-15 bottom-15 size-14 cursor-pointer md:size-20"
        onClick={() => toggleMode()}
      >
        {mode ? (
          <IoInvertModeSharp className="fixed right-6 md:right-15 bottom-15 size-14 cursor-pointer md:size-20" />
        ) : (
          <IoInvertMode className="fixed right-6 md:right-15 bottom-15 size-14 cursor-pointer md:size-20" />
        )}
      </button>
    </>
  );
}
