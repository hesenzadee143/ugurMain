import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "./NewSletter.css"

const NewSletter = () => {
  return (
    <section >
        <Container className='newsletter'>
            <Row>
                <Col lg="12" className='text-center'>
                    <h2 className='mb-4'>Digər Xəbərlərimizi İzləyin</h2>
                    <div className='subscribe'>
                    <input type="email" placeholder='Nə Baş verir...' />
                    <button className='btn sub_btn'>İzləyin</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewSletter