import './FeatursShop.css';
import { Col, Container, Row, Form, Button, ButtonGroup } from "react-bootstrap";

function FeatursShop() {
return (
<Container>
    <Row className="px-2 pb-5 justify-content-center align-items-center">

        <Col lg='8'>
            <p className="text-black">Showing 1-14 of 30 results</p>
        </Col>

        <Col lg='4'>
            <Row>

                <Col lg="4">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button variant="outline-dark" className="btn-selection">
                        <svg xmlns="http://www.w3.org/2000/svg" height={'20'} width={'20'} viewBox="0 0 448 512">
                            <path fill='#b8860b' d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z"/>
                        </svg>
                        </Button>

                        <Button variant="outline-dark" className="btn-selection">
                        <svg xmlns="http://www.w3.org/2000/svg" height={'20'} width={'20'} viewBox="0 0 512 512">
                            <path fill='#b8860b' d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
                        </svg>
                        </Button>
                    </ButtonGroup>
                </Col>

                <Col lg="8">
                    <Form.Select aria-label="Default" className='select-ml'>
                        <option>Default</option>
                        <option value="#">By Name ( A To Z )</option>
                        <option value="#">By Name ( Z To A )</option>
                        <option value="#">By Price ( Low To High )</option>
                        <option value="#">By Price ( High To Low )</option>
                    </Form.Select>
                </Col>

            </Row>
        </Col>

    </Row>
</Container>
)
}

export default FeatursShop;