import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function SkillsEducation() {
  return (
    <div>
      <h4>Education</h4>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <>
                <div className="row">
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      label="Qualification"
                      name={[name, "qualification"]}
                      rules={[
                        { required: true, message: "Missing Qualification" },
                      ]}
                    >
                      <Input placeholder="Qualification" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      label="Percentage"
                      name={[name, "percentage"]}
                      rules={[
                        { required: true, message: "Missing Percentage" },
                      ]}
                    >
                      <Input placeholder="Percentage" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item
                      label="Institution"
                      {...restField}
                      name={[name, "institute"]}
                      rules={[{ required: true, message: "Missing Institute" }]}
                    >
                      <Input placeholder="Institution" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <Form.Item
                      label="Year-range"
                      {...restField}
                      name={[name, "yearrange"]}
                      rules={[
                        { required: true, message: "Missing Year Range" },
                      ]}
                    >
                      <Input placeholder="Years of Study" />
                    </Form.Item>
                  </div>
                  <MinusCircleOutlined
                    style={{ fontSize: "15px", color: "orange" }}
                    onClick={() => remove(name)}
                  />
                </div>
              </>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h4>Skills</h4>
      <Form.List name="skills">
      {(fields, { add, remove }) => (
        <>
          
            {fields.map(({ key, name, ...restField }) => (
              <>
              <div className="row">
              <div className = "col-md-4">
              <Form.Item
                  {...restField}
                  label = "Skills"
                  name={[name, "skills"]}
                  rules={[{ required: true, message: "Missing Skills" }]}
                >
                  <Input placeholder="Skill/Technology" />
                </Form.Item>

              </div>
              <div className = "col-md-4">
              <Form.Item
                  {...restField}
                  label = "Rating out of 10"
                  name={[name, "rating"]}
                  rules={[{ required: true, message: "Missing Rating" }]}
                >
                  <Input placeholder="Rating" />
               </Form.Item>
              </div>
                <MinusCircleOutlined style = {{fontSize : "15px", color : "orange" }}onClick={() => remove(name)} />
                </div>
              </>
            ))}
          

          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add Skills
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    </div>
  );
}
