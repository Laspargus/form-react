import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button, DatePicker } from "antd";
import moment from "moment";

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

const { Option } = Select;

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf("day");
}

function disabledDateTime() {
  return {
    disabledHours: () => range(12, 14).splice(0, 8),
    //disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

const Appointment = ({ handleSubmit }) => {
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
      <p className="text-primary">Motif du rendez-vous</p>
      <Form.Item name="motif">
        <Select
          showSearch
          style={{ width: 400 }}
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="programme">Précision sur le programme</Option>
          <Option value="lieu">Visiter les lieux de travail</Option>
          <Option value="paiement">
            Précision sur les modalités de paiement
          </Option>
          <Option value="autre">Autre</Option>
        </Select>
      </Form.Item>

      <p className="text-primary">Date du rendez-vous</p>
      <Form.Item name="date">
        <DatePicker
          minuteStep="30"
          format="YYYY-MM-DD HH:mm"
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{ defaultValue: moment("00:00:00", "HH:mm") }}
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button className="mt-5" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Appointment;
