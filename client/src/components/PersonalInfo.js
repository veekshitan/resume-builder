import React from "react";
import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

export default function PersonalInfo() {
  return (
    <div>
      <div className="row">

        <div className="col-md-4">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item label="E-mail" name="email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item
            label="Mobile No."
            name="mobilenumber"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item
            label="Portifolio Link"
            name="portifolio"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-12">
          <Form.Item
            label="Objective"
            name="objective"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </div>

        <div className="col-md-8">
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </div>

      </div>
    </div>
  );
}
