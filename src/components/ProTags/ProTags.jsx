import { Button } from "react-bootstrap";
import HeadLine from "../heading-of-section/HeadLine";

function ProTags() {
return (
<div className="ProCategories-head">
    <HeadLine title={'Products Tags'}/>
    <div className="pt-2">
        <ul className="px-3">
            <Button variant="outline-dark" className="btn-selection px-1 py-1 m-1">Plastic Door</Button>
            <Button variant="outline-dark" className="btn-selection px-1 py-1 m-1">Wooden Door</Button>
            <Button variant="outline-dark" className="btn-selection px-1 py-1 m-1">Chinese Door</Button>
            <Button variant="outline-dark" className="btn-selection btn-selection--active px-1 py-1 m-1">Double Layer Door</Button>
            <Button variant="outline-dark" className="btn-selection px-1 py-1 m-1">Steel Door</Button>
            <Button variant="outline-dark" className="btn-selection px-1 py-1 m-1">Security Door</Button>
            <Button variant="outline-dark" className="btn-selection px-1 py-1 m-1">Panel Door</Button>
        </ul>
    </div>
</div>
)
}

export default ProTags;