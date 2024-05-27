import AboutStore from "../../components/AboutStore/AboutStore";
import AboutStory from "../../components/AboutStory/AboutStory";
import AboutTime from "../../components/AboutTime/AboutTime";
import BgSection from "../../components/BgSec/BgSection";
import Footer from "../../components/Footer/Footer";
import CoolPage from "../../components/ScrollUp/ScrollToTop ";
import FooterRoot from "../../components/footerRoot/FooterRoot";
import { useEffect, useState } from 'react';
import { HashLoader } from "react-spinners";


function AboutPage() {
const [loading, setLoading] = useState(true);

useEffect(() => {
setTimeout(() => {
setLoading(false) }, 2500);
}, []);

return (
    <>
    {
    loading ?
    <HashLoader
    color="#b8860b"
    size={75}
    className="hasloading"
    />
    :
    <>
    <BgSection 
        head={'About Page'} 
        link01={'Home'}
        path01={'/'} 
        link02={'About'}
        path02={'/About'} 
    />
    <AboutStory />
    <AboutTime />
    <AboutStore />
    <Footer />
    <CoolPage />
    <FooterRoot />
    </>
    }
</>
)
}

export default AboutPage;