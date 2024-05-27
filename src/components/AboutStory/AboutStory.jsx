import { Col, Container, Row } from "react-bootstrap";
import LeftStory from "../LeftStory/LeftStory";
import RightStory from "../RightStory/RightStory";

function AboutStory() {
return (
<Container className="p-5">
    <Row className="justify-content-between align-content-center">
        <Col lg={6} md={12} sm={12} className="pt-3">
            <LeftStory />
        </Col>
        <Col lg={6} md={12} sm={12} className="pt-3">
            <RightStory />
        </Col>
    </Row>
</Container>
)
}

export default AboutStory;