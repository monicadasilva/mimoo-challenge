import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  flex: 1;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  position: relative;
  .header {
    position: absolute;
    top: 20px;
    left: -65px;
    transform: translate(50%, 50%);
    .icon {
      width: 15px;
      margin-right: 20px;
    }
    a:nth-child(2) {
      color: black;
      font-weight: 600;
      font-size: 1.1rem;
    }
    .ant-breadcrumb {
      margin-top: 2px;
      font-size: 0.7rem;
    }
  }
`;
