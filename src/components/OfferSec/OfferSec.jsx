import './OfferSec.css';

import { Col, Row } from "react-bootstrap";
import offer01 from '../../assets/images/offer-section/offer-01.webp';

function OfferSec() {
return (
<div className="bg-light offer-group pt-5">
        <Row className="mx-0 justify-content-center align-items-center">
            <Col lg={6} md={6} sm={12}>
                <div className="text-group">
                    <h3>30% OFF <br className="d-lg-block d-md-none d-sm-none"/> Doors to Fit into your</h3>
                    <p>As such, it must blend with or complement the exterior effect <br className="d-lg-block d-md-none d-sm-none"/>
                        For instance, Victorian, contemporary, art nouveau.</p>
                    <button className="btn btn-offer">Shop Now</button>
                </div>
            </Col>

            <Col lg={6} md={6} sm={12} className='align-items-end'>
                <div className="offer-img">
                    <img src={offer01} alt="" title="" />
                </div>
            </Col>
        </Row>
</div>
)
}

export default OfferSec;