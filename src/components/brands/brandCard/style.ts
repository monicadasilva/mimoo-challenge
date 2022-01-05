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

  tbody {
      width: 100%;
      tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        td:nth-child(n) {
          width: 150px;
        }
        td:nth-child(3) {
          margin-left: -25px;
        }
        td:nth-child(4) {
          width: 300px;

        }
        td:nth-child(5) {
          margin-left: 50px;
 
        }
        td:nth-child(1) {
          width: 16px;
          margin-left: 10px;
        }

      }
      tr td img {
        width: 50px;
        height: 50px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    margin: 5px 0 5px 0;
  }
`;
