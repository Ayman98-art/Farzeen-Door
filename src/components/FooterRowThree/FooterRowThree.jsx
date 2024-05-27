import '../FooterRowOne/FooterRowOne.css';

import HeadRow from '../head-of-footerRow/HeadRow';
import AosAnimation from '../AosAnimation/AosAnimation';

function FooterRowThree() {
return (
<div 
    data-aos="fade-left" 
    data-aos-offset="120" 
    data-aos-duration="400"
>
    <AosAnimation />

    <HeadRow title={'Quick Links'} />

    <div className='list-Links pl-0 pt-3'>
        <ul className='under-lines'>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Blog & Press</a></li>
            <li><a href="#">Order History</a></li>
            <li><a href="#">Wish List</a></li>
            <li><a href="#">Terms & Conditions</a></li>
        </ul>
    </div>
</div>  
)
}

export default FooterRowThree;