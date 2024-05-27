import './CheckoutSummary.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AosAnimation from '../../components/AosAnimation/AosAnimation';
import { useSelector } from 'react-redux';

function CheckoutSummary() {
    const cart = useSelector(state => state.cart);

    const totalQty = cart.reduce((acc, product)=>{
        acc += product.qty
        return acc;
    },0)

    const totalpric = cart.reduce((acc, product)=>{
        acc = product.price
        return acc;
    },0)

    const productPrice = (totalpric) + (totalQty);

return (
<div 
    data-aos="fade-left" 
    data-aos-offset="120" 
    data-aos-duration="600"
>
<AosAnimation />

<div className='py-2'><h3>Billing Summary</h3></div>

<div className='Summary border p-3 w-100'>

    <Row>
        <Col lg='10'md='9' sm='9'>Subtotal</Col>
        <Col className=' text-center' lg='2'md='3' sm='3'>{totalQty}</Col>
    </Row>
    <Row>
        <Col lg='10'md='9' sm='9'>Shipping</Col>
        <Col className=' text-center' lg='2'md='3' sm='3'>{totalpric}</Col>
    </Row>
    <Row>
        <Col lg='10'md='9' sm='9'>Coupon discount (-)</Col>
        <Col className=' text-center' lg='2'md='3' sm='3'>0</Col>
    </Row>
    <hr />
    <Row>
        <Col lg='10'md='9' sm='9'>Total</Col>
        <Col className=' text-center' lg='2'md='3' sm='3'>{productPrice}</Col>
    </Row>

    <button type="button" className='btn-create btn-offer btn-Edit'>
        <Link 
        to={'/Pages/Cart'}>Edit Order</Link>
    </button>

</div>

<div className='pt-5'><h3>Payment Information</h3></div>

<div className='Summary pt-3 w-100'>

    <div className='Summary border p-3 w-100'>
        <Row>
            <Col lg='10'><input type="text" 
            readOnly className='border-0' placeholder='XXXX XXXX XXXX XXXX'/> </Col>
            <Col lg='2'>💳</Col>
        </Row>
    </div>

    <p className='Paymenthead'>
    Your Personal Data Will Be Used To Process Your 
    Order, Support Your Experience Throughout This 
    Website, And For Other Purposes Described In Our 
    <span className='Privacy'>Privacy Policy .</span>
    </p>

    <button type="button" className='btn-create btn-offer btn-Edit'>
        <a 
        href={'/Pages/Checkout'}>Payment</a>
    </button>

</div>
</div>
)
}

export default CheckoutSummary;

