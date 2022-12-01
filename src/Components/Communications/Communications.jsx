/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import "./Communications.css"

const Communications = () => {

  let [gosterIcon,SetGosterIcon]=useState(false)

  let IconGoster = function () {
    if (gosterIcon) {
      SetGosterIcon(false)
    }else{
      SetGosterIcon(true)
    }
  } 

  return (
    <section id='Communication'>
        {gosterIcon?<div className='ficons'>                                
          <span>
            {/* <span>Facebook</span> */}
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/UgurTM1/">
            <i className="ri-facebook-circle-line"></i>
            </a>
            </span> 
          <span>
            {/* <span>Instagram</span> */}
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ugurtdrismrkzi/">
                <i className='ri-instagram-line'></i>
            </a>
            </span> 
          <span>
            {/* <span>Youtube</span> */}
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCS5YB6tgiHAOPll2yPCihYQ">
                <i className='ri-youtube-line'></i>
            </a>
            </span> 
          <span>
          {/* <span>Whatsapp</span> */}
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+994552257527">
                <i className='ri-whatsapp-line'></i>
            </a>
            </span> 
          <span>
            {/* <span>Telegram</span> */}
            <a target="_blank" rel="noopener noreferrer" href="https://web.telegram.org/z/#811137430">
            <i className="ri-telegram-line"></i>
            </a>
            </span> 
          <span> 
            {/* <span>TikTok</span> */}
            <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@ugurtdrismrkzi">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                <g
                fill="#a514de"  stroke="none"    stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                font-family="none" font-weight="none" font-size="none" text-anchor="none" 
                ><g transform="scale(10.66667,10.66667)"><path d="M6,3c-1.64497,0 -3,1.35503 -3,3v12c0,1.64497 1.35503,3 3,3h12c1.64497,0 3,-1.35503 3,-3v-12c0,-1.64497 -1.35503,-3 -3,-3zM6,5h12c0.56503,0 1,0.43497 1,1v12c0,0.56503 -0.43497,1 -1,1h-12c-0.56503,0 -1,-0.43497 -1,-1v-12c0,-0.56503 0.43497,-1 1,-1zM12,7v7c0,0.56503 -0.43497,1 -1,1c-0.56503,0 -1,-0.43497 -1,-1c0,-0.56503 0.43497,-1 1,-1v-2c-1.64497,0 -3,1.35503 -3,3c0,1.64497 1.35503,3 3,3c1.64497,0 3,-1.35503 3,-3v-3.76758c0.61615,0.43892 1.25912,0.76758 2,0.76758v-2c-0.04733,0 -0.73733,-0.21906 -1.21875,-0.63867c-0.48142,-0.41961 -0.78125,-0.94634 -0.78125,-1.36133z"></path></g></g>
                </svg>
            </a>
            </span> 
        </div>
        :<> <a href='#'><i class="upPage ri-arrow-up-line"></i></a></>}
       <i onClick={IconGoster} title="Əlaqə vasitələri" class="ri-chat-smile-2-line"></i>
    </section>
  )
}

export default Communications