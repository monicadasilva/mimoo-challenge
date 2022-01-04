import { iSponsorData } from "../../../redux/types";
import { TableBox } from "./style";
export const TableDataCard = ({
  index,
  name,
  situation,
  certified,
  totalBrands,
  totalActivedBrands,
  lastCampaign,
  status,
}: iSponsorData) => {
  return (
    <TableBox key={index}>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{situation.toLowerCase()}</td>
          {certified ? <td>Sim</td> : <td>Não</td>}
          <td>{totalBrands}</td>
          <td>{totalActivedBrands}</td>
          <td>{lastCampaign !== null ? lastCampaign : "N/A"}</td>
          {status === "ACTIVED" ? (
            <td className={status}>Ativo</td>
          ) : (
            <td className={status}>{status !== null ? "Inativo" : "N/A"}</td>
          )}
        </tr>
      </tbody>
    </TableBox>
  );
};
