import './DoorsCat.css';

import { Col, Row } from 'react-bootstrap';
import ShopCat from '../ShopCatComponent/ShopCat';
import ShopCat01 from '../../assets/images/category-section/cat-01.webp';
import ShopCat02 from '../../assets/images/category-section/cat-02.webp';
import ShopCat03 from '../../assets/images/category-section/cat-03.webp';
import ShopCat04 from '../../assets/images/category-section/cat-04.webp';
import ShopCat05 from '../../assets/images/category-section/cat-05.webp';

function DoorsCat() {
return (
<>
    <Row className='justify-content-center px-4 py-5'>

    <Col lg={3} md={3} sm={12}>
        <Row>
            <Col lg={12} className='mb-3'>
                <ShopCat imageCat={ShopCat01} textCat={'Wood Door (321)'}/>
            </Col>
            <Col lg={12} className='mt-2'>
                <ShopCat imageCat={ShopCat02} textCat={'Fiberglass Doors (154)'}/>
            </Col>
        </Row>
    </Col>

    <Col lg={6} md={6} sm={12} className='align-self-center '>
        <div className='minWidth'>
            <ShopCat imageCat={ShopCat03} textCat={'Timber Doors (48)'}/>
        </div>
    </Col>

    <Col lg={3} md={3} sm={12}>
        <Row>
            <Col lg={12} className='mb-3'>
                <ShopCat imageCat={ShopCat04} textCat={'Solid Core Doors (54)'}/>
            </Col>
            <Col lg={12} className='mt-2'>
                <ShopCat imageCat={ShopCat05} textCat={'Hollow Core Doors (85)'}/>
            </Col>
        </Row>
    </Col>

    </Row>
</>
)
}

export default DoorsCat;