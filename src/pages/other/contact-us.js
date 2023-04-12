import { Breadcrumb, Row, Col, Form, Input, Button } from "antd";
import React from "react";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";

function contactUs() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LayoutOne title="Contact us">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Liên hệ</Breadcrumb.Item>
        </Breadcrumb>
        <div className="contact">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62339.37199646393!2d107.95212508374871!3d12.43567424943752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zS-G7syAtIFRyYW5nIFRow7RuIDUgeMOjIELDrG5oIEjDsmEsIEh1eeG7h24gS3LDtG5nIEFuYSwgVOG7iW5oIMSQxINrIEzEg2s!5e0!3m2!1svi!2s!4v1681153821828!5m2!1svi!2s"
              width="100%"
              height="600"
              frameborder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
          <div className="contact-methods">
            <Row gutter={15}>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-map-marker-alt" />
                  <p>Kỳ - Trang Thôn 5 xã Bình Hòa</p>
                  <p>Huyện Krông Ana, Tỉnh Đăk Lăk</p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-envelope" />
                  <p>
                    <span>Số điện thoại:</span> 0974 001 671
                  </p>
                  <p>
                    <span>Email:</span> organiccoffee_dl@gmail.com
                  </p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-clock" />
                  <p>
                    <span>Thời gian làm việc:</span> 08:00 – 22:00
                  </p>
                  <p>
                    <span>Chủ nhật:</span> Nghỉ
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="contact-form">
            <div className="contact-form__title">
              <SectionTitle
                hideDecoration
                title="Để lại tin nhắn cho chúng tôi"
                className="-center"
              />
              <p>Đội ngũ của chúng tôi sẽ gọi lại sau và trả lời các câu hỏi của bạn</p>
            </div>
            <Form
              name="review"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row gutter={30}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập họ tên!" },
                    ]}
                  >
                    <Input placeholder="Họ Tên" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Vui lòng nhập email!" },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="message">
                    <Input.TextArea placeholder="Nội dung" />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" shape="round">
                      Gửi
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </LayoutOne>
  );
}

export default React.memo(contactUs);
