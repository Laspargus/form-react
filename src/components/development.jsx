import React, { useEffect, useState } from "react";

import { Form, Radio, Rate, Button, Select } from "antd";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const language = [
  "php",
  "Laravel",
  "python",
  "django",
  "javascrip",
  "react",
  "vue",
  "angular",
  "node",
  "flutter",
  "svelte",
];
const children = [];
for (let i = 0; i < 10; i++) {
  children.push(<Option key={language[i]}>{language[i]}</Option>);
}

const Development = ({ handleSubmit }) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  return (
    <Form
      {...layout}
      layout={formLayout}
      form={form}
      name="control-hooks"
      onFinish={handleSubmit}
      className="card p-3"
    >
      <p className="text-primary">
        Quel est votre niveau général en développement ?
      </p>

      <Form.Item name="general" label="General development level">
        <Radio.Group>
          <Radio.Button size="large" className="mr-2" value="Very bad">
            Very bad
          </Radio.Button>
          <Radio.Button size="large" className="mr-2" value="Immotep">
            Immotep
          </Radio.Button>
          <Radio.Button size="large" className="mr-2" value="Pretty good">
            Pretty good
          </Radio.Button>
          <Radio.Button size="large" className="mr-2" value="Outsmarting">
            Outsmarting{" "}
          </Radio.Button>
        </Radio.Group>
      </Form.Item>

      <p className="text-primary">Maitrisez-vous déjà certains languages ?</p>

      <div className="row">
        <Form.Item className="col-md-3" name="Ruby" label="Ruby">
          <Rate />
        </Form.Item>
        <Form.Item className="col-md-3" name="Javascript" label="Javascript">
          <Rate />
        </Form.Item>
        <Form.Item className="col-md-3" name="Python" label="Python">
          <Rate />
        </Form.Item>
        <Form.Item className="col-md-3" name="Php" label="Php">
          <Rate />
        </Form.Item>
      </div>

      <p className="text-primary">
        Quel language souhaitez-vous apprendre pendant votre formation ?
      </p>

      <Form.Item name="wishes" label="General development level">
        <Select
          size="large"
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
        >
          {children}
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button className="mt-5" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Development;
