import { Container } from "./style";

import { FiLogOut } from "react-icons/fi";
import { GiHistogram, GiSpectacleLenses } from "react-icons/gi";
import Logo from "../../assets/logo.png";
import Icon from "../../assets/icon.png";
import { Link } from "react-router-dom";

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
        <Link to="/home-user">Patrocinadores</Link>
      </div>
      <div className="Logout">
        <button>Unser name</button>
        <FiLogOut />
      </div>
    </Container>
  );
};
