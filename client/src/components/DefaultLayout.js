import React from "react";
import {useNavigate} from 'react-router-dom'
import { Button, Dropdown, Space } from "antd";
import "../resources/defaultLayout.css";

export default function DefaultLayout(props) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("current-user"))
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick = {() => {
            navigate('/home')
          }}
        >
          Home
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick = {() => {
            navigate('/profile')
          }}
        >
          Profile
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          id = "logout_link"
          target="_blank"
          rel="noopener noreferrer"
          onClick = {() => {
            localStorage.removeItem("current-user")
            navigate('/login')
          }}
        >
          Logout
        </a>
      ),
    },
  ];


  return (
    <div className="layout">
      <div className="header">
        <h1 onClick = {() => navigate('/home')} style = {{cursor : 'pointer'}}>My CV </h1>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {user.username}
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}
