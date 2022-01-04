import styled from "styled-components";

export const TableBox = styled.div`
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 15px;
  margin: 20px 0 20px 0;
  padding: 5px;

  text-align: center;
  color: black;
  font-weight: 400;

  tbody tr {
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  td {
    vertical-align: middle;
    font-size: 1rem;
  }
  td:nth-child(n) {
    width: 125px;
  }
  td:nth-child(1) {
    text-align: left;
    margin-left: 5px;
  }
  .ACTIVED {
      background-color:#00c2a3;
      color: white;
      border-radius: 5px;
      line-height: 1.5rem;
    }

    .INACTIVED {
      background-color:#3a3a3a;
      color: white;
      border-radius: 5px;
      line-height: 1.5rem;
    }
  }
`;
