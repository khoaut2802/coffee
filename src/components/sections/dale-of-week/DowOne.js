import React from "react";
import classNames from "classnames";
import Countdown, { zeroPad } from "react-countdown";
import { Row, Col } from "antd";

import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

const DownOneItem = React.memo(({ reverse, data }) => {
  return (
    <div
      className={`dow-one-content__item ${classNames({ "-reverse": reverse })}`}
    >
      <div className="dow-one-content__item-image">
        <img
          src={process.env.PUBLIC_URL + data.iconSrc}
          alt="Dale of the week icon"
        />
      </div>
      <div className="dow-one-content__item-content">
        <h5>{data.title}</h5>
        <p>{data.description}</p>
      </div>
    </div>
  );
});

function DowOne({ data, countdownLast }) {
  return (
    <div className="dow-one">
      <Container>
        <SectionTitle title="Ưu đãi tuần" className="-center" />
        <div className="dow-one-content">
          <Row align="center" gutter={15}>
            <Col md={12} lg={8}>
              <Row gutter={[0, 30]}>
                {data.slice(0, 2).map((item, index) => (
                  <Col key={index} span={24}>
                    <DownOneItem reverse data={item} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={0} lg={8}>
              <img
                className="dow-one-image"
                src={
                  process.env.PUBLIC_URL +
                  "assets/images/sections/dale-of-week/one/bean-coffee_4.png"
                }
                alt="Ưu Đãi Tuần"
              />
            </Col>
            <Col md={12} lg={8}>
              <Row gutter={[0, 30]}>
                {data.slice(2, 4).map((item, index) => (
                  <Col key={index} span={24}>
                    <DownOneItem data={item} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>

        <Countdown
          date={Date.now() + countdownLast}
          renderer={({ days, hours, minutes, seconds }) => {
            return (
              <div className="dow-one-countdown">
                <div className="dow-one-countdown-item">
                  <h6>{zeroPad(days)}</h6> <span>ngày</span>
                </div>
                <div className="dow-one-countdown-item">
                  <h6>{zeroPad(hours)}</h6> <span>giờ</span>
                </div>
                <div className="dow-one-countdown-item">
                  <h6>{zeroPad(minutes)} </h6>
                  <span>phút</span>
                </div>
                <div className="dow-one-countdown-item">
                  <h6>{zeroPad(seconds)}</h6> <span>giây</span>
                </div>
              </div>
            );
          }}
        />
      </Container>
    </div>
  );
}

export default React.memo(DowOne);
