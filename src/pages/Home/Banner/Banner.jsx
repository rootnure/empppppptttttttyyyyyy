import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import bannerImg from "../../../assets/images/cover.jpg";

const Banner = () => {
  return (
    <section>
      <div
        className="hero min-h-[60vh]"
        style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="hero-overlay bg-white bg-opacity-80"></div>
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to
              <br />
              SCC Technovision Inc.
            </h1>
            <p className="mb-5 font-semibold">
              Enhance and improve your task management with our platform.
            </p>
            <button className="btn group font-bold bg-blue-500 border-none text-white hover:bg-blue-600">
              Let&apos;s Explore
              <FaArrowUpRightFromSquare className="rotate-45 group-hover:rotate-0 duration-150" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
