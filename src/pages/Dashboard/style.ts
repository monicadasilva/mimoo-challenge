import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AnimationBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 10px 0;
    font-size: 1.7rem;
    font-weight: 600;
  }
  div:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 600;

    width: 250px;

    align-self: flex-start;
    position: absolute;
    transform: translate(50px, -200px);

    a {
      color: black;
      cursor: pointer;
    }

    p:nth-child(n) {
      font-size: 0.7rem;
      font-weight: lighter;
      line-height: 1.5rem;
    }
    svg {
      margin-right: 20px;
    }

  }
  @media screen and (max-width:1024px){
    div:nth-child(1) {
  transform: translate(20px, 0px);
}
`;
