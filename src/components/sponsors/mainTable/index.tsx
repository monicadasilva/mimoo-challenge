import { Container } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSponsors } from "../../../redux/actions/sponsors";
import { iSponsorData } from "../../../redux/types";

export const MainTable = () => {
  const dispatch = useDispatch();
  const sponsorList = useSelector((state: any) => state.sponsors.sponsors);
  const loading = useSelector((state: any) => state.sponsors.loading);
  const error = useSelector((state: any) => state.sponsors.error);

  useEffect(() => {
    dispatch(getSponsors());
  }, []);

  return (
    <Container>
      <h3>Patrocinadores</h3>
      <table>
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
        {sponsorList.loading && <p>Carregando . . .</p>}
        {sponsorList.length > 0 &&
          sponsorList.map((elem: iSponsorData, index: number) => (
            <tbody key={index}>
              <tr>
                <td>{elem.name}</td>
                <td>{elem.situation}</td>
                <td>{elem.certified}</td>
                <td>{elem.totalBrands}</td>
                <td>{elem.totalActivedBrands}</td>
                <td>{elem.lastCampaign}</td>
                <td>{elem.status}</td>
              </tr>
            </tbody>
          ))}
        {sponsorList.length === 0 && !loading && (
          <p>Não há patrocinadores cadastrados.</p>
        )}
        {error && !loading && <p>{error}</p>}
      </table>
    </Container>
  );
};
