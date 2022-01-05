import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  margin: 0 auto;

  background-color: #ffffff;

  position: absolute;

  top: 0;
  left: 0;
  button{
    background-color: transparent;
    border: none;
    width:80px;
    height:80px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 200px;
    cursor: pointer;
    z-index:2;

    svg{
      width:40px;
      height:40px;
      cursor: pointer;

    }

  }

  .headBrands {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    top: 20px;
    h1 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 50px;
    }
    input {
      align-self: center;
      max-width: 450px;
      height: 40px;
      border-radius: 10px;
    }

  }


  table {
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin-top: 50px;
    thead {
      width: 100%;
      tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 2rem;
        margin-bottom: 10px;

        font-size: 0.8rem;
        font-weight: 600;

        color: #b2b2b2;
        th:nth-child(4) {
          width: 200px;
        }
        th:nth-child(1) {
          width: 16px;
        }
      }
    }
    @media screen and (max-width: 1024px) {
    }
`;
