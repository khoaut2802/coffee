import React from "react";
import { Breadcrumb } from "antd";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import ShopOrderStep from "../../components/shop/ShopOrderStep";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import Benefits from "../../components/other/Benefits";

export default function orderComplete() {
  return (
    <LayoutOne title="Order Complete">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
          <Breadcrumb.Item>Hoàn tất đặt hàng</Breadcrumb.Item>
        </Breadcrumb>
        <ShopOrderStep current={3} />
        <div className="order-complete">
          <h1>
           Chúc mừng ! Bạn đã <span>hoàn thành</span> thanh toán đơn hàng
          </h1>
        </div>
        <Benefits threeCol className="-bordered" />
        <PartnerOne />
      </Container>
    </LayoutOne>
  );
}
