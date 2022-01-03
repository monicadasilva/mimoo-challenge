import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 600px;

  border-radius: 10px;
  background-color: white;

  padding: 15px;
  .steps{
    max-width: 500px;
    margin:auto;
    margin-bottom: 20px;
  }
  .main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-top: -15px;

    .dragger {
      max-width: 156px;
      height: 140px;
      align-self: flex-start;
      border-color: #6876f7;
      border-radius: 10px;

      background-color: transparent;
      p {
        color: #6876f7;
        font-size: 0.8rem;
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
    .mainForm {
      flex: 1;
      margin-left: 20px;

      input {
        height: 40px;
        border-radius: 10px;
      }
    }
    .subForm {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      input {
        width: 250px;
      }
      .switchs {
        width: 45%;
        display: flex;
        justify-content: space-between;
        margin-top: -10px;
      }
    }
  }
  .radioBox {
    .radios {
      margin-top: -10px;
      label {
        margin-right: 10px;
        border-radius: 5px;
        height: 40px;
        color: #b2b2b2;
        
        span{
          vertical-align: middle;
        }

        svg{
          margin-right: 10px;
        }
      }
      label:nth-child(1)
      margin-left: 0;
      }
      .radioTitle{
        margin-bottom: 10px;
      }
    }
    .ant-radio-button-wrapper {
      border-left-width: 1.02px;
    }
    .ant-radio-button-wrapper:not(:first-child)::before {
      content: none;
    }
  }
  .btns{
    .ant-form-item-control-input-content{
      width: 700px;
      display:flex;
      justify-content: space-between;
      margin-top:60px;
    }
    button{
      width: 100px;
      height: 40px;
      border-radius: 10px;
      :hover{
      border: none;
    }
    :focus{
      border: none;
    }
    }
  }
  .cancel{
    background-color: #dfdfdf;
    color: #b2b2b2;
    font-weight: 600;
    font-size: 0.8rem;
    
  }
  button:nth-child(2){
    background-color:#00c2a3;
    
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
  }
`;
