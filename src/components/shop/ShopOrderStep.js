import { Col, Row } from "antd";
import React from "react";
import classNames from "classnames";

function ShopOrderStep({ current }) {
  return (
    <div className="shop-order-step">
      <Row>
        <Col xs={24} md={8}>
          <div
            className={`step-block ${classNames({ active: current === 1 })}`}
          >
            <div className="step">
              <h2>Giỏ hàng</h2>
              <span>01</span>
            </div>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div
            className={`step-block ${classNames({ active: current === 2 })}`}
          >
            <div className="step">
              <h2>Thanh toán</h2>
              <span>02</span>
            </div>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div
            className={`step-block ${classNames({ active: current === 3 })}`}
          >
            <div className="step">
              <h2>Hoàn tất đặt hàng</h2>
              <span>03</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(ShopOrderStep);
