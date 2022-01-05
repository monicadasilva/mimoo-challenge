import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #f7f7f7;

  display: flex;
  align-items: center;

  .header {
    position: absolute;
    top: 25px;
    left: 180px;
    transform: translate(50%, 50%);
    .icon {
      width: 20px;
      margin-right: 20px;
    }
    a:nth-child(2) {
      color: black;
      font-weight: 600;
      font-size: 1.5rem;
    }
    .ant-breadcrumb {
      margin-top: 2px;
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .header {
      position: absolute;
      top: 2px;

      .icon {
        width: 20px;
        margin-right: 20px;
      }
      a:nth-child(2) {
        color: black;
        font-weight: 600;
        font-size: 1rem;
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 100%;
  margin: auto;

  @media screen and (min-width: 1300px) {
    max-width: 950px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 700px;
    margin-top: 75px;
  }
`;
