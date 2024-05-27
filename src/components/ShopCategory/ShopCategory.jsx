import './ShopCategory.css';

import { Container } from 'react-bootstrap';
import HeadLine from '../heading-of-section/HeadLine';
import DoorsCat from '../DoorsCat/DoorsCat';
import AosAnimation from '../AosAnimation/AosAnimation';


function ShopCategory() {
return (
<Container
    data-aos="flip-up" 
    data-aos-offset="120" 
    data-aos-duration="400"
>
<AosAnimation />

    <div className='text-center Blog pt-3 pb-1'>
        <HeadLine title={'Shop By Category'} />
    </div>

    <DoorsCat />

</Container>
)
}

export default ShopCategory;