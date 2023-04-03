import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { BiCurrentLocation } from 'react-icons/bi'

const Header = () => {
    return (
        <header>
            <div className="header-top d-flex">
                <div className="hotline">
                    <AiFillPhone />
                    <span>Hotline: 029342342423</span>
                </div>
                <div>
                    <BiCurrentLocation />
                    dsajd
                </div>
                <div>

                </div>
            </div>
            <div className="">
                <div className="logo">
                    <img src="" alt="" />
                </div>
                <nav>
                    <ul>
                        <li>CHUONG TRINH DAO TAO</li>
                        <li>CHUONG TRINH DAO TAO</li>
                        <li>CHUONG TRINH DAO TAO</li>
                        <li>CHUONG TRINH DAO TAO</li>
                        <li><a href="/contact">LIEN HE</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header