import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import '../index.css'

export default function ExperienceProject() {
  return (
    <div>
        <h4>Experience</h4>
      <Form.List name="Experience">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <>
                <div className="row">
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      label="Company"
                      name={[name, "company"]}
                      rules={[
                        { required: true, message: "Missing Company" },
                      ]}
                    >
                      <Input placeholder="Company" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      label="Years"
                      name={[name, "years"]}
                      rules={[
                        { required: true, message: "Missing Years" },
                      ]}
                    >
                      <Input placeholder="Years" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item
                      label="Place"
                      {...restField}
                      name={[name, "place"]}
                      rules={[{ required: true, message: "Missing Place" }]}
                    >
                      <Input placeholder="Place" />
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
                      <Input placeholder="Years of Work" />
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
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h4>Projects</h4>
      <Form.List name="projects">
      {(fields, { add, remove }) => (
        <>
          
            {fields.map(({ key, name, ...restField }) => (
              <>
              <div className="row">
              <div className = "col-md-3">
              <Form.Item
                  {...restField}
                  label = "Title"
                  name={[name, "title"]}
                  rules={[{ required: true, message: "Missing Title" }]}
                >
                  <Input placeholder="Title of the project" />
                </Form.Item>

              </div>
              <div className = "col-md-5">
              <Form.Item
                  {...restField}
                  label = "Description"
                  name={[name, "description"]}
                  rules={[{ required: true, message: "Missing Description" }]}
                >
                  <TextArea placeholder = "description" />
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
                      <Input placeholder="Years of Work" />
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
              Add Projects
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    </div>
  );
}