import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import logo from "../../images/logoemprove.png";
import { getCookie } from "../../utils/cookie";

const Footer = () => {
  const session = getCookie("hasValidated");

  return (
    <footer
      className={` position-absolute bottom-0 border-top w-100 py-3 ${
        !!session === true ? "bg-white" : "bg-light"
      }`}
    >
      <div className="container-md px-4 py-4 header-text d-flex">
        <a href="https://emprove.com.mx"><img alt="Card" src={logo} style={{ width: "130px" }}/></a>
      </div>
    </footer>
  );
};

export default Footer;
