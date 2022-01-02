import styled from "styled-components";

export const TableBox = styled.div`
  width: 710px;
  border: 1px solid #dfdfdf;
  border-radius: 15px;
  margin: 20px 0 20px 0;
  padding: 5px;

  text-align: center;
  color: black;
  font-weight: 400;

  tbody tr {
    width: 700px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  td {
    vertical-align: middle;
    font-size: 0.7rem;
  }
  td:nth-child(n) {
    width: 80px;
  }
  td:nth-child(1) {
    text-align: left;
  }
`;
