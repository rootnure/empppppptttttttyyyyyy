import { FaGoogle } from "react-icons/fa6";

const Social = () => {
  return (
    <button className="social-container flex items-center gap-2 border-2 border-black w-full justify-center py-2 px-3 rounded-lg text-xl font-normal hover:bg-slate-700 hover:text-white duration-150">
      <FaGoogle /> Google
    </button>
  );
};

export default Social;
