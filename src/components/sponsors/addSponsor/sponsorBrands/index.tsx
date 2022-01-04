import { Container } from "./style";
import { BrandDataCard } from "../../../brands/brandCard";
import { FiTrash } from "react-icons/fi";

export const SponsorBrandList = ({ checked, handleRemove }: any) => {
  const list = checked.slice(1);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Contato</th>
            <th>Responsável Mimoo</th>
          </tr>
        </thead>
        {checked &&
          list.map((elem: any, index: number) => (
            <div>
              <BrandDataCard
                image={elem.image}
                name={elem.name}
                contactEmail={elem.contactEmail}
                contactName={elem.contactName}
                toCheck={false}
              />
              <FiTrash
                className="icon"
                onClick={() => handleRemove(elem.name)}
              />
            </div>
          ))}
      </table>
    </Container>
  );
};
