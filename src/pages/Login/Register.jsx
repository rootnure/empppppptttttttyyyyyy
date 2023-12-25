import { useForm } from "react-hook-form";
import Social from "./Social";
import FormRequiredErrorMsg from "../../components/FormRequiredErrorMsg";
import useAuth from "../../hooks/useAuth";
import { ImSpinner10 } from "react-icons/im";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const { loading, setLoading, createUser, updateUserInfo } = useAuth();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleRegister = (data) => {
    const { name, email, password } = data;
    createUser(email, password)
      .then(() => {
        reset();
        toast.success("Successfully Registered");
        updateUserInfo(name)
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        if (err.message.includes("invalid")) {
          toast.error("Invalid login credentials");
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
          <div className="min-w-80 max-w-96 pt-6 order-last">
            <div className="px-8">
              <h2 className="text-4xl font-bold text-center mb-6">
                Hello There
              </h2>
              <p className="divider">Register With</p>
              <Social />
              <p className="divider">or</p>
            </div>
            <form
              className="card-body -mt-8"
              onSubmit={handleSubmit(handleRegister)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("name", { required: true })}
                  placeholder="Mr. X"
                  className="input input-bordered mb-1"
                />
                {errors.name && <FormRequiredErrorMsg />}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  {...register("email", { required: true })}
                  placeholder="user@gmail.com"
                  className="input input-bordered mb-1"
                />
                {errors.email && <FormRequiredErrorMsg />}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <input
                  type={visible ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 64,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+\-=[\]{};'~`:"\\|,.<>/?])/,
                  })}
                  placeholder="UPPERCASE, lowercase, digit and special character"
                  className="input input-bordered mb-1"
                />
                {errors.password?.type === "required" && (
                  <FormRequiredErrorMsg />
                )}
                {errors.password?.type === "minLength" && (
                  <FormRequiredErrorMsg msg="Password Must be at least 6 characters" />
                )}
                {errors.password?.type === "maxLength" && (
                  <FormRequiredErrorMsg msg="Password cannot be longer than 64 characters" />
                )}
                {errors.password?.type === "pattern" && (
                  <FormRequiredErrorMsg msg="Password must contain one UPPERCASE, one lowercase, one digit and one special character" />
                )}
              </div>
              <div className="form-control flex-row gap-2 ps-2 mt-4">
                <input
                  type="checkbox"
                  id="visible"
                  onChange={() => setVisible(!visible)}
                />
                <label htmlFor="visible">Show Password</label>
              </div>
              <div className="form-control mt-6">
                <button className="btn rounded-full text-white text-lg bg-blue-500 hover:text-blue-500 hover:border-blue-500 hover:bg-white">
                  {loading ? (
                    <ImSpinner10 className="animate-spin text-2xl" />
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="bg-blue-500 min-w-80 max-w-96 rounded-l-lg text-center text-white flex flex-col items-center justify-center p-6 gap-y-6">
            <h2 className="text-4xl font-bold pb-2">Register New!!!</h2>
            <p>Register a new account to explore the awesome service from us</p>
            <p className="divider">or</p>
            <Link
              to="/login"
              className="px-6 py-2 rounded-full font-bold border border-white hover:bg-white hover:text-blue-500 duration-150">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
