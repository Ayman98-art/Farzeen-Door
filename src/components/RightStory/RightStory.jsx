import './RightStory.css';

import Story01 from '../../assets/images/about-story-Section/01.webp';
import Story03 from '../../assets/images/about-story-Section/03.webp';
import Story05 from '../../assets/images/about-story-Section/05.webp';
import { Col } from 'react-bootstrap';

function RightStory() {
return (
<>
    <div className='About-Story'>

        <h1>About Our Story</h1>

        <p>
        Established fact that a reader will, taken possession of my entire soul, like 
        these sweet mornings of spring which I enjoy with the theory of ethics.
        Posuere eat a ante venanatin diapaus posuere aliquot. Staging at the
        middle of 2010 seem malasada magna moles eulimid. Present commode
        cursus magna, vela scelerisque Nissl consented et. Integer posuere era a
        ante venanatin dipygus posuere valet aliquot.
        </p>

        <div className='d-flex align-content-center'>

            <Col lg={4}>
                <div className='About-Story_img'>
                    <img src={Story01} alt="Story" />
                </div>
            </Col>

            <Col lg={8}>
                <div className='ul-List pt-1'>
                    <ul>
                        <li>Orders go right to your restaurant</li>
                        <li>Provide in-person pickup, & delivery</li>
                        <li>Offer in-person diners self serve</li>
                        <li>Established fact that a reader will, taken</li>
                    </ul>
                </div>
            </Col>

        </div>

        <hr/>

        <div className='d-flex align-content-center pt-3'>

            <div>
                <img src={Story05} alt="Our Customers"/>                
            </div>

            <div className='About-sign'>
                <img src={Story03} alt="Our Customers"/>
            </div>

        </div>

    </div>
</>
)
}

export default RightStory;