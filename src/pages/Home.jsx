import React from "react";
import WebLayout from '../layouts/WebLayout'

const Home = () => {
  return <WebLayout>
    <div className="banner">
      <div className="banner-left">
        <img src="/banner.png" alt="banner" />
      </div>
      <div className="banner-right">
        <img src="/banner2.png" alt="banner2" />
      </div>
    </div>
    <div className="menu-banner">
      <ul>
        <li className="active">Kênh hỗ trợ tiểu học
          <img src="/moi.png" alt="new" />
        </li>
        <li>Cơ sở hòa lạc</li>
        <li>Bản tin ĐHQGHN</li>
        <li>Tạp chí khoa học</li>
        <li>đảm bảo chất lượng</li>
      </ul>
    </div>
  </WebLayout>;
};

export default Home;
