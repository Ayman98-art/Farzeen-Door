import './Checkout.css';
import { Col, Container, Row } from 'react-bootstrap';
import BgSection from '../../components/BgSec/BgSection';
import CheckoutForm from '../../components/CheckoutSec/CheckoutForm';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import Footer from "../../components/Footer/Footer";
import CoolPage from "../../components/ScrollUp/ScrollToTop ";
import FooterRoot from '../../components/footerRoot/FooterRoot';
import { useEffect, useState } from 'react';
import { HashLoader } from "react-spinners";


function Checkout() {
const [loading, setLoading] = useState(true);

useEffect(() => {
setTimeout(() => {
    setLoading(false) }, 2500);
}, []);

return (
    <>
{
    loading ?
        <HashLoader
        color="#b8860b"
        size={75}
        className="hasloading"
        />
    :
    <>
        <BgSection 
            head={'Checkout Page'} 
            link01={'Home'}
            path01={'/'} 
            link02={'Checkout'}
            path02={'/Pages/Checkout'} 
        />

        <Container className='p-5'>
            <Row className='justify-content-center '>
                <Col lg={8}>
                    <CheckoutForm />
                </Col>
                <Col lg={4}>
                    <CheckoutSummary />
                </Col>
            </Row>
        </Container>

        <Footer />
        <CoolPage />
        <FooterRoot />
    </>
}
</>
);
}

export default Checkout;