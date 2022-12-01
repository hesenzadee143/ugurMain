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
                        Üstünlüklərimiz: <br />
                            🟣 Yüksək keyfiyyətli dərslər;<br />
                            🟣 Ödənişsiz əlavə dərslər;<br />
                            🟣 Peşəkar müəllim kollektivi;<br />
                            🟣 Valideynlər ilə mütəmadi əlaqə;<br />
                            🟣 Ödənişsiz sınaq imtahanları;<br />
                            🟣 Təqaüd imkanı;<br />
                            🟣 Endirimli qiymətlər; <br/>
                               <button className='btn others'> və Digər Əlavə Məşğulliyyətlər</button>
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