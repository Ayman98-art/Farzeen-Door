import './SliderHome.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Col, Container, Row } from 'react-bootstrap';
import Door01 from '../../assets/images/hero-section/banner-01.webp';
import Door02 from '../../assets/images/hero-section/banner-02.webp';
import Door03 from '../../assets/images/hero-section/banner-03.webp';
import Texr01 from '../../assets/images/hero-section/sticker.webp';


function SliderHome() {
return (
<div className='bg-light heroHigth'>

<Container>

<OwlCarousel
    className="owl-theme SliderHome"
    loop={false}
    margin={10}
    items={1}
    onLoadLazy
    autoplay= {true}
    autoPlaySpeed= {1500}
    autoPlayTimeout= {1500}
    autoplayHoverPause= {true}
    >

    <div className="item">
        <Row className='align-items-center justify-content-between'>
            <Col lg={6}>
                <div className='sliderText'>
                    <h1 className='pb-5'>
                        Make your entrance a grand one
                    </h1>
                    <div className='d-flex justify-content-start align-items-center'>
                        <div>
                            <button className="btn btn-video">
                                <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width='22' height='22' viewBox="0 0 384 512">
                                    <path fill="#000000" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                </svg>
                                </a>
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-View">View More 
                            <svg xmlns="http://www.w3.org/2000/svg" width='22' height='22' viewBox="0 0 576 512">
                                <path fill="#696969" d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={6}>
            <div className='imgText'>
                <span>25K</span>
                <div className='imgText-img'>
                    <img src={Texr01} alt="25K" />
                </div>
            </div>
            <div className='SLiderImg'>
                <div className='SLiderImg-door'>
                    <img src={Door01} alt="Farzaa Door" />
                </div>
            </div>
            </Col>
        </Row>
    </div>

    <div className="item">
        <Row className='align-items-center justify-content-between'>
            <Col lg={6}>
                <div className='sliderText'>
                    <h1 className='pb-5'>
                        Make your entrance a grand one
                    </h1>
                    <div className='d-flex justify-content-start align-items-center'>
                        <div>
                            <button className="btn btn-video">
                                <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width='22' height='22' viewBox="0 0 384 512">
                                    <path fill="#000000" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                </svg>
                                </a>
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-View">View More 
                            <svg xmlns="http://www.w3.org/2000/svg" width='22' height='22' viewBox="0 0 576 512">
                                <path fill="#696969" d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={6}>
            <div className='imgText'>
                <span>25K</span>
                <div className='imgText-img'>
                    <img src={Texr01} alt="25K" />
                </div>
            </div>
            <div className='SLiderImg'>
                <div className='SLiderImg-door'>
                    <img src={Door02} alt="Farzaa Door" />
                </div>
            </div>
            </Col>
        </Row>
    </div>

    <div className="item">
        <Row className='align-items-center justify-content-between'>
            <Col lg={6}>
                <div className='sliderText'>
                    <h1 className='pb-5'>
                        Make your entrance a grand one
                    </h1>
                    <div className='d-flex justify-content-start align-items-center'>
                        <div>
                            <button className="btn btn-video">
                                <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width='22' height='22' viewBox="0 0 384 512">
                                    <path fill="#000000" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                </svg>
                                </a>
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-View">View More 
                            <svg xmlns="http://www.w3.org/2000/svg" width='22' height='22' viewBox="0 0 576 512">
                                <path fill="#696969" d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={6}>
            <div className='imgText'>
                <span>25K</span>
                <div className='imgText-img'>
                    <img src={Texr01} alt="25K" />
                </div>
            </div>
            <div className='SLiderImg'>
                <div className='SLiderImg-door'>
                    <img src={Door03} alt="Farzaa Door" />
                </div>
            </div>
            </Col>
        </Row>
    </div>
</OwlCarousel>

</Container>

</div>
)
}

export default SliderHome;