import '../FooterRowOne/FooterRowOne.css';

import HeadRow from "../head-of-footerRow/HeadRow";
import AosAnimation from '../AosAnimation/AosAnimation';

function FooterRowTwo() {
return (
<div 
    data-aos="fade-right" 
    data-aos-offset="120" 
    data-aos-duration="400"
>
    <AosAnimation />

    <HeadRow title={'Customer Service'} />

    <div className='list-Links pl-0 pt-3'>
        <ul className='under-lines'>
            <li><a href="#">Shipping and Returns</a></li>
            <li><a href="#">Product Care</a></li>
            <li><a href="#">Returns & Policy</a></li>
            <li><a href="#">Warranty & Lifetime Service</a></li>
            <li><a href="#">Jewelry Care Instruction</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
    </div>
</div>
)
}

export default FooterRowTwo;