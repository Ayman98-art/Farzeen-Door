import './Footer.css';

import { Col, Container, Row } from 'react-bootstrap';

import farzaaLogo from '../../assets/logo.webp';
import payment from '../../assets/images/payment-section/card.webp';
import FooterRowFour from '../FooterRowfour/FooterRowFour';
import FooterRowThree from '../FooterRowThree/FooterRowThree';
import FooterRowTwo from '../FooterRowTwo/FooterRowTwo';
import FooterRowOne from '../FooterRowOne/FooterRowOne';

function Footer() {
return (
<div className='bg-light'>

<div className='pt-100 text-center logoImg'>
    <a href={'/'}>
        <img src={farzaaLogo} alt='farzaa' title='farzaa'/>
    </a>
    <p className='pt-4'>There Are Many Different Styles Of Including Aviator, Wayfarer, Cat-Eye, Round, Some 
    <br className='d-lg-block d-md-block d-sm-block'/> Sunglasses Also Have Polarized Lenses</p>
</div>

<div className='payment-img pt-4 text-center'>
    <img src={payment} alt='payment' title='payment'/>
</div>

<Container>
    <Row className='justify-content-around mx-0 pt-5'>
        <Col lg={2} md={6} sm={12}><FooterRowOne /></Col>
        <Col lg={2} md={6} sm={12}><FooterRowTwo /></Col>
        <Col lg={2} md={6} sm={12}><FooterRowThree /></Col>
        <Col lg={2} md={6} sm={12}><FooterRowFour /></Col>
    </Row>
</Container>

</div>
)
}

export default Footer;