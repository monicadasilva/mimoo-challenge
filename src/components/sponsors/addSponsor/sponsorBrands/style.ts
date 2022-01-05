import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  table {
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin-top: 50px;
    thead {
      width: 95%;
      tr {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        line-height: 2rem;
        margin-bottom: 10px;

        font-size: 0.8rem;
        font-weight: 600;

        color: #b2b2b2;
        th:nth-child(n) {
          width: 150px;
          text-align: left;
        }
        th:nth-child(4) {
          margin-left: -30px;
        }
      }
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .icon {
      position: absolute;
      right: 50px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1024px) {
    height: 300px;

    table {
      margin-top: -50px;
      thead {
        width: 95%;
        tr {
          height: 30px;
          margin-bottom: 5px;
        }
      }
    }
  }
`;
