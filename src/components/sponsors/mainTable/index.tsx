import { Container, TableHead } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSponsors } from "../../../redux/actions/sponsors";
import { iSponsorData } from "../../../redux/types";
import { HiPlus } from "react-icons/hi";
import { TableDataCard } from "../tableDataCard";
import { iHandler } from "../../../types/globalTypes";

export const MainTable = ({ handleAddSponsor }: iHandler) => {
  const dispatch = useDispatch();

  const sponsorList = useSelector((state: any) => state.sponsors.sponsors);
  const loading = useSelector((state: any) => state.sponsors.loading);
  const error = useSelector((state: any) => state.sponsors.error);

  useEffect(() => {
    dispatch(getSponsors());
  }, [dispatch]);

  return (
    <Container>
      <h3>Patrocinadores</h3>
      <TableHead>
        <thead>
          <tr>
            <th>Patrocinador</th>
            <th>Situação</th>
            <th>Homologada</th>
            <th>Marcas Cadastradas</th>
            <th>Marcas Ativas</th>
            <th>Última ação</th>
            <th>Status</th>
          </tr>
        </thead>
      </TableHead>
      {sponsorList.loading && <p>Carregando . . .</p>}
      {sponsorList.length > 0 &&
        sponsorList.map((elem: iSponsorData, index: number) => (
          <TableDataCard
            key={elem.name}
            index={index}
            name={elem.name}
            situation={elem.situation}
            certified={elem.certified}
            totalBrands={elem.totalBrands}
            totalActivedBrands={elem.totalActivedBrands}
            lastCampaign={elem.lastCampaign}
            status={elem.status}
          />
        ))}
      {sponsorList.length === 0 && !loading && (
        <p>Não há patrocinadores cadastrados.</p>
      )}
      {error && !loading && <p>{error}</p>}
      <button name="addSponsor" onClick={handleAddSponsor}>
        <HiPlus />
      </button>
    </Container>
  );
};
