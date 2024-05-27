import './FeaturedProduct.css'

import { Col, Container, Row } from "react-bootstrap";

import EyeItem from "../../components/EyeItem/EyeItem";

import Product01 from '../../assets/images/featured-product-section/pro-01.webp';
import Product02 from '../../assets/images/featured-product-section/pro-02.webp';

import AosAnimation from '../AosAnimation/AosAnimation';


function FeaturedProduct() {

    return (
    <Container 
    data-aos="flip-down" 
    data-aos-offset="120" 
    data-aos-duration="400"
    >
    <AosAnimation />
        <Row className="justify-content-center text-center px-4">

            <Col lg={6} md={6} sm={12} className='mb-2'>
                <div className="group_product">

                    <div  className="group_product-image">
                        <img src={Product01} alt="featured-product" title="farzaa-door"/>
                    </div>

                    <div className="group_product-icons">

                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                            <path fill="#ccc" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512">
                            <path fill="#ccc" d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                        </svg>


                        <EyeItem 
                            title1={'Brown Solid Door'}
                            price={'$630'}
                                body={Product01}
                            title2={'Brown Solid Door'}
                        />

                    </div>

                    <div className="group_product-text mt-4 p-2 bg-light">
                        <div>
                            <h3>Brown Solid Door</h3>
                        </div>
                        <span>$630</span>
                        <del>$900</del>
                    </div>

                </div>
            </Col>

            <Col lg={6} md={6} sm={12} className='mb-2'>
                <div className="group_product">

                    <div  className="group_product-image">
                        <img src={Product02} alt="featured-product" title="farzaa-door"/>
                    </div>

                    <div className="group_product-icons">

                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                            <path fill="#ccc" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512">
                            <path fill="#ccc" d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                        </svg>

                        <EyeItem 
                            title1={'Brown Antique Door'}
                            price={'$672'}
                                body={Product02}
                            title2={'Brown Antique Door'}
                        />
    
                    </div>

                    <div className="group_product-text mt-4 p-2 bg-light">
                        <div>
                            <h3>Brown Antique Door</h3>
                        </div>
                        <span>$672</span>
                        <del>$960</del>
                    </div>

                </div>
            </Col>

        </Row>
    </Container>
)
}

export default FeaturedProduct;