import { useEffect, useState } from "react";
import BgSection from "../../components/BgSec/BgSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import Footer from "../../components/Footer/Footer";
import FooterRoot from '../../components/footerRoot/FooterRoot';
import CoolPage from "../../components/ScrollUp/ScrollToTop ";
import { HashLoader } from "react-spinners";

function FAQ() {
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
                head={'FAQ Page'} 
                link01={'Home'}
                path01={'/'} 
                link02={'FAQ'}
                path02={'/Pages/Faq'} 
            />
            <FaqSection />
            <Footer />
            <CoolPage />
            <FooterRoot />
        </>
    }
</>
)
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;