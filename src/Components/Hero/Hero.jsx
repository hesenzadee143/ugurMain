import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Heroimg from "../../Assests/Images/Heroimg.png"
import Cloudimg from "../../Assests/Images/cloud.png"
import "./Hero.css"
import { useState } from 'react'

export const Hero = () => {
    const [seeHero,setSeeHero]=useState(true)

    const DeleteHero=function () {
        setSeeHero(false)
    }
    const LookHero=function () {
        setSeeHero(true)
    }
  return (
   
    <section className='hero'>
    {seeHero?
    <Container>
        <Row>
            <Col className='top_left'></Col>
            <Col className='top_right'>
                <span className='CloseHero'>
                    <span onClick={DeleteHero}>
                        X
                    </span>
                </span>
                <img src={Cloudimg} alt="" />
                <div className='meUgur'>
                    <p>
                        Salam. Mənim Adım Uğurdur. Mən sizə bu sayıtda axtardığınızı məlumat və bölmələri tapmaqda kömək edəcəm.
                    </p>
                </div>
            </Col>
        </Row>
        <Row className='buttom'>
            <Col className='buttom_left'>
                <img src={Heroimg} alt="" />
            </Col>
            <Col className='buttom_right'></Col>
        </Row>
    </Container>
    :
    <div className='RightArrow' onClick={LookHero}>
        <i class=" ri-arrow-right-line"></i>
    </div>
    }
</section>
  )
}
