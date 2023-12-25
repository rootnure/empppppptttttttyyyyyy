import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import useAuth from "../../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <Banner />
      <div className="text-center py-12 space-y-4 bg-gradient-to-r from-blue-50 to-sky-50">
        <div className="flex gap-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold leading-relaxed">
            Are you a team lead?
            <br />
            Want to track your tasks and progress?
            <br />
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 text-transparent bg-clip-text">
              Then you are at the right place.
            </span>
          </h3>
          <h3 className="text-2xl font-bold leading-relaxed">
            Keep live track of your tasks.
            <br />
            Move your tasks to new state using
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
              drag and drop.
            </span>
            <br />
            Never lost the flow of your tasks.
          </h3>
        </div>
        {!user && (
          <p className="text-lg">
            <Link className="text-blue-500 underline" to="/login">
              Login
            </Link>{" "}
            or{" "}
            <Link className="text-blue-500 underline" to="/register">
              Register Now
            </Link>{" "}
            to begin.
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
