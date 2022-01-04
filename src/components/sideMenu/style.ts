import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;

  background-color: white;

  a {
    color: #3a3a3a;
    padding-left: 20px;
    cursor: pointer;
  }
  img {
    margin-top: 10px;
    width: 100px;
  }
  div {
    width: 90%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;

    font-size: 1.1rem;
    .icon {
      width: 15px;
      height: 15px;
      margin: 0;
    }
  }
  .Logout {
    width: 100%;
    font-size: 1.1rem;
    a {
      margin-right: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
    }

    position: absolute;
    bottom: 25px;
    left: 70px;
  }
`;
