import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../../assets/images/logo.png";
import Container from "../../components/Container";

const Footer = () => {
  return (
    <footer className="">
      <Container className="footer p-10">
        <aside>
          <img src={logo} className="w-16 py-2" />
          <p>
            SCC Technovision Inc.
            <br />
            Your reliable tech service provider
          </p>
          <p>
            <small>Copyright &copy; 2023</small>
          </p>
        </aside>
        <nav>
          <header className="footer-title">Contact</header>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <FaPhone /> <a href="tel:+8801234567890">+880 1234-567890</a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:support@scctech.info">support@scctech.info</a>
            </p>
            <p className="flex items-center gap-2">
              <FaLocationDot /> Dhaka, Bangladesh - 1100
            </p>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-2">
            <a href="#">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#">
              <FaLinkedin className="text-2xl scale-90" />
            </a>
            <a href="#">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
