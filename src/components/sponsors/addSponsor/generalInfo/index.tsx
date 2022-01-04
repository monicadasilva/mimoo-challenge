import { FiUploadCloud } from "react-icons/fi";
import {
  Form,
  Switch,
  Radio,
  Button,
  Upload,
  Input,
  message,
  Steps,
  Alert,
} from "antd";

import { Container } from "./styles";
import {
  FaIndustry,
  FaBuilding,
  FaShoppingBag,
  FaShoppingCart,
  FaMoneyBillAlt,
  FaCreditCard,
} from "react-icons/fa";
import { iHandler } from "../../../../types/globalTypes";
import { useState } from "react";

import { SponsorBrandList } from "../sponsorBrands";

const { Step } = Steps;

const steps = [
  {
    title: "Dados da conta",
  },
  {
    title: "Administrador",
  },
  {
    title: "Marcas",
  },
];

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info: any) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e: any) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const NewSponserInfo = ({
  handleAddSponsor,
  handleShowList,
  checked,
  handleRemove,
}: iHandler) => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState([{}]);

  const handlePrevious = () => {
    if (current <= 0) {
      handleAddSponsor();
    }
    setCurrent(current - 1);
  };

  const handleNext = () => {
    setCurrent(current + 1);
  };
  const onFinish = (values: any) => {
    setFormData([...formData, values]);

    if (current < 2) {
      handleNext();
    }
  };

  return (
    <Container>
      <Steps className="steps" current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <Form name="validate_other" onFinish={onFinish}>
        {current === 0 && (
          <>
            <Form.Item>
              <span>Informações gerais</span>
            </Form.Item>
            <div className="main">
              <Form.Item
                valuePropName="image"
                getValueFromEvent={normFile}
                className="dragger"
              >
                <Dragger className="dragger" {...props}>
                  <p className="ant-upload-drag-icon">
                    <FiUploadCloud />
                  </p>
                  <p className="ant-upload-text">
                    Clique ou arraste para fazer o upload.
                  </p>
                </Dragger>
              </Form.Item>
              <div className="mainForm">
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Insira o nome da empresa!",
                    },
                  ]}
                >
                  <Input name="name" placeholder="Empresa" />
                </Form.Item>
                <div className="subForm">
                  <Form.Item
                    name="cnpj"
                    rules={[
                      {
                        required: true,
                        message: "Insira o cnpj da empresa!",
                      },
                    ]}
                  >
                    <Input name="cnpj" placeholder="CNPJ" />
                  </Form.Item>
                  <Form.Item
                    name="points"
                    rules={[
                      {
                        required: true,
                        message: "Insira o saldo de pontos",
                      },
                    ]}
                  >
                    <Input name="points" placeholder="Saldo de pontos" />
                  </Form.Item>
                  <div className="switchs">
                    <Form.Item name="situation" valuePropName="checked">
                      <p>
                        Prospect? <Switch size="small" />
                      </p>
                    </Form.Item>
                    <Form.Item name="certified" valuePropName="checked">
                      <p>
                        Homologada? <Switch size="small" />
                      </p>
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>

            <div className="radioBox">
              <Form.Item className="radioTitle">
                <span>Selecione o tipo de conta</span>
              </Form.Item>
              <Form.Item
                name="accountType"
                rules={[
                  { required: true, message: "Por favor escolha uma opção!" },
                ]}
              >
                <Radio.Group className="radios">
                  <Radio.Button name="industry" value="INDUSTRY">
                    {" "}
                    <FaIndustry />
                    Indústria{" "}
                  </Radio.Button>
                  <Radio.Button name="retail" value="RETAIL">
                    <FaShoppingBag /> Varejo{" "}
                  </Radio.Button>
                  <Radio.Button name="shopp" value="SHOPPING">
                    <FaShoppingCart /> Shopping{" "}
                  </Radio.Button>
                  <Radio.Button name="agency" value="AGENCY">
                    {" "}
                    <FaBuilding /> Agência
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="radioBox">
              <Form.Item className="radioTitle">
                <span>Selecione o tipo de conta</span>
              </Form.Item>
              <Form.Item
                name="accountPlan"
                rules={[
                  { required: true, message: "Por favor escolha uma opção!" },
                ]}
              >
                <Radio.Group className="radios">
                  <Radio.Button name="prepaid" value="PRE_PAID">
                    {" "}
                    <FaMoneyBillAlt />
                    Pré-pago{" "}
                  </Radio.Button>
                  <Radio.Button name="pospaid" value="POS_PAID">
                    <FaCreditCard /> Pós-pago{" "}
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </div>
          </>
        )}
        <div className="secondFrom">
          {current === 1 && (
            <>
              <Form.Item>
                <span>Informações gerais</span>
              </Form.Item>
              <Form.Item
                name="contactName"
                rules={[
                  {
                    required: true,
                    message: "Insira o nome do responsável!",
                  },
                ]}
              >
                <Input name="contactName" placeholder="Nome" />
              </Form.Item>
              <div className="secondPart">
                <Form.Item
                  name="contactEmail"
                  rules={[
                    {
                      required: true,
                      message: "Insira o email do responsável!",
                    },
                  ]}
                >
                  <Input name="contactEmail" placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="contactPhone"
                  rules={[
                    {
                      required: true,
                      message: "Insira o telefone do responsável!",
                    },
                  ]}
                >
                  <Input name="contactPhone" placeholder="Celular" />
                </Form.Item>
              </div>
              <Alert
                className="alert"
                type="info"
                banner
                message="Esse será o usuário com maiores permissões de acesso ao portal de indústria."
              />
            </>
          )}

          {current === 2 && (
            <div className="brandsBox">
              <div className="brandsHead">
                <h1>Marcas</h1>
                <button name="brands" onClick={handleShowList}>
                  Vincular marcas
                </button>
              </div>
              <div>
                {!checked ? (
                  <div className="message">
                    <p>Nenhuma marca selecionada</p>
                  </div>
                ) : (
                  <div>
                    <SponsorBrandList
                      handleShowList={handleShowList}
                      handleRemove
                      checked={checked}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="btns">
          {current < 2 && (
            <Form.Item className="buttonBox">
              <Button className="cancel" name="cancel" onClick={handlePrevious}>
                Cancelar
              </Button>
              <Button className="submit" name="submit" htmlType="submit">
                Próximo
              </Button>
            </Form.Item>
          )}
          {current >= 2 && (
            <Form.Item className="buttonBox">
              <Button className="cancel" name="cancel" onClick={handlePrevious}>
                Cancelar
              </Button>
              <Button className="submit" name="submit" htmlType="submit">
                Cadastrar
              </Button>
            </Form.Item>
          )}
        </div>
      </Form>
    </Container>
  );
};
