import React from "react";
import "../../resources/templates.css";

export default function Template2() {
  const user = JSON.parse(localStorage.getItem("current-user"));
  return (
    <div className="template1-parent">
      <div className="top" style = {{flexDirection : "column"}}>
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobilenumber}</p>
        </div>
      </div>
      <div className="divider mt-5"></div>
      <div className="divider mt-1"></div>
      <div className="objective mt-5">
        <h3 style = {{backgroundColor : "gray", padding : '10px'}}>
            <b>
            Objective
            </b></h3>
        <p>{user.objective}</p>
      </div>

      <div className="education mt-5">
        <h3 style = {{backgroundColor : "gray", padding : '10px'}}><b>Education</b></h3>
        {user.education.map((education) => (
          <div
            className="d-flex align-items-center"
            style={{ display: "flex" }}
            key={education.id}
          >
            <h4 className="mr-2">
              <b>{education.yearrange} : </b>
            </h4>
            <p className="mb-0">
              {" "}
              <b>{education.qualification}</b> with{" "}
              <b>{education.percentage}% </b> in {education.institute}
            </p>
          </div>
        ))}
      </div>
      <div className="experience mt-5">
        <h3 style = {{backgroundColor : "gray", padding : '10px'}}><b>Experience</b></h3>
        {user.Experience.map((exp) => (
          <div
            className="d-flex align-items-center"
            style={{ display: "flex" }}
          >
            <h4 className="mr-2">
              {exp.yearrange} : 
            </h4>
            <p className="mb-0">
              {" "}
              <b>{exp.company}</b> in <b>{exp.place}</b>
            </p>
          </div>
        ))}
      </div>
      <div className="experience mt-5">
        <h3 style = {{backgroundColor : "gray", padding : '10px'}}><b>Projects</b></h3>
        {user.projects.map((pro) => (
          <div className="d-flex" style={{ display: "flex-column" }}>
            <h4 className="mr-2">
              <b>
                {pro.title} [{pro.yearrange}] :{" "}
              </b>
            </h4>
            <p className="mb-0">{pro.description}</p>
          </div>
        ))}
      </div>
      <div className="experience mt-5">
        <h3 style = {{backgroundColor : "gray", padding : '10px'}}><b>Skills</b></h3>
        {user.skills.map((skill) => (
          <div className="d-flex" style={{ display: "flex-column" }}>
            <h5 className="mr-2">{skill.skills}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}