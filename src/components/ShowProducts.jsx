import './ShowProducts.css'
import BillingSummary from './BillingSummary/BillingSummary';
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, deleteItem } from '../rtk/Slice/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShowProducts() {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    console.log(cart);


    const totalQty = cart.reduce((acc, product)=>{
        acc += product.qty
        return acc;
    },0)

return (
<Container className="p-5">
    <Row>
        <Col lg={8} md={8} sm={12}
            data-aos="fade-left" 
            data-aos-offset="120" 
            data-aos-duration="600"
        >
        <div className=' pb-4 d-flex justify-content-between align-items-center'>
                <div>
                    <Button onClick={()=>{dispatch(clearItem())
                    toast.warn("Your Product Romoved Successfully",
                    {
                        position:'top-right'
                    })
                    }}
                    className='btn-clear'>Remove Products</Button>
                </div>
                <div>
                    <h5>Total Orders : <span className='totalPrice'>{totalQty}</span></h5>
                </div>
        </div>
        
        <Table striped hover>
    
        <thead className='text-center border-0'>
        <tr>
            <th>Name Product</th>
            <th>Img Product</th>
            <th>Price</th>
            <th>Remove</th>
        </tr>
        </thead>

        <tbody className='border-0'>
        {cart.map((item)=>{
            return(
                <tr className='tr_td' key={item.id}>
                    <td>{item.description}</td>
                    <td>
                        <img src={item.img} alt={item.description} />
                    </td>
                    <td>{item.price}</td>
                    <td>
                        <Button 
                        onClick={()=>{dispatch(deleteItem(item))}}
                        className="btn-remove">X</Button>
                    </td>
                </tr>
            )
        })}
        </tbody>

        </Table>
        </Col>
        
        <Col lg={4} md={4} sm={12}>
            <BillingSummary />
        </Col>
    </Row>
    <ToastContainer limit={1}/>
</Container>
)
}

export default ShowProducts;