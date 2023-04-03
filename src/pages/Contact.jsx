import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: "",
        message: ""
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
    const isEmail = (str) => {
        const regex =
            /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(str)
    }
    const isPhone = (str) => {
        const regex = /[0-9]{10}/;
        return regex.test(str)
    }

    const validate = (data) => {
        const { name, email, phone, message } = data;
        let err = {}
        let isValid = false;
        if (!name) {
            err.name = "Vui long nhap du lieu!"
        }
        else if (!isName(name)) {
            err.name = "'Tên không hợp lệ',!"
            // isValid = false;
        }
        if (!email) err.email = "Vui long nhap du lieu!"
        else if (!isEmail(email)) {
            err.email = 'Email không hợp lệ'
            // isValid = false;
        }
        if (!phone) err.phone = "Vui long nhap du lieu!"
        else if (!isPhone(phone)) {
            err.phone = 'Số điện thoại không hợp lệ'
        }
        if (!message) err.message = "Vui long nhap du lieu!";
        setMsgs(err)
        console.log("bvvvv", Object.keys(err).length);
        isValid = Object.keys(err).length === 0
        return isValid
    }

    // handleSubmit Form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate(data)) {
            alert("Bạn đã gửi liên hệ thành công.")
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
        <div className='contact'>
            <div className='contact-text'>
                <h3>Liên hệ</h3>
                <p>{msgs?.name}</p>
                <p>{msgs?.email}</p>
                <p>{msgs?.phone}</p>
                <p>{msgs?.message}</p>
            </div>
            <form className='contact-right' onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="name" id="name" placeholder='Ho va ten' onChange={handleChange} />
                <div className='error'>{msgs?.name}</div>
                <input type="text" name="email" id="email" placeholder='Email' onChange={handleChange} />
                <div className='error'>{msgs?.email}</div>
                <input type="text" name="phone" id="phone" placeholder='Số điện thoại' onChange={handleChange} />
                <div className='error'>{msgs?.phone}</div>
                <textarea name="message" id="" cols="30" rows="10" placeholder='Loi nhan' onChange={handleChange}></textarea>
                <div className='error'>{msgs?.message}</div>
                <button type='submit' style={{ width: "100%", }}>Gửi</button>
            </form>
        </div>
    )
}

export default Contact