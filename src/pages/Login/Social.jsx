import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Social = () => {
  const { googleLogin } = useAuth();

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="social-container flex items-center gap-2 border-2 border-black w-full justify-center py-2 px-3 rounded-lg text-xl font-normal hover:bg-slate-700 hover:text-white duration-150">
      <FaGoogle /> Google
    </button>
  );
};

export default Social;
