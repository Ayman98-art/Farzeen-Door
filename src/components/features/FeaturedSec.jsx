import { Container, Row } from "react-bootstrap";
import MineFeatures from "../Mine-features/MineFeatures";
import feature01 from "../../assets/images/featured-contact-section/feature-01.webp";
import feature02 from "../../assets/images/featured-contact-section/feature-02.webp";
import feature03 from "../../assets/images/featured-contact-section/feature-03.webp";
import feature04 from "../../assets/images/featured-contact-section/feature-04.webp";

function FeaturedSec() {
return (
<Container className="py-5 px-4">
    <Row className="justify-content-center">
    <MineFeatures
        image={feature01}
        title={"Free Delivery"}
        subTitle={"Only in $50"}
    />
    <MineFeatures
        image={feature02}
        title={"Get Feedback"}
        subTitle={"12000 Users"}
    />
    <MineFeatures
        image={feature03}
        title={"07 Days Returns"}
        subTitle={"Policy Option"}
    />
    <MineFeatures
        image={feature04}
        title={"Secure Payment"}
        subTitle={"System"}
    />
    </Row>
</Container>
);
}

export default FeaturedSec;
