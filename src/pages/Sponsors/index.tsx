import { Breadcrumb } from "antd";
import Icon from "../../assets/icon.png";
import { Link } from "react-router-dom";
import { SidebarMenu } from "../../components/sideMenu";
import { MainTable } from "../../components/sponsors/mainTable";
import { Container, Content } from "./style";
import { NewSponserInfo } from "../../components/sponsors/addSponsor/generalInfo";
import { useState } from "react";
import { BrandList } from "../../components/brands/brandList";

export const SponsorsPage = () => {
  const [addSponsor, setAddSponsor] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [checked, setChecked] = useState([{}]);

  const handleAddSponsor = () => {
    setAddSponsor(!addSponsor);
  };

  const handleShowList = () => {
    setShowBrands(!showBrands);
  };
  const handleRemove = (name: string) => {
    const filtered = checked.filter((element: any) => element.name !== name);
    setChecked(filtered);
  };
  return (
    <>
      <Container>
        <div>
          <SidebarMenu />
          <div className="header">
            <img src={Icon} alt="icon" className="icon" />
            <Link to="/sponsors">Patrocinadores</Link>
            <Breadcrumb separator=">">
              <Breadcrumb.Item href="/sponsors">Patrocinadores</Breadcrumb.Item>

              {addSponsor && (
                <Breadcrumb.Item>Cadastro Patrocinador</Breadcrumb.Item>
              )}
            </Breadcrumb>
          </div>
        </div>
        <Content>
          {!addSponsor && <MainTable handleAddSponsor={handleAddSponsor} />}
          {addSponsor && (
            <NewSponserInfo
              checked={checked}
              setChecked={setChecked}
              handleAddSponsor={handleAddSponsor}
              handleShowList={handleShowList}
              handleRemove={handleRemove}
            />
          )}
        </Content>
      </Container>
      {showBrands && (
        <BrandList
          checked={checked}
          setChecked={setChecked}
          handleShowList={handleShowList}
        />
      )}
    </>
  );
};
