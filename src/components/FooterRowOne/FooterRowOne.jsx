import './FooterRowOne.css';

import HeadRow from '../head-of-footerRow/HeadRow';
import AosAnimation from '../AosAnimation/AosAnimation';

function FooterRowOne() {
return (
<div 
    data-aos="fade-right" 
    data-aos-offset="120" 
    data-aos-duration="400"
>
    <AosAnimation />

    <HeadRow title={'Ways to Shop'} />

    <div className='list-Links pl-0 pt-3'>
        <ul className='under-lines'>
            <li><a href="#">Shop on Facebook</a></li>
            <li><a href="#">Shop on Ebay</a></li>
            <li><a href="#">Shop on Category</a></li>
            <li><a href="#">Shop All</a></li>
            <li><a href="#">Coupons and Discounts</a></li>
        </ul>
    </div>
</div>
)
}

export default FooterRowOne;