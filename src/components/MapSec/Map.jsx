import './Map.css';
import AosAnimation from '../AosAnimation/AosAnimation';

function Map() {
return (
<>
<iframe
data-aos="zoom-in" 
data-aos-offset="120" 
data-aos-duration="400"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13222.408033385873!2d-118.23097434066477!3d34.054078898511214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64f59427c77%3A0xf14f36b65ce4fe04!2zTGl0dGxlIFRva3lvLCDZhNmI2LMg2KPZhtis2YTZiNiz2Iwg2YPYp9mE2YrZgdmI2LHZhtmK2KfYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2ssa!4v1708886073522!5m2!1sar!2ssa" 
width="100%" 
height="450" 
allowFullScreen="" 
loading="lazy" 
referrerPolicy="no-referrer-when-downgrade">
</iframe>
<AosAnimation />
</>
)
}

export default Map;