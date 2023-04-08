import React, { useState } from 'react'

const Login = () => {
    const [data, setData] = useState({
        name: '',
        password: '',
    })
    const [msgs, setMsgs] = useState({
    })

    // const isEmpty = (str) => {
    //     return (!str || str.length === 0)
    // }
    const isName = (str) => {
        const regex = /^[A-Za-z]+$/;
        return regex.test(str)
    }

    const isPassword = (str) => {
        const regex = /^[A-Za-z0-9]{8,}$/;
        return regex.test(str)
    }

    const validate = (data) => {
        const { name, password } = data;
        let err = {}
        let isValid = false;
        if (!name) {
            err.name = "Vui lòng nhập dữ liệu!"
        }
        else if (!isName(name)) {
            err.name = "Tên không hợp lệ"
        }
        if (!password) {
            err.password = "Vui lòng nhập dữ liệu!"
        }
        else if (!isPassword(password)) {
            err.password = "Mật khẩu không hợp lệ."
            // isValid = false;
        }
        setMsgs(err)
        // console.log("bvvvv", Object.keys(err).length);
        isValid = Object.keys(err).length === 0
        return isValid
    }

    // handleSubmit Form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate(data)) {
            alert("Bạn đã đăng nhập thành công.")
            setData({})
        }
    }

    // handleChange
    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='login'>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className='title'>
                    <h2>đăng nhập hệ thống</h2>
                    <p>Tiếng Việt</p>
                </div>
                <label htmlFor="name">Tên đăng nhập</label>
                <div className="input">
                    <img src="/user.png" alt="user" />
                    <input type="text" name="name" id="name" onChange={handleChange} />
                </div>
                <div className='error'>{msgs?.name}</div>
                <label htmlFor="name">Mật khẩu</label>
                <div className="input">
                    <img src="/password.png" alt="password" />
                    <input type="password" name="password" id="password" onChange={handleChange} />
                </div>
                <div className='error'>{msgs?.password}</div>
                <div className="bot">
                    <div className="">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="">Ghi nhớ</label>
                    </div>
                    <span style={{ color: "#e04562" }}>Quên mật khẩu?</span>
                </div>
                <button type='submit' style={{ width: "100%", }}>Đăng nhập</button>
            </form>
        </div>
    )
}

export default Login