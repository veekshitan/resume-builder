import React from "react";
import { Tabs, Form, Button, Spin, message } from "antd";
import DefaultLayout from "../components/DefaultLayout";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";
import ExperienceProject from "../components/ExperienceProjects";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Profile() {

  const user = JSON.parse(localStorage.getItem("current-user"));
  //console.log(user)

  const [loading, setLoading] = React.useState(false);
  const onChange = async (values) => {
    setLoading(true);
    try {
      const user_profile = await axios.post("/api/user/update", {...values, _id: user._id});
      console.log(user_profile)
      localStorage.setItem("current-user", JSON.stringify(user_profile.data))
      setLoading(false);
      console.log(user_profile)
  
      message.success("Profile Updated Successfully");
    } catch (error) {
      setLoading(false);
      message.error("Profile Update Failed");
    }
  };
  

  return (
    <DefaultLayout>
      {loading && <Spin size="large" />}
      <h2>Update Profile</h2>
      <div className="profile-update-tabs">
        <Form layout="vertical" onFinish={(values) => onChange(values)} initialValues={user}>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: `Personal Info`,
                key: "1",
                children: <PersonalInfo />,
              },
              {
                label: `Skills and education`,
                key: "2",
                children: <SkillsEducation/>
              },
              {
                label: `Experience and projects`,
                key: "3",
                children: <ExperienceProject/>,
              },
            ]}
          />
          <Button htmlType = "submit"> UPDATE </Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}
