/* eslint-disable react/prop-types */
import './HeadLine.css';

function HeadLine({title}) {
return (
<>
    <h2>{title}</h2>
    <hr className='HR'/>
</>
)
}

export default HeadLine;