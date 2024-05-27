import { Col, Container, Row } from "react-bootstrap";
import ProtuctShop from "../ProtuctShop/ProtuctShop";
import FilteringShop from "../FilteringShop/FilteringShop";
import FeatursShop from "../FeatursShop/FeatursShop";

function GroupShop() {
return (
    <Container>
        <Row>

            <Col lg={3}>
                <FilteringShop />
            </Col>

            <Col lg={9}>
                <FeatursShop />
                <ProtuctShop />
            </Col>

        </Row>
    </Container>
)
}

export default GroupShop;