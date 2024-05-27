import { Container } from 'react-bootstrap';
import './ErrorPage.css';

function ErrorPage() {
return (
    <Container>
        <div className=' pt-4 d-flex flex-column justify-content-center align-items-center'>

        <h1 className="text-center">404 , this page is not found</h1>
        <div className='contanier-page'>
            <div className='text-center LookFor-img'>
                <img src="https://img.freepik.com/free-vector/business-team-looking-new-people-allegory-searching-ideas-staff-woman-with-magnifier-man-with-spyglass-flat-illustration_74855-18236.jpg?w=740&t=st=1685295230~exp=1685295830~hmac=37d6549a4d0930043594d37e39c53f6410768c92199d3883349f17f0a59c877b" alt='Looking for products'/>
            </div>
        </div>

        </div>
    </Container>
)
}

export default ErrorPage;