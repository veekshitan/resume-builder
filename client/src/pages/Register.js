import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import axios from "axios";
import "../resources/authentication.css";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const onFinish = async (user) => {
    console.log(user);
    setLoading(true);
    try {
      const { username, password } = user;
      const userDoc_reg = await axios.post("/api/user/register", {
        username,
        password
      });
      setLoading(false);
      message.success("User Registration Successful");
      localStorage.setItem("current-user", JSON.stringify(userDoc_reg.data));
      navigate('/home')
    } catch (error) {
      setLoading(false);
      message.error("Registration Unsuccessful");
    }
  };

  // authorised user no need to login again
  useEffect(() => {

    if(localStorage.getItem("current-user")){
      navigate('/home')
    }
  });

  return (
    <div
    className="auth_parent"
  >
    {loading && <Spin size="large" />}
    <div className="page_container">
  <div className="container d-flex flex-column align-items-center justify-content-center justify-items-center vh-100 default_page">
    <div className="text-center txt_default_page" style = {{marginTop : "20vh"}}>
      <h1>Welcome to MyCV resume builder!</h1>
    </div>

    <div className="text-center txt_default_page">
      <h3>Create your profile and we'll populate your resume in templates of your choice!</h3>
    </div>
    <Form
      layout="vertical"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1> Register </h1>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confpassword"
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <div className="d_flex">
        <Link to="/login"> Existing User? Click here to Login </Link>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </div>
    </Form>
    </div>
    </div>
  </div>
  );
}
