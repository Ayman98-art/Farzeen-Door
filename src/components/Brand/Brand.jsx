import BrandSponsers from "../BrandSponsers/BrandSponsers";
import HeadLine from "../heading-of-section/HeadLine";
import { Container } from "react-bootstrap";

function BrandSection(){
return (
    <Container className="pt-5">
    <HeadLine title={"Browse by Brand"} />
    <BrandSponsers />
    </Container>
)
}

export default BrandSection;