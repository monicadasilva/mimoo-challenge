import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { Container, Recovery } from "./style";
// import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import { DataForm } from "../../types/AuthContext";
import { useState } from "react";

export const LoginForm = () => {
  // const { setToken } = useAuth();
  const [passwordRecovery, setPasswordRecovery] = useState(true);

  const navigate = useNavigate();

  const onFinish = (values: DataForm) => {
    console.log("Success:", values);
    navigate("/dashboard");
  };

  const handlePasswordChange = () => {
    setPasswordRecovery(!passwordRecovery);
  };

  return (
    <Container>
      {passwordRecovery ? (
        <Form name="basic" onFinish={onFinish} autoComplete="off">
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Insira seu email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Insira sua senha!",
              },
            ]}
          >
            <Input type="password" placeholder="Senha" />
          </Form.Item>
          <p onClick={handlePasswordChange}>Esqueceu a senha?</p>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Recovery>
          <h3>Recupere sua senha</h3>
          <p>
            Digite seu email para receber o link de recuperação, caso seja um
            email cadastrado
          </p>
          <Input placeholder="Email" />
          <Button
            onClick={handlePasswordChange}
            type="primary"
            htmlType="submit"
            block
          >
            Entrar
          </Button>
        </Recovery>
      )}
    </Container>
  );
};
