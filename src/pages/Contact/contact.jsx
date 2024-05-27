import BgSection from "../../components/BgSec/BgSection";
import FormContact from "../../components/FormContact/FormContact";
import Map from "../../components/MapSec/Map";
import Footer from "../../components/Footer/Footer";
import CoolPage from "../../components/ScrollUp/ScrollToTop ";
import FooterRoot from "../../components/footerRoot/FooterRoot";
import { useEffect, useState } from 'react';
import { HashLoader } from "react-spinners";


function ConatctPage() {
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
        head={'Contact Page'} 
        link01={'Home'}
        path01={'/'} 
        link02={'Contact'}
        path02={'/contact'} 
    />
    <FormContact />
    <Map />
    <Footer />
    <CoolPage />
    <FooterRoot />
    </>
}
</>
)
}

export default ConatctPage;