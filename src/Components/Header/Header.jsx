/* eslint-disable react/style-prop-object */
import React from 'react'
import { useRef } from 'react'
import {Container} from "reactstrap"
import "./header.css"
import logoImg from "../../Assests/Images/logo.jpg"

const Header = () => {

    const navLinks=[
        {
            display:"Haqqımızda",
            url:"#footer"
        },
        {
            display:"Kurslarımız",
            url:"#courses"
        },
        {
            display:"Karyera",
            url:"#footer"
        },
        {
            display:"Imtahan Nəticələri",
            url:"examResults"
        }
    ]

    const menuRef=useRef()

    const menuToggle=()=> menuRef.current.classList.toggle("active_menu")

  return (
    <>
    <header id='header' className='header sticky-top'>
        <Container>
            <div className="navigation d-flex align-items-center 
            justify-content-between ">
                <div className="logo">
                    <h3 className='d-flex align-items-center'>
                        <img src={logoImg}
                         alt='logo' className='kLogo'/>UĞUR TM
                    </h3>
                </div>
                <div className="nav d-flex align-items-center gap-5
                " >
                    <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
                        <ul className="nav_list">
                            <li className="nav_item">Əsas Səhifə</li>
                            {
                                navLinks.map((item,i)=>(
                                    <li key={i} className="nav_item"  >
                                    <a href={item.url}>{item.display}</a>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="mobile_menu">
                    <span>
                        <i className="ri-menu-line" onClick={menuToggle}></i>
                    </span>
                </div>
            </div>
        </Container>
    </header>
    </>
  )
}

export default Header