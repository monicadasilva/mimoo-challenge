import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  height: 700px;

  border-radius: 15px;
  background-color: white;

  position: relative;
  transform: translate(0, -25px);

  padding: 15px;

  h3 {
    font-weight: 600;
    padding: 10px 0 30px 0;
  }

  button {
    position: absolute;

    bottom: -80px;
    right: 10px;

    cursor: pointer;

    height: 50px;
    width: 50px;

    border-radius: 30px;
    border: none;
    background-color: #6876f7;
    color: white;

    ::after {
      position: relative;
      display: none;
      vertical-align: middle;
      content: "Adicionar patrocinador";

      font-size: 0.8rem;
    }
    :hover {
      ::after {
        display: initial;
      }
      font-size: 1.8rem;
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
  font-size: 1rem;
  font-weight: 600;

  color: #b2b2b2;

  width: 100%;
  thead tr {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  th:nth-child(n) {
    width: 100px;
  }
  th:nth-child(1) {
    text-align: left;
  }
`;
