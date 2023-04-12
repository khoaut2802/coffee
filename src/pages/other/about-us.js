import { Breadcrumb, Row, Col, Button } from "antd";
import React from "react";
import CountUp from "react-countup";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";
import IntroductionFive from "../../components/sections/introduction/IntroductionFive";
import IntroductionSix from "../../components/sections/introduction/IntroductionSix";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import introductionData from "../../data/sections/dale-of-week.json";
import data from "../../data/pages/about.json";

function aboutUs() {
  return (
    <LayoutOne title="About us">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Giới thiệu</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <div className="about">
        <Container>
          <div className="about-story">
            <Row gutter={40}>
              <Col xs={24} sm={12}>
                <div className="about-story__content">
                  <SectionTitle title="Câu Chuyện Về Organic Coffee" className="-left" />
                  <p>
                  Cà phê hữu cơ ở Việt Nam trong những năm gần đây đã tìm được một chỗ đứng vững chắc cho mình bởi hướng phát triển mang tới nhiều lợi nhuận. 
                  Tuy nhiên thực tế năng suất của cà phê hữu cơ còn khá thấp bởi sự khó canh tác và đòi hỏi người nông dân phải chăm sóc thật kỹ lưỡng, không được phép sử dụng các chất hóa học. 
                  Chính bởi vậy mà giá thành của cà phê hữu cơ sẽ cao hơn rất nhiều so với cà phê thông thường nhưng đi cùng với nó là sự đảm bảo về một loại cà phê có chất lượng hoàn hảo.
                  </p>
                  <p>
                  Để có thể được chứng nhận là cà phê hữu cơ đồng nghĩa với việc loại cà phê đó phải đáp ứng đầy đủ mọi tiêu chí trong tất cả quy trình từ trồng trọt, 
                  thu hoạch đến kỹ thuật rang xay, pha chế cà phê. Quy trình phức tạp này đang trở thành nỗi lo cho người trồng cà phê tại Việt Nam 
                  bởi việc có thể tuân thủ đầy đủ các tiêu chí trên đòi hỏi người nông dân phải có khả năng tài chính để trang bị các thiết bị liên quan đến quy trình rang xay đặc biệt của cà phê hữu cơ.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <div className="about-story__video">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/pages/contact/about_us.png"
                    }
                    alt="introduction image"
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<i className="fas fa-play" />}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="about-statistical">
            <Row gutter={[30, 30]}>
              {data.statistical.map((item) => (
                <Col xs={24} md={8}>
                  <div className="about-statistical__item">
                    <div className="about-statistical__item-icon">
                      <img
                        src={process.env.PUBLIC_URL + item.icon}
                        alt="Statistcal icon"
                      />
                    </div>
                    <div className="about-statistical__item-data">
                      <CountUp start={0} end={item.number} delay={0}>
                        {({ countUpRef }) => (
                          <div className="about-statistical__item-data__countup">
                            {item.prefix && <span>{item.prefix}</span>}
                            <h3 ref={countUpRef} />
                            {item.suffixes && <span>{item.suffixes}</span>}
                          </div>
                        )}
                      </CountUp>
                      <p>{item.object}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <div className="about-introduction">
          <IntroductionFive data={introductionData.one} />
          <IntroductionSix />
        </div>

        <Container>
          <PartnerOne />
        </Container>
      </div>
    </LayoutOne>
  );
}

export default React.memo(aboutUs);
