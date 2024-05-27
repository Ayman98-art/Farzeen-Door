import'./AccordionSec.css';

import Accordion from 'react-bootstrap/Accordion';

function AccordionSec({indexAccordion , headerAccordion}) {
return (
    <div className='p-3 SecAccordion'>
    <Accordion defaultActiveKey={indexAccordion}>
      <Accordion.Item eventKey={indexAccordion}>
        <Accordion.Header className='btn-Accordion'>
          {headerAccordion}
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
)
}

export default AccordionSec;