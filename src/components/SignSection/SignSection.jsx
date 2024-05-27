import './SignSection.css';
import { Col, Container, Row } from "react-bootstrap";
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import AosAnimation from '../AosAnimation/AosAnimation';

function SignSection() {


return (
<Container className="py-5 px-4">
    <Row className="justify-content-center pb-5">
        <Col lg={6} 
        data-aos="fade-right" 
        data-aos-offset="120" 
        data-aos-duration="600"
        >

            <div className='SignHead pb-3'>
                <h2>Sign In</h2>
            </div>

            <SignIn />

        </Col>

        <AosAnimation />

        <Col lg={6} 
        data-aos="fade-left" 
        data-aos-offset="120" 
        data-aos-duration="600"
        >

            <div className='SignHead pb-3'>
                <h2>Sign Up</h2>
            </div>
            
            <SignUp />

        </Col>
    </Row>
</Container>
)
}

export default SignSection;