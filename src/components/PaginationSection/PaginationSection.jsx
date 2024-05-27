import './PaginationSection.css';
import Pagination from 'react-bootstrap/Pagination';


function PaginationSection() {
return (
<div className='d-flex justify-content-center align-items-center py-4'>
    <Pagination>
        <Pagination.First />
        <Pagination.Prev disabled/>
        <Pagination.Item size="lg" >{1}</Pagination.Item>
        <Pagination.Item size="lg" active>{2}</Pagination.Item>
        <Pagination.Item size="lg" >{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next />
        <Pagination.Last />
    </Pagination>
</div>
)
}

export default PaginationSection;