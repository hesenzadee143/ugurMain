import React from 'react'
import "./FeatureSection.css"
import { Col, Container, Row } from "reactstrap"

const FeatureSection = () => {
const FeatureData=[
        {
            title:"Tez Öyrənmək",
            desc:"qisa melumat qisa melumat qisa melumat qisa melumat qisa melumat vqisa melumat qisa melumat qisa melumat qisa melumat qisa melumat",
            icon:"ri-draft-line"
        },
        {
            title:"Hər Zaman Sizinlə",
            desc:"qisa melumat qisa melumat qisa melumat qisa melumat qisa melumat vqisa melumat qisa melumat qisa melumat qisa melumat qisa melumat",
            icon:"ri-discuss-line"
        },
        {
            title:"Sertifikatlar",
            desc:"qisa melumat qisa melumat qisa melumat qisa melumat qisa melumat vqisa melumat qisa melumat qisa melumat qisa melumat qisa melumat",
            icon:"ri-contacts-book-line"
        },
    ]
  return (
    <section>
        <Container>
            <Row>
                {
                    FeatureData.map((item,i)=>(
                        <Col lg="4" key={i}>
                        <div className="single_feature text-center px-4">
                            <h2 className='mb-3'><i className={item.icon}></i></h2>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                        </div>
                    </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default FeatureSection