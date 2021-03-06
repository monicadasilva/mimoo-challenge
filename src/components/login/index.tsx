import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { Container, Recovery } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DataForm } from "../../types/globalTypes";

export const LoginForm = () => {
  const [passwordRecovery, setPasswordRecovery] = useState(true);

  const navigate = useNavigate();

  const onFinish = (values: DataForm) => {
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
            <Input name="email" placeholder="Email" />
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
            <Input name="password" type="password" placeholder="Senha" />
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
          <Input name="email" placeholder="Email" />
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
