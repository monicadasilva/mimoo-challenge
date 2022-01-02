import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 600px;

  border-radius: 10px;
  background-color: white;

  position: relative;
  transform: translate(0, 10px);

  padding: 15px;

  h3 {
    font-weight: 600;
    line-height: 3rem;
  }
  table,
  tr {
    font-size: 0.8rem;
    font-weight: 600;

    color: #b2b2b2;

    width: 100%;

    /* th:nth-child(1) {
      width: 200px;
      text-align: left;
    } */
  }
  table tbody tr {
    color: black;
    font-weight: 400;
  }
`;
