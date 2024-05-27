import './ContentBlog.css';

import { Row, Col, Container } from "react-bootstrap";

import blog01 from '../../assets/images/blog-section/blog-01.webp';
import blog02 from '../../assets/images/blog-section/blog-02.webp';
import blog03 from '../../assets/images/blog-section/blog-03.webp';
import AosAnimation from '../AosAnimation/AosAnimation';

function ContentBlog() {
return (
<Container>
<AosAnimation />
    <Row>

        <Col lg={6}
        data-aos="fade-right" 
        data-aos-offset="120" 
        data-aos-duration="400"
        >
            <div className='blog-imgs00'>
                <img src={blog01} alt="Blog" title="Blog"/>
                <div className='blog-text'>
                    <span>Classic Door | 17 January, 2023 | 7 Min</span>
                    <h4>Ultimate Guide to Buying a Custom Solid Wood Door</h4>
                    <h6>In this Ultimate Guide to Buying a Custom Wood Door, we answer 
                        your questions about figuring out the size of the door you need,
                        designing it how you like...
                    </h6>
                </div>
            </div>
        </Col>

        <Col lg={6}
        data-aos="fade-left" 
        data-aos-offset="120" 
        data-aos-duration="400"
        >

            <Row>
                <Col lg={12}>
                    <div className="blog-imgs00 blog-imgs01">
                        <img src={blog02} alt="Blog" title="Blog"/>
                        <div className='blog-text'>
                            <span>Modern Door | 17 January, 2023 | 5 Min</span>
                            <h4>Modern Door Trends for 2023</h4>
                        </div>
                    </div>               
                </Col>

                <Col lg={12}>
                    <div className="blog-imgs00 blog-imgs02">
                        <img src={blog03} alt="Blog" title="Blog"/>
                        <div className='blog-text'>
                            <span>Glass Doors | 17 January, 2023 | 9 Min</span>
                            <h4>The Beauty of Glass Doors</h4>
                        </div>
                    </div>               
                </Col>
            </Row>

        </Col>

    </Row>

</Container>
)
}

export default ContentBlog;