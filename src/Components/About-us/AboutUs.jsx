import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "./AboutUs.css"
import aboutImg from "../../Assests/Images/Akollektiv.jpg"
import CountUp from 'react-countup';

const AboutUs = () => {
  return (
    <section id='aboutUs'>
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className='about_img'>
                        <img src={aboutImg} alt="" className='w-100' />
                    </div>
                </Col>
                <Col lg="6" md="6">
                    <div className="about_content">
                        <h2>Bizim haqqımızda</h2>
                        <p>Uğur Tədris Mərkəzi bütün qruplar üzrə qəbul 
                            imtahanlarına və buraxılış imtahanlarına hazırlıq
                            fəaliyyəti göstərir!
                        </p>

                        <div className="about_counter">
                            <div className='d-flex gap-5 align-items-center'>
                                <div className="single_counter">
                                    <span className="counter">
                                        <CountUp start={0} end={25} duration={2} 
                                        suffix="Min" />
                                    </span>
                                    <p className='counter-title'>
                                        I Qrup Tələbələrimiz.
                                    </p>
                                </div>
                                <div className="single_counter">
                                    <span className="counter">
                                        <CountUp start={0} end={12} duration={2} 
                                        suffix="Min" />
                                    </span>
                                    <p className='counter-title'>
                                       II Qrup Tələbələrimiz
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="about_counter">
                            <div className='d-flex gap-5 align-items-center'>
                                <div className="single_counter">
                                    <span className="counter">
                                        <CountUp start={0} end={25} duration={2} 
                                        suffix="Min" />
                                    </span>
                                    <p className='counter-title'>
                                        III Qrup Tələbələrimiz
                                    </p>
                                </div>
                                <div className="single_counter">
                                    <span className="counter">
                                        <CountUp start={0} end={12} duration={2} 
                                        suffix="Min" />
                                    </span>
                                    <p className='counter-title'>
                                        IV Qrup Tələbələrimiz
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutUs