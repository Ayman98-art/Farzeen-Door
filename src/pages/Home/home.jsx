import BlogSection from "../../components/BlogSection/BlogSection";
import BrandSection from "../../components/Brand/Brand";
import FeaturedProduct from "../../components/Featured Product/FeaturedProduct";
import OfferSec from "../../components/OfferSec/OfferSec";
import ShopCategory from "../../components/ShopCategory/ShopCategory";
import SliderHome from "../../components/SliderHome/SliderHome";
import SocialSection from "../../components/Social/SocialSection";
import ProtuctShop from "../../components/ProtuctShop/ProtuctShop";
import Subscribe from "../../components/Subscribe/Subscribe";
import FeaturedSec from "../../components/features/FeaturedSec";
import Footer from "../../components/Footer/Footer";
import CoolPage from "../../components/ScrollUp/ScrollToTop ";
import FooterRoot from '../../components/footerRoot/FooterRoot';
import { HashLoader } from "react-spinners";
import { useEffect, useState } from "react";

function HomePage() {
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
        <SliderHome />
        <ShopCategory />
        <FeaturedProduct /> 
        <FeaturedSec />
        <OfferSec />
        <Subscribe />
        <ProtuctShop />
        <BlogSection />
        <BrandSection />
        <SocialSection />
        <Footer />
        <CoolPage />
        <FooterRoot />
    </>
}
</>
)
}

export default HomePage;