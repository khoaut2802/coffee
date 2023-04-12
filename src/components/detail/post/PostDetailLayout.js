import { Image, Button } from "antd";
import React from "react";
import SocialIcons from "../../other/SocialIcons";
import PostDetailComment from "./elements/PostDetailComment";

function PostDetailContent({ data }) {
  return (
    <div className="post-detail-content">
      <div className="post-detail-content__main">
        <h1 className="post-detail-title">{data.title} </h1>

        <h3 className="post-detail-subtitle">
          Hành trình tạo nên thương hiệu OC
        </h3>
        <p className="post-detail-paragraph">
          1. Cây giống (From seeds)<br />
          Lúc đó dân địa phương đa số cũng trồng cà phê. Họ đều mua cây giống từ các hộ ươm cây giống trong vùng, nhưng người phụ nữ ấy nhất định là mua cây giống của viện Eakmat, dù rằng giá cây giống của viện cao hơn đến 40%. Thật ra , lúc ấy bà chưa có khái niệm gì về cây biến đổi gien, bà chỉ nghĩ rằng mua cây của viện, sau 5 năm nếu không có trái thì cũng còn có chỗ để khiếu nại. Không ngờ quyết định này của bà là 1 quyết định rất sáng suốt, nó giúp cho con gái của bà, sau khi tiếp quản vườn cà phê có thể thuận lợi xin chứng chỉ cà phê hữu cơ do Bộ Nông nghiệp mỹ cấp.
          <br />
          2. Phân bón - Chuyển đổi hữu cơ<br />
          Năm 2005, do tuổi cao , sức yếu, bà giao lại vườn cho vợ chồng người con gái lớn và sang Mỹ sinh sống với 3 người con sau. Cô con gái tiếp quản và chứng kiến sự cực khổ của người làm nông, sau 1 năm lao đọng miệt mài và khổ cực, đến mùa thu hoạch , nếu cà được giá còn đỡ, cà hạ giá thì thôi xong. Tiền bán cà nhiều khi còn không đủ tiền thuê công hái. Cô ấy suy nghĩ , tìm tòi thông tin trên mạng, tham khảo ý kiến và hướng dẫn của ba , cuối cùng quyết định chuyển đổi vườn nhà sang hình thức trồng hữu cơ. Từ đó cô ấy thay việc bón phân hóa học bằng phân hữu cơ , thay việc dùng thuốc diệt để diệt cỏ bằng  phương pháp sinh học hoặc phát cỏ bằng thủ công,...
        </p>
        <Image
          className="post-detail-image"
          width="100%"
          title={data.title}
          src={process.env.PUBLIC_URL + "/assets/images/blog/blog-detail/cauchuyenoc.png"}
          alt="Post detail image"
          placeholder
        />
        <p className="post-detail-paragraph">
          3. Thu Hoạch và chế biến:<br />
          Hái trái chín 100% - Chế biến Natural – Rang xay , đóng gói và bảo quản 3 không : không chất bảo quản, không hương liệu, không chất phụ gia - Xây dựng thương hiệu OC  (To home)
          <br />
          4. Cải tạo đất thành công  – Cải thiện nguồn nước tưới - Xin cấp chứng chỉ hữu cơ:<br />
          Do nhiều năm dùng phân hóa học, hệ quả là đất bị bạc màu, nhiễm kim loại nặng. Nguồn nước tưới sẵn có cũng không đủ tiêu chuẩn cho việc trồng hữu cơ. Từ 2006 đến 2015, là thời gian vừa chăm sóc, vừa thử nghiệm , sao cho việc chuyển đổi sang trồng hữu cơ không ảnh hưởng đến năng suất cây trồng. Việc làm sao để có nguồn nước sạch, không nhiễm kim loại nặng để tưới cũng là 1 vấn đề hóc búa. Khoảng thời gian các mẫu đất, nước, hạt sống, hạt chín được bên cấp chứng chỉ lấy tại vườn để đem đi xét nghiệm thật sự là 1 khoảng thời gian chờ đợi dài đẵng đẵng. Rất mừng là cuối cùng các chỉ số đều đạt chuẩn.

          Từ dạo báo đài rộ lên vụ cà phê pin, thấy thương cho những người đang hàng ngày phải chịu sự đầu độc từ thực phẩm bẩn, cô con gái dù rất ngại sức cạnh tranh vô cùng khốc liệt của thị trường cà phê trong nước, vẫn quyết định thành lập công ty TNHH Cà Phê Hữu Cơ do chồng đứng làm đại diện pháp luật vào tháng 8 năm 2018,  ,bắt đầu tự chế biến và đóng gói sản phẩm cà phê dưới thương hiệu OC ( đã đăng kí quyền bảo hộ thương hiệu năm 2019). OC là chữ viết tắt của 2 chữ Organic Coffee.

        </p>
        <Image
          className="post-detail-image"
          width="100%"
          title="The Personality Trait That Makes People Happier"
          src={process.env.PUBLIC_URL + "/assets/images/blog/blog-detail/cauchuyenoc2.png"}
          alt="Post detail image"
          placeholder
        />
        <h3 className="post-detail-subtitle">
          Tại sao có thương hiệu OC?
        </h3>
        <p className="post-detail-paragraph">
          Thật ra đây là cái tên hoàn toàn ngẫu nhiên và là do khách hàng yêu thương tự đặt cho thương hiệu.
          <br/>
          Thời gian đầu đưa sản phẩm ra thị trường, khách hàng cứ hỏi cà phê  hiệu gì? Sau khi nhận được câu trả lời: là organic coffee ạ, nhiều khách hàng vẫn hỏi lại : biết là organic rồi, nhưng tên gì ấy? Khi được trả lời là: không có tên ạ, chỉ gọi là organic coffee thôi ạ, rất rất nhiều khách đề nghị thôi gọi OC cho ngắn gọn nhé! Thế là sửa lại logo và thương hiệu OC ra đời từ lời đề nghị của nhiều khách hàng thân thuộc.
          <br/>
          Với phương châm : có thêm 1 người hưởng thực phẩm sạch sẽ bớt đi 1 người bị đầu độc bởi thực phẩm bẩn, OC đang từng ngày cố gắng tăng diện tích cây trồng, tăng sản lượng để đáp ứng nhu cầu cà phê hữu cơ trong nước và xuất khẩu. OC luôn cố gắng để cho cà phê hữu cơ không còn là mặt hàng xa xỉ chỉ dành cho người giàu. Mục tiêu của OC là đưa sản phẩm cà phê đến tay mọi người với giá thì bình dân nhưng chất lượng thì cao cấp.
          <br/>
          Không những hữu cơ từ khâu trồng và chăm sóc, còn phải hữu cơ từ khâu thu hoạch, chế biến và bảo quản.
          <br/>
          Khách hàng đã thử qua cà phê OC đều có chung nhận xét :

          - mùi vị thơm ngon khác biệt (do được hái chín 100%).
          - uống không bị đau bao tử hay lình xình bụng (do được chế biến và bảo quản theo tiêu chuẩn 3 KHÔNG: KHÔNG chất bảo quản, KHÔNG hương liệu, chất phụ gia).
          - uống không bị say, choáng voáng hay tim đập nhanh (do giống cây cà phê)
        </p>
        <p className="post-detail-paragraph">
          Các giá trị tạo nên thương hiệu OC:
          <br/>
          1. Trách nhiệm
          Đối với môi trường: vì 1 môi trường sạch và xanh. Mục tiêu của OC là nhân rộng mô hình trồng cà phê hữu cơ càng nhiều càng tốt. Trồng hữu cơ để  cải tạo đất, trả lại cho đất độ phì nhiêu vốn có. Trồng hữu cơ để tăng thu nhập cho người nông dân, trả lại cho người nông dân giá trị sản phẩm bằng đúng sức lao động.
          Đối với cộng đồng: vì 1 cộng đồng sử dụng dụng thực phẩm sạch, nói không với thực phẩm bẩn.
          <br/>
          2. Tự hào
          Việt Nam cũng có thể trồng và xuất khẩu cà phê hữu cơ.
          <br/>
          3. Giá bình dân
          Phân khúc hữu cơ có thể tiếp cận được nhiều thành phần trong xã hội, không chỉ với những người có thu nhập cao.
          <br/>
          4. Chất lượng cao cấp
          Không giống với các sản phẩm cà phê khác, cà phê OC sạch từ các khâu:
          <br/>
          Xuống giống: bảo đảm giống không biến đổi gien, bảo đảm đất được cải tạo không nhiễm kim loại nặng trước khi xuống giống .
          Chăm sóc: không bón phân hóa học, chỉ dùng phân hữu cơ; nguồn nước tưới phải sạch không bị nhiễm kim loại nặng và tạp chất; không dùng thuốc diệt cỏ; xây dựng vùng đệm để ngăn không cho phân bón và thuốc trừ sâu của các vườn xung quanh xâm nhập
          Thu hoạch: 100% trái chín, chế biến tự nhiên, phơi trong nhà kính cách trên giàn cách mặt đất 40cm để hạt cà phê không bị nhiễm bẩn .
          Bảo quản: không bỏ chất bảo quản. Bảo quản bằng cách đóng gói nhân xanh rút chân không
          Rang xay, đóng gói: không bỏ chất phụ gia, không thêm hương liệu, không chất bảo quản.
        </p>
      </div>
      <div className="post-detail-content__footer">
        <div className="post-detail-content__footer-tags">
          {data.tag.map((item, index) => (
            <Button key={index}>{item}</Button>
          ))}
        </div>
        <div className="post-detail-content__footer-share">
          <span>Share:</span>
          <SocialIcons />
        </div>
      </div>
      <PostDetailComment data={data.comments} />
    </div>
  );
}

export default React.memo(PostDetailContent);
