import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
  }
`;

export const MainContent = styled.div`
  width: 320px;
  height: 100vh;
  display: none;

  @media only screen and (min-width: 768px) {
    min-width: 520px;
    background-color: #00c2a3;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    h1 {
      margin-top: 150px;
      color: white;
      max-width: 270px;
      font-size: 1.5rem;
      line-height: 2.5rem;
      font-weight: bold;
    }
    p {
      margin-top: -110px;
      max-width: 270px;
      font-size: 1rem;
    }
    img {
      align-self: flex-end;
    }
  }
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 120px;
  }
  @media only screen and (min-width: 768px) {
    flex: 1;

    img {
      width: 100px;
      margin: 20px;
    }
  }
`;
