import './LeftStory.css';

import Story04 from '../../assets/images/about-story-Section/04.webp';
import Story03 from '../../assets/images/about-story-Section/03.webp';
import Story02 from '../../assets/images/about-story-Section/02.webp';


function LeftStory() {
return (
<>
    <div className='LeftStory'>

        <div className='LeftStory01'>
            <img src={Story04} alt="Our Store"/>
            <div className='LeftStory03'>
                <img src={Story02} alt="Our Store"/>
            </div>
        </div>

        <div className='d-flex align-content-center pt-5'>

            <div>
                <span className='d-block'>30K+</span>
                <span>Active Customer</span>
            </div>

            <div className='LeftStory02 d-flex'>
                <img src={Story03} alt="Our Customers"/>
                <img src={Story03} alt="Our Customers"/>
                <img src={Story03} alt="Our Customers"/>
                <img src={Story03} alt="Our Customers"/>
                <img src={Story03} alt="Our Customers"/>
            </div>

        </div>

    </div>
</>
)
}

export default LeftStory;