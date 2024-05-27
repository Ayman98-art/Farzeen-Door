import { Container, Row, Col } from "react-bootstrap";
import AccordionSec from "../Accordion/AccordionSec";
import AosAnimation from "../AosAnimation/AosAnimation";

function FaqSection() {
return (
    <Container className="py-5 px-2">
        <Row className="justify-content-center">

            <Col lg={6}
            data-aos="fade-right" 
            data-aos-offset="120" 
            data-aos-duration="600"
            >

                <AccordionSec 
                indexAccordion={'0'} 
                headerAccordion={'How To Make Website Easy Edit?'}/>

                <AccordionSec 
                indexAccordion={'1'} 
                headerAccordion={'In How Many Month you Update the website?'}/>

                <AccordionSec indexAccordion={'2'} 
                headerAccordion={'Where To Get Your Contact Support?'}/>

            </Col>
            
            <AosAnimation />
            
            <Col lg={6}
            data-aos="fade-left" 
            data-aos-offset="120" 
            data-aos-duration="600"
            >

                <AccordionSec 
                indexAccordion={'3'} 
                headerAccordion={'When Will I Receive My Order?'}/>

                <AccordionSec 
                indexAccordion={'4'} 
                headerAccordion={'Where Is Your Location?'}/>

                <AccordionSec 
                indexAccordion={'5'} 
                headerAccordion={'What Are The Shipping Options?'}/>

            </Col>

        </Row>
    </Container>
)
}

export default FaqSection;

