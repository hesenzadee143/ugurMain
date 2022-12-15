import React from 'react'
import "./ChooseUs.css"
import {Container,Row,Col} from "reactstrap"
//import chooseImg from "../../Assests/Images/sebeb7.jpg"
import ReactPlayer from 'react-player'
//import { useState } from 'react'

const ChooseUs = () => {
   // const [showVideo,setShowVideo]=useState(false)
  return (
    <section>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="choose_content">
                        <h2>Niyə bizi seçməlisiniz?</h2>
                        <h4>
                        <div>Üstünlüklərimiz:</div>
                            <div><span><i class="ri-checkbox-circle-line"></i></span>  Yüksək keyfiyyətli dərslər;</div>
                            <div><span><i class="ri-checkbox-circle-line"></i></span>  Ödənişsiz əlavə dərslər;</div>
                            <div><span><i class="ri-checkbox-circle-line"></i></span>  Peşəkar müəllim kollektivi;</div>
                            <div><span><i class="ri-checkbox-circle-line"></i></span>  Valideynlər ilə mütəmadi əlaqə;</div>
                            <div><span><i class="ri-checkbox-circle-line"></i></span>  Ödənişsiz sınaq imtahanları;</div>
                            <div><span><i class="ri-checkbox-circle-line"></i></span>  Təqaüd imkanı;</div>
                            <div><span><i class="ri-checkbox-circle-line"></i></span>  Endirimli qiymətlər;</div>
                               <button className='btn others'> <a href="#courses">və Digər Əlavə Məşğulliyyətlər</a></button>
                        </h4>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="choose_img">

                    <ReactPlayer
                        url="https://youtu.be/tvaHVVsCLIQ" controls
                        width="100%" height="300px"/>
                        {
                        //     showVideo?<ReactPlayer
                        //      url="https://youtu.be/cM2sUSXzAfs" controls
                        //      width="100%" height="300px"/>
                        //     :<img src={chooseImg} alt="" className='w-100' />
                         }
                        
                        {/* {
                            showVideo?<></>
                            :<span className="play_icon">
                                <i className='ri-play-circle-line' onClick={()=>setShowVideo(!showVideo)}></i>
                             </span>
                        } */}
                        <div className='othersVideosPearent '>
                            <button className='btn othersVideos'>
                                <a href="https://www.youtube.com/channel/UCS5YB6tgiHAOPll2yPCihYQ/videos">Digər videolar üçün buradan</a>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ChooseUs