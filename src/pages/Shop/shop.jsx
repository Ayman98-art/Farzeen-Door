import Footer from "../../components/Footer/Footer";
import CoolPage from "../../components/ScrollUp/ScrollToTop ";
import FooterRoot from '../../components/footerRoot/FooterRoot';
import { HashLoader } from "react-spinners";
import { useEffect, useState } from "react";
import BgSection from "../../components/BgSec/BgSection";
import PaginationSection from "../../components/PaginationSection/PaginationSection";
import GroupShop from "../../components/GroupShop/GroupShop";

function ShopPage() {
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
            head={'Shop Page'} 
            link01={'Home'}
            path01={'/'} 
            link02={'Shop'}
            path02={'/shop'} 
        />
        <GroupShop />
        <PaginationSection />
        <Footer />
        <CoolPage />
        <FooterRoot />
    </>
}
</>
)
}

export default ShopPage;