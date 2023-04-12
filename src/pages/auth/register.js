import { Breadcrumb, Form, Input, Button, Checkbox, Row, Col } from "antd";
import Link from "next/link";
import React from "react";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import PartnerOne from "../../components/sections/partners/PartnerOne";

const login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LayoutOne title="Register">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Đăng ký</Breadcrumb.Item>
        </Breadcrumb>
        <div className="auth">
          <Row>
            <Col xs={24} md={{ span: 12, offset: 6 }}>
              <h2>Đăng ký tài khoản mới</h2>
              <div className="auth-form">
                <Form
                  layout="vertical"
                  name="register"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Tên đăng nhập hoặc email"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên đăng nhập!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập mật khẩu!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    name="confirm"
                    label="Xác nhận mật khẩu"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng xác nhận mật khẩu mới",
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "Mật khẩu mới không trùng khớp"
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item className="form-submit">
                    <Button type="primary" htmlType="submit">
                      ĐĂNG KÝ
                    </Button>
                    <Button type="link">
                      <Link href={process.env.PUBLIC_URL + "/auth/login"}>
                        <a>HOẶC ĐĂNG NHẬP</a>
                      </Link>
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
        <PartnerOne />
      </Container>
    </LayoutOne>
  );
};

export default login;
