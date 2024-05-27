import Form from 'react-bootstrap/Form';
import HeadLine from '../heading-of-section/HeadLine';
import { Col, Row, Button } from 'react-bootstrap';

function RangeFilter() {
return (
<div className="ProCategories-head">
    <HeadLine title={'Filter By Price'}/>

    <Form.Range className='pt-4'/>
    
    <Row className=' justify-content-between align-items-center pt-3'>
        <Col lg='8'>
            <span className=' text-black'>
            Price: $20 To $500
            </span>
        </Col>
        <Col lg='4'>
            <Button variant="outline-dark" className="btn-selection">Filter</Button>
        </Col>
    </Row>

</div>
);
}

export default RangeFilter;