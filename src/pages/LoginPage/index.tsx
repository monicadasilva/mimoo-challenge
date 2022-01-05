import { Container, MainContent, FormContent } from "./style";
import loginImg from "../../assets/login-password.svg";
import logo from "../../assets/logo.png";
import { LoginForm } from "../../components/login";

export const LoginPage = () => {
  return (
    <Container>
      <MainContent>
        <h1>1º programa de lealdade do Brasil</h1>
        <p>Baseado na empatia, gratidão e sustentabilidade.</p>
        <img src={loginImg} alt="Cartoon with group of people" />
      </MainContent>
      <FormContent>
        <img src={logo} alt="Logo" />
        <LoginForm />
      </FormContent>
    </Container>
  );
};
