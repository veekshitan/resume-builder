import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function DefaultPage() {
    const navigate = useNavigate();
  return (
    <div className="page_container">
    <div className="container d-flex flex-column align-items-center justify-content-center justify-items-center vh-100 default_page">
      <div className="text-center txt_default_page" style = {{marginTop : "20vh"}}>
        <h1>Welcome to MyCV resume builder!</h1>
      </div>

      <div className="text-center txt_default_page">
        <h3>Create your profile and we'll populate your resume in templates of your choice!</h3>
      </div>

      <div className="d-flex align-items-center justify-content-center btns_default_page">
        <Button type="primary" className="bth_default_page" onClick = {() => navigate("/login")}>Login</Button>
        <Button type="primary" className="bth_default_page" onClick = {() => navigate("/register")}>Register</Button>
      </div>
    </div>
    </div>
  );
}