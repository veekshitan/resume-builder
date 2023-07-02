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
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/creative-flat-lay-photo-workspace-desk_7861-978.jpg?w=740&t=st=1688061136~exp=1688061736~hmac=c7269b0af6010f06b7dcfc19bffcc2f2c689b7b68d4b7f9da619e012199daa0e")',
      }}
    >
      {loading && <Spin size="large" />}
      <h1 style = {{marginTop : '50px', marginBottom : '35px',fontSize: '35px'}}>Welcome to My CV Resume Builder!</h1>
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
  );
}
