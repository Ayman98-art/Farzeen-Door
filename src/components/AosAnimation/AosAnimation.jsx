import AOS from 'aos';

import { useEffect } from 'react'

function AosAnimation() {
    useEffect(()=>{
        AOS.init();
    },[])
}

export default AosAnimation;