import BgSection from "../../components/BgSec/BgSection";
import SignSection from '../../components/SignSection/SignSection';
import Footer from "../../components/Footer/Footer";
import CoolPage from "../../components/ScrollUp/ScrollToTop ";
import FooterRoot from '../../components/footerRoot/FooterRoot';
import { useEffect, useState } from 'react';
import { HashLoader } from "react-spinners";


function AccountPage (){
const [loading, setLoading] = useState(true);

useEffect(() => {
setTimeout(() => {
setLoading(false) }, 2500);
}, []);


return(

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
            head={'Account Page'} 
            link01={'Home'}
            path01={'/'} 
            link02={'Account'}
            path02={'/Pages/Account'} 
        />
        <SignSection />
        <Footer />
        <CoolPage />
        <FooterRoot />
    </>
    }
    </>

)

}
export default AccountPage;