import React from 'react'
import "./FreeCourse.css"
import { Col, Container, Row } from "reactstrap"
import courseImg1 from "../../Assests/Images/webDesing.jpg"
import courseImg2 from "../../Assests/Images/graphic.png"
import courseImg3 from "../../Assests/Images/ui_ux.png"
import FreeCourseCard from './FreeCourseCard'


const FreeCourse = () => {
  const FreeCourseData=[
    {
    id:"01",
    title:"Web Dizayn-2022",
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg1,
},
{
    id:"02",
    title:"Peşəkar Qrafik Dizayn",
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg2,
},
{
    id:"03",
    title:"UI/UX Dizayn",
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg3,
},
  ]
  return (
    <section id='freeCourse'>
      <Container>
        <Row className=' justify-content-around'>
          <Col lg="12" className='text-center mb-5' >
            <h2 className='fw-bold'>Pulsuz Kurslarımız</h2>
          </Col>
            {
              FreeCourseData.map(item=>(
              <Col lg="3" key={item.id}>
                <FreeCourseCard item={item}/>
              </Col>
              ))}
        </Row>
      </Container>
    </section>
  )
}

export default FreeCourse