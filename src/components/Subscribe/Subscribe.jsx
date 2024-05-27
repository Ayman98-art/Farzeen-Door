import './Subscribe.css';

import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function Subscribe() {
const [value, setValue] = useState(null);

const handleSendEmail = () =>{
    setValue(value)
    alert('Massage Send Successfully');
}
return (
<>
    <div className='bg-Subscribe'>
    <Container>
        <Row className='align-items-center'>

            <Col lg={6}>
                <h3>Subscribe!</h3>
                <h4>Newsletter For Update & Offer</h4>
            </Col>

            <Col lg={6}>
                <div className='d-flex'>
                    <div>
                        <input 
                        value={value}
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='Enter your email address' />
                    </div>
                    <div>
                        <button 
                        onClick={handleSendEmail}
                        className='btn btn-Subscribe' 
                        >subscribe</button>
                    </div>
                </div>
            </Col>

        </Row>
    </Container>
    </div>
</>
)
}

export default Subscribe;