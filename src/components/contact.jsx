import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";

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

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="33">+33</Option>
    </Select>
  </Form.Item>
);

const Contact = ({ handleSubmit }) => {
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
      <Form.Item
        name="FirstName"
        label="FirstName"
        rules={[{ required: true }]}
      >
        <Input size="large" placeholder="Firstname" />
      </Form.Item>

      <Form.Item name="LastName" label="LastName" rules={[{ required: true }]}>
        <Input size="large" placeholder="Lastname" />
      </Form.Item>

      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          size="large"
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="BirthDate"
        label="BirthDate"
        rules={[{ required: true }]}
      >
        <DatePicker size="large" />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
          // {
          //   type: "Number",
          //   message: "Please input only numbers",
          // },
        ]}
      >
        <Input
          size="large"
          placeholder="phone"
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item name="city" label="City" rules={[{ required: true }]}>
        <Input size="large" placeholder="City" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button size="large" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Contact;
