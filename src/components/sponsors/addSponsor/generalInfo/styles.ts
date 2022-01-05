import styled from "styled-components";

export const Container = styled.div`
width:950px;
height: 700px;

border-radius: 15px;
background-color: white;

padding: 15px;

input {
height: 40px;
border-radius: 10px;
}
.steps{
max-width: 500px;
margin:auto;
margin-bottom: 50px;
}
.main {
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;

margin-top: -15px;

.dragger {
max-width: 176px;
height: 160px;
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


}
.subForm {
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;

input {
width: 320px;
}
.switchs {
width: 300px;
display: flex;
justify-content: space-between;
margin-top: -5px;
}
}
}
.radioBox {
.radios {
margin-top: -10px;
label {
margin-right: 50px;
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
.buttonBox{
width: 900px;

display:flex;
justify-content: space-between;

position: absolute;

bottom: 0px;

}
button{
width: 100px;
height: 40px;
border-radius: 10px;
border: none;

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
.submit{
position: absolute;

right:-20px;
}
button:nth-child(2){
background-color:#00c2a3;

color: white;
font-weight: 600;
font-size: 0.8rem;
}
.secondFrom{
max-width:950px;
.secondPart{

display: flex;
flex-wrap: nowrap;
justify-content: space-between;
align-items: center;
input{
width: 400px;
}
}

.alert{
background-color: transparent;
svg{
color: red;
}
.ant-alert-message{
color: red;
}
}
}

.brandsBox{
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

.brandsHead{
width: 87%;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;

h1{
font-size:1.2rem;
font-weight: 600;
}
button{

width: 130px;
height: 30px;
border-radius: 5px;

background-color: transparent;
border: 1px solid #6876f7;

color: #6876f7;

cursor: pointer;

}
}
.message{
width: 90%;
height: 200px;
background-color: #dfdfdf;

border-radius: 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
}
@media screen and (max-width: 1024px) {
max-width: 700px;
max-height: 400px;

input {
height: 35px;
}
.steps{
margin-bottom: 0px ;
}
.main {
.dragger {
max-width: 150px;
height: 130px;
}
.mainForm{
height: 100px;
align-self: flex-start;
}
.subForm {
margin-top: -5px;
input {
width: 230px;
}
.switchs {
width: 250px;
line-height: 1rem;
height:20px;
}
}
}
.radioBox {
margin-top:-10px;
.radios {
label {
margin-right: 0px;
height: 30px;
font-size:0.7rem;

}
}
.radioTitle{
  margin-bottom:-5px;
}
}
.btns{
position: absolute;
bottom: -50px;
.buttonBox{
max-width: 650px;
}
button{
width: 90px;
height: 30px;
font-size:0.8rem;
}
}

.secondFrom{
max-width:700px;
.secondPart{

input{
width: 300px;
}
}
}


.brandsBox{


.brandsHead{
  margin-top: 20px;


}

}
}
`;
