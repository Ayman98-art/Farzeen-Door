import { Col, Container, Row } from 'react-bootstrap';


import FormSection from "../Form/FormSection";
import ContactWays from '../ContactWays/ContactWays';
import AosAnimation from '../AosAnimation/AosAnimation';

function FormContact() {

    

    return (
    <Container 
    className='py-5'
    data-aos="zoom-in" 
    data-aos-offset="120" 
    data-aos-duration="400"
    >
        <Row>

            <Col lg={8}>
                <FormSection />
            </Col>

            <Col lg={4}>
                <ContactWays 
                />
            </Col>

        </Row>
        <AosAnimation />
    </Container>
)
}

export default FormContact;