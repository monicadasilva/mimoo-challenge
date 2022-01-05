import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { GiHistogram } from "react-icons/gi";
import { Container } from "./style";
import Logo from "../../assets/logo.png";
import Icon from "../../assets/icon.png";

export const SidebarMenu = () => {
  return (
    <Container>
      <img src={Logo} alt="Logotipo" />
      <div>
        <GiHistogram />
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <img src={Icon} alt="icon" className="icon" />
        <Link to="/sponsors">Patrocinadores</Link>
      </div>
      <div className="Logout">
        <Link to="/">unserName</Link>
        <FiLogOut />
      </div>
    </Container>
  );
};
