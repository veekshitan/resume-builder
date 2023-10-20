import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import FormItem from "antd/es/form/FormItem";
import "../resources/authentication.css";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const onLogin = async (user) => {
    setLoading(true);
    try {
      const userDoc_log = await axios.post("/api/user/login", user);
      setLoading(false);
      localStorage.setItem("current-user", JSON.stringify(userDoc_log.data));
      navigate("/home");
      message.success("Login Successful");
    } catch (error) {
      setLoading(false);
      message.error("Login Failed");
    }
  };

  // authorised user no need to login again
  React.useEffect(() => {

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
        onFinish={(values) => onLogin(values)}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1> Login </h1>
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

        <div className="d_flex">
          <Link to="/register"> New User? Click here to register </Link>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </div>
      </Form>
      </div>
    </div>
    </div>
  );
}
