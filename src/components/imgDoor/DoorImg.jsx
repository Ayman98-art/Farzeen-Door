import ColDoor from "../ColDoorImg/ColDoor";
import { Row } from "react-bootstrap";

import Social01 from "../../assets/images/social-section/img-01.webp";
import Social02 from "../../assets/images/social-section/img-02.webp";
import Social03 from "../../assets/images/social-section/img-03.webp";
import Social04 from "../../assets/images/social-section/img-04.webp";
import Social05 from "../../assets/images/social-section/img-05.webp";
import Social06 from "../../assets/images/social-section/img-06.webp";

function DoorImg() {
  return (
    <Row className="mx-0 pt-5">
      <ColDoor imgDoor={Social01}/>
      <ColDoor imgDoor={Social02}/>
      <ColDoor imgDoor={Social03}/>
      <ColDoor imgDoor={Social04}/>
      <ColDoor imgDoor={Social05}/>
      <ColDoor imgDoor={Social06}/>
    </Row>
  );
}

export default DoorImg;
