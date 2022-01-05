import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    color: #00c2a3;
    font-weight: 600;
    width: 400px;

    p {
      text-align: right;
      margin: 0 0 20px 0;
      cursor: pointer;
    }
  }

  .ant-input {
    height: 45px;
    border-radius: 10px;
    font-weight: bold;
    :hover {
      border-color: #00c2a3;
    }
    :focus {
      border: 2px solid #00a9a1;
      box-shadow: none;
    }
  }

  button {
    background-color: #00c2a3;
    height: 45px;

    border: none;
    border-radius: 10px;
    font-weight: bold;
    box-shadow: 1px 3px 5px -1px #828282;

    :hover {
      background-color: #00a9a1;
    }
    :focus {
      background-color: #009b94;
    }
  }
`;

export const Recovery = styled.div`
  width: 80%;
  text-align: center;
  h3 {
    font-weight: bold;
    font-size: 1rem;
    line-height: 2rem;
  }
  p {
    font-size: 0.8rem;
    line-height: 1rem;
  }
  input {
    margin: 10px 0 20px 0;
  }
`;
