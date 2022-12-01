import React from 'react'
import "./Courses.css"
import { Container, Row,Col } from 'reactstrap'
 import courseImg1 from "../../Assests/Images/webDesing.jpg"
import CourseCard from './CourseCard'
import courseImg2 from "../../Assests/Images/graphic.png"
import courseImg3 from "../../Assests/Images/ui_ux.png"

const Courses = () => {
    const coursesData=[
        {
            id:"01",
            title:"Web Dizayn-2022 (Başlanğıc Səviyyə)",
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
    <section id='courses'>
        <Container>
            <Row>
                <Col lg="12" className='mb-5'>
                    <div className="course_top d-flex
                    justify-content-between align-items-center">
                        <div className="course_top_left w-50">
                            <h2>Digər Məşhur Kurslarımız</h2>
                            <p>
                                Digər kurslarımıza baxsanız gələcək <span>  </span>
                                  <strong>UĞUR</strong>unuz bizlə qazanacağınızı görəcəksiniz !
                            </p>
                        </div>
                        <div className='w-50 text-end'>
                            <button className='btn seeAll'>Hamısına Bax</button>
                        </div>
                    </div>
                </Col>
                {   coursesData.map(item=>(
                    <Col lg="4" md="6" key={item.id}>
                        <CourseCard  item={item}/>
                    </Col>
                    ))}
            </Row>
        </Container>
    </section>
  )
}

export default Courses