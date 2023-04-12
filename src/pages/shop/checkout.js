import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Select,
  Radio,
  Breadcrumb,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

import { formatCurrency } from "../../common/utils";
import { calculateTotalPrice } from "../../common/shopUtils";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import ShopOrderStep from "../../components/shop/ShopOrderStep";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import FetchDataHandle from "../../components/other/FetchDataHandle";

function checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const router = useRouter();
  const cartState = useSelector((state) => state.cartReducer);
  const onFinish = (values) => {
    router.push("/shop/order-complete");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChoosePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };
  return (
    <LayoutOne title="Thanh toán">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
          <Breadcrumb.Item>Thanh toán</Breadcrumb.Item>
        </Breadcrumb>
        <ShopOrderStep current={2} />
        <FetchDataHandle
          emptyDescription="Không có sản phẩm trong giỏ hàng"
          data={cartState}
          renderData={(data) => (
            <div className="checkout">
              <Row gutter={50}>
                <Col xs={24} md={16}>
                  <div className="checkout-form">
                    <h3 className="checkout-title">Thông tin đơn hàng</h3>
                    <Form
                      name="checkout"
                      layout="vertical"
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      id="checkout-form"
                    >
                      <Row gutter={15}>
                        <Col xs={24} sm={12}>
                          <Form.Item
                            label="First name"
                            name="firstname"
                            rules={[
                              {
                                required: true,
                                message: "Vui lòng nhập tên!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Form.Item
                            label="Last name"
                            name="lastname"
                            rules={[
                              {
                                required: true,
                                message: "Vui lòng nhập họ !",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Công ty"
                            name="company"
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Quốc gia"
                            name="country"
                            rules={[
                              {
                                required: true,
                                message: "Please choose your country!",
                              },
                            ]}
                          >
                            <Select defaultValue="vietnam">
                              <Select.Option value="vietnam">
                                Việt Nam
                              </Select.Option>
                              <Select.Option value="usa">USA</Select.Option>
                              <Select.Option value="japan">Nhật Bản</Select.Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Đường"
                            name="street"
                            rules={[
                              {
                                required: true,
                                message: "Vui lòng nhập tên đường!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Postcode / ZIP"
                            name="zip"
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Huyện / Thành phố"
                            name="city"
                            rules={[
                              {
                                required: true,
                                message: "Vui lòng nhập địa chỉ!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            rules={[
                              {
                                required: true,
                                message: "Vui lòng nhập số điện thoại!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                              {
                                required: true,
                                message: "Vui lòng nhập Email!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item name="other-address">
                            <h3 className="checkout-title">Địa chỉ giao hàng</h3>
                            <Checkbox>Giao hàng đến một địa chỉ khác?</Checkbox>
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item label="Ghi chú" name="note">
                            <Input.TextArea placeholder="Lưu ý cho người bán..." />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col xs={24} md={8}>
                  <div className="checkout-total">
                    <h3 className="checkout-title">Đơn hàng</h3>
                    <table className="checkout-total__table">
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td>
                              {item.name} x {item.cartQuantity}
                            </td>
                            <td className="-bold ">
                              {formatCurrency(item.price * item.cartQuantity)}
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <th>TẠM TÍNH</th>
                          <td className="-bold -color">
                            {formatCurrency(calculateTotalPrice(data))}
                          </td>
                        </tr>
                        <tr>
                          <th>VẬN CHUYỂN</th>
                          <td>
                            <p>Miễn phí vận chuyển</p>
                          </td>
                        </tr>
                        <tr>
                          <th>Thành Tiền</th>
                          <td
                            style={{ fontSize: 20 / 16 + "em" }}
                            className="-bold -color"
                          >
                            {formatCurrency(calculateTotalPrice(data))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="checkout-total__footer">
                      <Radio.Group
                        onChange={onChoosePaymentMethod}
                        value={paymentMethod}
                      >
                        <Radio style={{ display: "block" }} value="cod">
                          Thanh toán khi nhận hàng
                        </Radio>
                        <Radio style={{ display: "block" }} value="paypal">
                          Paypal
                        </Radio>
                      </Radio.Group>
                    </div>
                    <Button
                      className="checkout-sumbit"
                      type="primary"
                      shape="round"
                      form="checkout-form"
                      key="submit"
                      htmlType="submit"
                    >
                        <a>Đặt hàng</a>
                    </Button>

                  </div>
                </Col>
              </Row>
            </div>
          )}
        />
        <PartnerOne />
      </Container>
    </LayoutOne>
  );
}

export default React.memo(checkout);
