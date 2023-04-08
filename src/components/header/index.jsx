import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="logo">
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className="right">
                    <ul className="menu">
                        <li>Tài nguyên số</li>
                        <li>Học liệu số</li>
                        <li>Thư viện</li>
                        <li>Văn bản</li>
                        <li><a href="/login">E-mail</a></li>
                        <li>Liên hệ</li>
                        <li>Sitemap</li>
                    </ul>
                    <p style={{ color: "green" }}>English</p>
                    <div className="search">
                        <input type="search" name="" id="" placeholder='Nhập thông tin cần tìm kiếm' />
                        <button>Tìm kiếm</button>
                    </div>
                </div>
            </div>
            <nav>
                <ul>
                    <li>Trang chủ</li>
                    <li>giới thiệu</li>
                    <li>đào tạo</li>
                    <li>khoa học công nghệ</li>
                    <li>hợp tác & phát triển</li>
                    <li>sinh viên</li>
                    <li>đăng kí học bổng</li>
                    <li>Cán bộ</li>
                    <li>tuyển dụng</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header