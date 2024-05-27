import './CheckoutForm.css';
import { Col, Form, Row } from 'react-bootstrap';
import AosAnimation from '../../components/AosAnimation/AosAnimation';

function CheckoutForm() {
    return (
<>
    <AosAnimation />
    
    <div className='py-2'
    data-aos="fade-right" 
    data-aos-offset="120" 
    data-aos-duration="600">
        <h3>Billing Details</h3>
    </div>
    
    <Form method='get' 
    data-aos="fade-right" 
    data-aos-offset="120" 
    data-aos-duration="600"
    >
        <Row>
            <Col>
            <Form.Control required
                className='input-Billing'
                type="text" 
                placeholder="First Name" 
            />
            </Col>
            <Col>
            <Form.Control required
                className='input-Billing'
                type="text" 
                placeholder="Last Name" 
            />
            </Col>
        </Row>

        <Row>
            <Col>
            <Form.Control required
                className='input-Billing mt-3'
                type="number" 
                placeholder="Phone Number" 
            />
            </Col>
            <Col>
            <Form.Control required
                className='input-Billing mt-3'
                type="email" 
                placeholder="Email Address" 
            />
            </Col>
        </Row>

        <Form.Control required
            className='input-Billing my-3'
            type="text" 
            placeholder="Company Name" 
        />

        <Form.Select className='input-Billing' 
            aria-label="Default select example">
            <option>Country</option>
            <option value="Egypt">Egypt</option>
            <option value="Island">Island</option>
            <option value="Filand">Filand</option>
            <option value="Spain">Spain</option>
            <option value="Canada">Canada</option>
            <option value="Mexsico">Mexsico</option>
        </Form.Select>

        <Form.Control required
            className='input-Billing my-3'
            type="text" 
            placeholder="House Number & Street Number" 
        />

        <Form.Control required
            className='input-Billing my-3'
            type="text" 
            placeholder="Town / City" 
        />

        <Form.Check
            className='py-2'
            type="switch"
            id="custom-switch"
            label="Create an account"
        />

        <div>
            <div className='py-2'><h3>Billing Details</h3></div>
            <textarea rows={7} 
            className='form-control input-Billing d-block textarea' 
            placeholder='Optional' 
            />
        </div>

    </Form>
</>
)
}

export default CheckoutForm