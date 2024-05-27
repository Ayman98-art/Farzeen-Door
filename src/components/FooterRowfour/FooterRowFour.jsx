import AosAnimation from '../AosAnimation/AosAnimation';
import '../FooterRowOne/FooterRowOne.css';

import HeadRow from '../head-of-footerRow/HeadRow';

function FooterRowFour() {
return (
<div 
  data-aos="fade-left" 
  data-aos-offset="120" 
  data-aos-duration="400"
>
  <AosAnimation />


    <HeadRow title={'Store Address'} />

    <div className='list-Links pl-0 pt-3'>
        <ul className='under-lines'>

            <li className="link-border row">
              <div className='col-lg-2 px-0 pt-2'>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 576 512" width='22' height='22'>
                  <path fill="#696969" d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                </svg>
              </div>
              <div className='col-lg-10 px-0'>
                <a href="https://maps.app.goo.gl/mWQCxc9Km8cL3S9k7" target={'blank'}>
                  16 Rr 2, Ketchikan, Alaska 99901, USA
                </a>
              </div>
            </li>

            <li className="link-border row">
              <div className='col-lg-2 px-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='22' height='22'>
                  <path fill="#696969" d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/>
                </svg>
              </div>
              <div className='col-lg-10 px-0'>
                <a href="tel:(907) 225-4144">
                  (907) 225-4144
                </a>
              </div>
            </li>

            <li className="link-border row">
              <div className='col-lg-2 px-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='18' height='18'>
                  <path fill="#696969" d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
                </svg>
              </div>
              <div className='col-lg-10 px-0'>
                <a href="mailto:info@webmail.com">
                  info@webmail.com
                </a>
              </div>
            </li>
        </ul>
    </div>
</div>
  )
}

export default FooterRowFour;