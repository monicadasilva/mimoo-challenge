import styled from "styled-components";

export const Container = styled.div`
  width: 750px;
  height: 500px;

  border-radius: 10px;
  background-color: white;

  position: relative;
  transform: translate(0, -35px);

  padding: 15px;

  h3 {
    font-weight: 600;
    padding: 10px 0 30px 0;
  }

  button {
    position: fixed;
    transform: translate(695px, 150px);

    cursor: pointer;

    height: 40px;
    width: 40px;

    border-radius: 30px;
    border: none;
    background-color: #6876f7;
    color: white;

    ::after {
      display: none;
      vertical-align: middle;
      content: "Adicionar patrocinador";

      font-size: 0.8rem;
    }
    :hover {
      ::after {
        display: initial;
      }
      font-size: 1.5rem;
      transform: translate(545px, 150px);
      width: 190px;
      svg {
        width: 15px;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
`;

export const TableHead = styled.table`
  font-size: 0.7rem;
  font-weight: 600;

  color: #b2b2b2;

  width: 100%;
  thead tr {
    width: 710px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  th:nth-child(n) {
    width: 80px;
  }
  th:nth-child(1) {
    text-align: left;
  }
`;
