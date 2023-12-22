import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-[calc(100vh-208px)] pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
