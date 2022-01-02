import { FiUploadCloud } from "react-icons/fi";
import { Form, Switch, Radio, Button, Upload, Input, message } from "antd";

import { Container } from "./styles";
import {
  FaIndustry,
  FaBuilding,
  FaShoppingBag,
  FaShoppingCart,
  FaMoneyBillAlt,
  FaCreditCard,
} from "react-icons/fa";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

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
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const NewSponserInfo = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Container>
      <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
        <div>
          <Form.Item>
            <span>Informações gerais</span>
          </Form.Item>
          <Form.Item
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <FiUploadCloud />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Insira o nome da empresa!",
              },
            ]}
          >
            <Input placeholder="Empresa" />
          </Form.Item>
          <Form.Item
            name="cnpj"
            rules={[
              {
                required: true,
                message: "Insira o cnpj da empresa!",
              },
            ]}
          >
            <Input placeholder="CNPJ" />
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
            <Input placeholder="Saldo de pontos" />
          </Form.Item>
          <div>
            <Form.Item name="situation" valuePropName="unchecked">
              <p>
                Prospect? <Switch />
              </p>
            </Form.Item>
            <Form.Item name="certified" valuePropName="unchecked">
              <p>
                Homologada? <Switch />
              </p>
            </Form.Item>
          </div>
        </div>

        <div>
          <Form.Item>
            <span>Selecione o tipo de conta</span>
          </Form.Item>
          <Form.Item
            name="accountType"
            rules={[{ required: true, message: "Please pick an item!" }]}
          >
            <Radio.Group>
              <Radio.Button value="INDUSTRY">
                {" "}
                <FaIndustry />
                Indústria{" "}
              </Radio.Button>
              <Radio.Button value="RETAIL">
                <FaShoppingBag /> Varejo{" "}
              </Radio.Button>
              <Radio.Button value="SHOPPING">
                <FaShoppingCart /> Shopping{" "}
              </Radio.Button>
              <Radio.Button value="AGENCY">
                {" "}
                <FaBuilding /> Agência
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </div>
        <div>
          <Form.Item>
            <span>Selecione o tipo de conta</span>
          </Form.Item>
          <Form.Item
            name="accountPlan"
            rules={[{ required: true, message: "Please pick an item!" }]}
          >
            <Radio.Group>
              <Radio.Button value="PRE_PAID">
                {" "}
                <FaMoneyBillAlt />
                Pré-pago{" "}
              </Radio.Button>
              <Radio.Button value="POS_PAID">
                <FaCreditCard /> Varejo{" "}
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </div>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};
