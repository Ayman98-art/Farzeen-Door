import './SocialSection.css'

import HeadLine from "../heading-of-section/HeadLine";
import DoorImg from '../imgDoor/DoorImg';

function SocialSection() {
return (
<div className='pt-5 bg-light SocialSection'>
    <div className="container text-center">
        <HeadLine title={'@farzaa.door'} />
    </div>
    <DoorImg />
</div>
)
}

export default SocialSection;