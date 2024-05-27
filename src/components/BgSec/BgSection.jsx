import { Link } from 'react-router-dom';
import './BgSection.css';


function BgSection({head, link01, path01, link02, path02}) {
return (
    <div className='BgSection bg-light text-center p-5 mb-5'>
        <div className='py-2'><h2>{head}</h2></div>
        <div>
            <Link className='link0' to={path01}> {link01} </Link>
            | 
            <Link className='link0 link00' to={path02}> {link02} </Link>
        </div>
    </div>
)
}

export default BgSection;