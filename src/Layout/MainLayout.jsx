import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Container from "../components/Container";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Container className="h-96 bg-red-500">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
