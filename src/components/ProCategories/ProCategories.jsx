import HeadLine from "../heading-of-section/HeadLine";
import './ProCategories.css';

function ProCategories() {
return (
<div className="ProCategories-head">
    <HeadLine title={'Product Categories'}/>
    <div className="pt-2 pl-3">
        <ul>
            <li className="active">All Door (17)</li>
            <li>Plastic Door (3)</li> 
            <li>Wooden Door (5)</li> 
            <li>Double layer Door (1)</li> 
            <li>Steel Door (1)</li> 
            <li>Chinese Door (1)</li> 
            <li>Panel door (1)</li> 
            <li>Solid Color Door (3)</li> 
        </ul>
    </div>
</div>
)
}

export default ProCategories;