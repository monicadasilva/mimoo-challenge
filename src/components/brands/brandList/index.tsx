import { Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../redux/actions/brands";
import { BrandDataCard } from "../brandCard";
import { Container } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { iProps } from "../../../types/globalTypes";

export const BrandList = ({ checked, setChecked, handleShowList }: iProps) => {
  const [searched, setSearched] = useState([]);

  const dispatch = useDispatch();
  const brand = useSelector((state: any) => state.brands.brands);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const onChange = (checkedValues: any) => {
    const brandName = checkedValues.target.value;
    if (!checked.includes(brandName)) {
      setChecked([...checked, brandName]);
    }
  };
  const onSearch = (value: string) => {
    const search = brand.filter((elem: any) =>
      elem.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearched(search);
  };
  return (
    <Container>
      <div>
        <button onClick={handleShowList} name="close">
          <AiOutlineCloseCircle onClick={handleShowList} />
        </button>

        <div className="headBrands">
          <h1>Vincular marcas</h1>

          <Input
            placeholder="Procurar marca"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Contato</th>
              <th>Responsável comercial Mimoo</th>
            </tr>
          </thead>
          {searched.length === 0
            ? brand.map((elem: any, index: number) => (
                <BrandDataCard
                  key={index}
                  image={elem.image}
                  name={elem.name}
                  contactEmail={elem.contactEmail}
                  contactName={elem.contactName}
                  onChange={onChange}
                  toCheck={true}
                  elem={elem}
                />
              ))
            : searched.map((elem: any, index: number) => (
                <BrandDataCard
                  key={index}
                  image={elem.image}
                  name={elem.name}
                  contactEmail={elem.contactEmail}
                  contactName={elem.contactName}
                  onChange={onChange}
                  toCheck={true}
                  elem={elem}
                />
              ))}
        </table>
      </div>
    </Container>
  );
};
