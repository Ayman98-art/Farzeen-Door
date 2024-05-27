import './BrandSponsers.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'react-bootstrap';

import Brand01 from '../../assets/images/brand-section/brand-01.webp';
import Brand02 from '../../assets/images/brand-section/brand-02.webp';
import Brand03 from '../../assets/images/brand-section/brand-03.webp';
import Brand04 from '../../assets/images/brand-section/brand-04.webp';
import Brand05 from '../../assets/images/brand-section/brand-05.webp';


function BrandSponsers() {
return (
    <Container>
        <div className='px-5 text-center BrandSponsers'>
            <OwlCarousel
        loop
        onLoadLazy
        autoplay= {true}
        autoPlaySpeed= {1500}
        autoPlayTimeout= {1500}
        autoplayHoverPause= {true}
        margin={10}
        nav="false"
        dots="false"
        responsive= {
            {
                '1':{
                    items: 1
                },
                '430':{
                    items: 2
                },
                '768':{
                    items: 3
                },
                '890':{
                    items: 3
                },
                '991':{
                    items: 4
                },
                '992':{
                    items: 5
                },
                '20000':{
                    items: 5
                },
            }
            
        }
        >
        <div className="item">
            <img src={Brand04} alt='Brand'/>
        </div>
        <div className="item">
            <img src={Brand05} alt='Brand'/>
        </div>
        <div className="item">
            <img src={Brand01} alt='Brand'/>
        </div>
        <div className="item">
            <img src={Brand02} alt='Brand'/>
        </div>
        <div className="item">
            <img src={Brand03} alt='Brand'/>
        </div>
        <div className="item">
            <img src={Brand01} alt='Brand'/>
        </div>
        <div className="item">
            <img src={Brand03} alt='Brand'/>
        </div>
            </OwlCarousel>
        </div>
    </Container>
)
}

export default BrandSponsers;