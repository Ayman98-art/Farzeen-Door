import './MineFeatures.css';

import { Col } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function MineFeatures({image , title , subTitle}) {
return (
<>
<Col lg={3} md={4} sm={6} >
    <div className="FeaturedSec d-flex align-items-center px-2">
        <div className="FeaturedSec-img">
            <h2><img src={image} alt="featured-contact" title="" /></h2>
        </div>
        <div className="FeaturedSec-text">
            <h4>{title}</h4>
            <h6>{subTitle}</h6>
        </div>
    </div>
</Col>
</>
)
}

export default MineFeatures;