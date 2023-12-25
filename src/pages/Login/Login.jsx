import { useForm } from "react-hook-form";
import Social from "./Social";
import FormRequiredErrorMsg from "../../components/FormRequiredErrorMsg";
import useAuth from "../../hooks/useAuth";
import { ImSpinner10 } from "react-icons/im";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loading, setLoading, passwordLogin } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const loginSubmit = (data) => {
    const { email, password } = data;
    passwordLogin(email, password)
      .then(() => {
        reset();
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((err) => {
        if (err.message.includes("invalid")) {
          toast.error("Wrong Email or Password");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-fit grid grid-cols-2 shadow-xl rounded-lg mt-16">
          <div className="min-w-96 pt-6">
            <div className="px-8">
              <h2 className="text-4xl font-bold text-center">Welcome Back</h2>
              <p className="divider">Login With</p>
              <Social />
              <p className="divider">or</p>
            </div>
            <form
              className="card-body -mt-8"
              onSubmit={handleSubmit(loginSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Registered Email Address"
                  className="input input-bordered"
                />
                {errors.email && <FormRequiredErrorMsg />}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Account Password"
                  className="input input-bordered"
                />
                {errors.password && <FormRequiredErrorMsg />}
                {/* will implement latter */}
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white text-lg bg-blue-500 hover:text-blue-500 hover:border-blue-500 hover:bg-white">
                  {loading ? (
                    <ImSpinner10 className="animate-spin text-2xl" />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="bg-blue-500">login form</div>
        </div>
      </div>
    </>
  );
};

export default Login;
