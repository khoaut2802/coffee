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
    <LayoutOne title="Login">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Đăng nhập</Breadcrumb.Item>
        </Breadcrumb>
        <div className="auth">
          <Row>
            <Col xs={24} md={{ span: 12, offset: 6 }}>
              <h2>Đăng nhập</h2>
              <div className="auth-form">
                <Form
                  layout="vertical"
                  name="login"
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
                    className="form-functions"
                    name="remember"
                    valuePropName="checked"
                  >
                    <Checkbox>Nhớ mật khẩu</Checkbox>
                    <Button type="link">Quên mật khẩu</Button>
                  </Form.Item>
                  <Form.Item className="form-submit">
                    <Button type="primary" htmlType="submit">
                      Đăng nhập
                    </Button>
                    <Button type="link">
                      <Link href={process.env.PUBLIC_URL + "/auth/register"}>
                        <a>HOẶC TẠO TÀI KHOẢN</a>
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
