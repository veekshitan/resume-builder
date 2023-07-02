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
      style={{
        backgroundImage:
        'url("https://img.freepik.com/free-photo/creative-flat-lay-photo-workspace-desk_7861-978.jpg?w=740&t=st=1688061136~exp=1688061736~hmac=c7269b0af6010f06b7dcfc19bffcc2f2c689b7b68d4b7f9da619e012199daa0e")',
      }}
    >
      {loading && <Spin size="large" />}
      <h1 style = {{marginTop : '50px', marginBottom : '35px',fontSize: '35px'}}>Welcome to My CV Resume Builder!</h1>
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
  );
}
