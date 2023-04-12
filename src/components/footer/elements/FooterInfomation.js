import React from "react";
import Link from "next/link";

import SocialIcons from "../../other/SocialIcons";

export default function FooterInfomation() {
  return (
    <div className="footer-info">
      <Link href={process.env.PUBLIC_URL + "/"}>
        <a className="footer-info__logo">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
            alt="Ogami Logo"
          />
        </a>
      </Link>
      <ul>
        <li>Địa chỉ: Kỳ - Trang Thôn 5 <br/>Xã Bình Hòa, Huyện Krông Ana,<br/>Tỉnh Đăk Lăk</li>
        <li>Phone: 0974 001 671</li>
        <li>Facebook: Anh Khương</li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" />
    </div>
  );
}
