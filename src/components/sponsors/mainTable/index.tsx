import { Container } from "./style";

export const MainTable = () => {
  return (
    <Container>
      <h3>Patrocinadores</h3>
      <table>
        <tr>
          <th>Patrocinador</th>
          <th>Situação</th>
          <th>Homologada</th>
          <th>Marcas Cadastradas</th>
          <th>Marcas Ativas</th>
          <th>Última ação</th>
          <th>Status</th>
        </tr>
      </table>
    </Container>
  );
};
