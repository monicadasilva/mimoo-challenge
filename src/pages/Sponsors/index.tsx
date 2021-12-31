import { Breadcrumb } from "antd";
import Icon from "../../assets/icon.png";
import { Link } from "react-router-dom";
import { SidebarMenu } from "../../components/sideMenu";
import { MainTable } from "../../components/sponsors/mainTable";
import { Container, Content } from "./style";

export const SponsorsPage = () => {
  return (
    <Container>
      <SidebarMenu />
      <Content>
        <div>
          <img src={Icon} alt="icon" className="icon" />
          <Link to="/sponsors">Patrocinadores</Link>
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/sponsors">Patrocinadores</Breadcrumb.Item>
            <Breadcrumb.Item>Cadastro Patrocinador</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <MainTable />
      </Content>
    </Container>
  );
};
