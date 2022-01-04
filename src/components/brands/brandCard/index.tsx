import { Checkbox } from "antd";
import { iBrandsData } from "../../../redux/types";
import { TableBox } from "./style";

export const BrandDataCard = ({
  image,
  name,
  contactEmail,
  contactName,
  onChange,
  toCheck,
  elem,
}: iBrandsData) => {
  return (
    <TableBox>
      <tbody>
        <tr>
          {toCheck && (
            <td>
              <Checkbox name={name} value={elem} onChange={onChange} />
            </td>
          )}
          <td>
            <img src={image} alt={name} />
          </td>
          <td>{name}</td>
          <td>{contactEmail}</td>
          <td>{contactName}</td>
        </tr>
      </tbody>
    </TableBox>
  );
};
