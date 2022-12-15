/* eslint-disable eqeqeq */
import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import "./Footer.css"
import logoImg from "../../Assests/Images/logo.jpg"
import { useState } from 'react'
const Footer = () => {
    const [locationArry,setLocationArry]=useState([])
    
    const footerQucklyLinks=[
        {
            display: "Ana Səhifə",
            url: "#"
        },
        {
            display: "Bizim Haqda",
            url: "#"
        },
        {
            display: "Kurslarımız",
            url: "#"
        },
        {
            display: "Səhifələr",
            url: "#"
        },
        {
            display: "Karyera",
            url: "#"
        },

    ]
    const footerInfoLinks=[
        {
            display: "Gizlilik",
            url: "#"
        },
        {
            display: "Üzvlük",
            url: "#"
        },
        {
            display: "Bələdçi",
            url: "#"
        },
        {
            display: "Xidmət Şərtləri",
            url: "#"
        },
    ]
    const locationArryF=[
        {
            name:"Şüvəlan filialı",
            location:"Bakı şəhəri, Xəzər rayonu, Şüvəlan qəsəbəsi, A. İldırım küçəsi, 156 nömrəli tam orta məktəbin yanı",
            phone:"+994 55 225 75 27"
        },
        {
            name:"Ramana filialı",
            location:"Yeni Ramana, Araz marketin yanı, 316 nömrəli tam orta məktəbin qarşısı.",
            phone:"+994 55 764 41 21"
        }
    ]


    const seeLocation=function () {

        if (locationArry.length==0) {
            setLocationArry(locationArryF)
        }else{
            setLocationArry([])
        }
    }


  return (
    <footer id='footer' className='footer'>
        <Container>
            <Row>
                <Col lg="3">
                <div className="logo">
                    <h2 className='d-flex align-items-center justify-content-center'>
                        <img src={logoImg}
                         alt='logo' className='kLogo'/>UĞUR TM
                    </h2>
                </div>
                        <div className="follows">
                           <p className='mb-0'>Sosial Şəbəkələrdə Bizi İzləyin</p>
                            <div className="spanIcon">
                                
                           <span>
                            {" "}
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/UgurTM1/">
                            <i className="ri-facebook-circle-line"></i>
                            </a>
                            </span> 

                           <span>
                            {" "}
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ugurtdrismrkzi/">
                                <i className='ri-instagram-line'></i>
                            </a>
                            </span> 

                           <span>
                            {" "}
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCS5YB6tgiHAOPll2yPCihYQ">
                                <i className='ri-youtube-line'></i>
                            </a>
                            </span> 

                           <span>
                            {" "}
                            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+994552257527">
                                <i className='ri-whatsapp-line'></i>
                            </a>
                            </span> 
                           <span>
                            {" "}
                            <a target="_blank" rel="noopener noreferrer" href="https://web.telegram.org/z/#811137430">
                            <i className="ri-telegram-line"></i>
                            </a>
                            </span> 
                           <span> 
                                {" "}
                                <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@ugurtdrismrkzi">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                                    <g
                                     fill="#148ade"  stroke="none"    stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                     font-family="none" font-weight="none" font-size="none" text-anchor="none" 
                                     ><g transform="scale(10.66667,10.66667)"><path d="M6,3c-1.64497,0 -3,1.35503 -3,3v12c0,1.64497 1.35503,3 3,3h12c1.64497,0 3,-1.35503 3,-3v-12c0,-1.64497 -1.35503,-3 -3,-3zM6,5h12c0.56503,0 1,0.43497 1,1v12c0,0.56503 -0.43497,1 -1,1h-12c-0.56503,0 -1,-0.43497 -1,-1v-12c0,-0.56503 0.43497,-1 1,-1zM12,7v7c0,0.56503 -0.43497,1 -1,1c-0.56503,0 -1,-0.43497 -1,-1c0,-0.56503 0.43497,-1 1,-1v-2c-1.64497,0 -3,1.35503 -3,3c0,1.64497 1.35503,3 3,3c1.64497,0 3,-1.35503 3,-3v-3.76758c0.61615,0.43892 1.25912,0.76758 2,0.76758v-2c-0.04733,0 -0.73733,-0.21906 -1.21875,-0.63867c-0.48142,-0.41961 -0.78125,-0.94634 -0.78125,-1.36133z"></path></g></g>
                                    </svg>
                                </a>
                            </span> 

                            </div>
                        </div>
                </Col>

                <Row>
                    <Col lg="3">
                        <h6 className="fw-bold">Araşdırın</h6>
                        <ListGroup className='link_list'>
                            {
                                footerQucklyLinks.map((item,i)=>(
                                <ListGroupItem key={i} className="border-0
                                ps-0 link_item">
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                                )
                            )}
                        </ListGroup>
                    </Col>

                    <Col lg="3">
                        <h6 className="fw-bold">Məlumat</h6>
                        <ListGroup className='link_list'>
                            {
                                footerInfoLinks.map((item,i)=>(
                                <ListGroupItem key={i} className="border-0
                                ps-0 link_item">
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                                )
                            )}
                        </ListGroup>
                    </Col>
                </Row>
                <Col lg="3">
                    <h6 className="fw-bold">Əlaqə</h6>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href='https://ugur.tedris.merkezi2017@mail.ru'>Email:ugur.tedris.merkezi2017@mail.ru</a>

                        {
                        locationArry.length==0?
                        <div className='loc_text'>
                            <div className='location'>
                                <i className="ri-map-pin-line" title='Ünvanlarımız Buradadır.' onClick={seeLocation}></i>
                            </div>
                            Ünvanlarımız Buradadır.
                        </div>
                        :
                        <div className='owerflow'>
                            {
                                locationArry.map((obj,i)=>(
                                    <div onClick={seeLocation} key={i}>
                                        <h5>{obj.name}</h5>
                                        <p>Ünvan:{obj.location}</p>
                                        <p>Telefon:{obj.phone}</p>
                                    </div>
                                    ))
                            }
                        </div>
                        }
                    </div>

                </Col>

            </Row>
        </Container>
    </footer>
  )
}

export default Footer