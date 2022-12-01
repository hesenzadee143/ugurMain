import React from 'react'
import {Container, Row ,Col} from 'reactstrap'
import heroImg from "../../Assests/Images/mubarizM.jpg"
import "./heroSection.css"

const HeroSection = () => {
  return (
    <section className='hero_section'>
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className="hero_content">
                        <h2 className='mb-4'>
                            Bizim <span>UĞUR</span>umuz <br/>Sizin <span>UĞUR</span>unuzdur.
                        </h2>
                        <p>Səhifədə axtardıqlarınızı burada <br /> yazaraq tapa bilərsiniz.
                        </p>

                        <div className="search">
                            <input type="text" placeholder='Sizə nə maraqlıdır?' />
                            <button className='btn'>Soruşun</button>
                        </div>
                    
                    </div>
                </Col>
                <Col lg="6" md="6">
                 <img className='img1 w-100' src={heroImg} 
                 alt="mubarizM" ></img>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection