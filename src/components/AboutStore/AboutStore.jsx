import './AboutStore.css';
import { Col, Container, Row } from 'react-bootstrap';
import store01 from '../../assets/images/About-Store-section/store01.webp';
import { Link } from 'react-router-dom';
import store02 from '../../assets/images/About-Store-section/store02.webp';
import AosAnimation from '../AosAnimation/AosAnimation';

function AboutStore() {
return (
<Container className='p-5'>
    <Row className='justify-content-between align-items-center'
        data-aos="fade-right" 
        data-aos-offset="120" 
        data-aos-duration="400"
    >
        <Col lg={6}>
            <div className='store00'>
                <img src={store01} alt='About Store' title='Store (1)'/>
            </div>
        </Col>

        <Col lg={6}>    
            <div className='head-store00'>
                <h3>Our Store (1)</h3>

                <p>
                Established fact that a reader will, taken possession of my entire soul, like 
                these sweet mornings of spring which I enjoy with the theory of ethics.
                Posuere eat a ante venanatin diapaus posuere aliquot. Staging at the
                middle of 2010 seem malasada magna moles eulimid. Present commode
                cursus magna, vela scelerisque Nissl consented et. Integer posuere era a
                ante venanatin dipygus posuere valet aliquot.
                </p>

                <div>
                    <ul>
                        <li>Orders go right to your restaurant</li>
                        <li>Provide in-person pickup, & delivery</li>
                        <li>Offer in-person diners self serve</li>
                    </ul>
                </div>

                <button className='btn btn-offer mt-3'>
                    <Link to={'/shop'}>Visit Store</Link>
                </button>

            </div>
        </Col>
    </Row>

    <div className='py-5'></div>
    <AosAnimation />

    <Row className='justify-content-between align-items-center'
        data-aos="fade-left" 
        data-aos-offset="120" 
        data-aos-duration="400"
    >
        <Col lg={6}>    
            <div className='head-store00'>
                <h3>Our Store (2)</h3>

                <p>
                Established fact that a reader will, taken possession of my entire soul, like 
                these sweet mornings of spring which I enjoy with the theory of ethics.
                Posuere eat a ante venanatin diapaus posuere aliquot. Staging at the
                middle of 2010 seem malasada magna moles eulimid. Present commode
                cursus magna, vela scelerisque Nissl consented et. Integer posuere era a
                ante venanatin dipygus posuere valet aliquot.
                </p>

                <div>
                    <ul>
                        <li>Orders go right to your restaurant</li>
                        <li>Provide in-person pickup, & delivery</li>
                        <li>Offer in-person diners self serve</li>
                    </ul>
                </div>

                <button className='btn btn-offer mt-3'>
                    <Link to={'/shop'}>Visit Store</Link>
                </button>

            </div>
        </Col>

        <Col lg={6}>
            <div className='store00'>
                <img src={store02} alt='About Store' title='Store (2)' />
            </div>
        </Col>
    </Row>
</Container>
)
}

export default AboutStore;