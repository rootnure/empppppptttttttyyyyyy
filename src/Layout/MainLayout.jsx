import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Container from "../components/Container";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Container className="min-h-[calc(100vh-178px)] pt-16">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
