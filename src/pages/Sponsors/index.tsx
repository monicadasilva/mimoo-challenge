import { Breadcrumb } from "antd";
import Icon from "../../assets/icon.png";
import { Link } from "react-router-dom";
import { SidebarMenu } from "../../components/sideMenu";
import { MainTable } from "../../components/sponsors/mainTable";
import { Container, Content } from "./style";
import { NewSponserInfo } from "../../components/sponsors/addSponsor/generalInfo/indx";
import { useState } from "react";

export const SponsorsPage = () => {
  const [addSponsor, setAddSponsor] = useState(false);

  const handleAddSponsor = () => {
    setAddSponsor(!addSponsor);
  };

  return (
    <Container>
      <SidebarMenu />
      <Content>
        <div className="header">
          <img src={Icon} alt="icon" className="icon" />
          <Link to="/sponsors">Patrocinadores</Link>
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/sponsors">Patrocinadores</Breadcrumb.Item>
            <Breadcrumb.Item>Cadastro Patrocinador</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {!addSponsor && <MainTable handleAddSponsor={handleAddSponsor} />}
        {addSponsor && <NewSponserInfo handleAddSponsor={handleAddSponsor} />}
      </Content>
    </Container>
  );
};
