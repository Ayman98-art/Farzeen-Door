import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BillingSummary() {
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
    <>
        <div className='Summary border p-3 w-100 mt-2'>

    <Row>
        <Col lg='10'md='9' sm='9'>Subtotal</Col>
        <Col className="text-center" lg='2'md='3' sm='3'>{totalpric}</Col>
    </Row>
    <Row>
        <Col lg='10'md='9' sm='9'>Shipping</Col>
        <Col className="text-center" lg='2'md='3' sm='3'>{totalQty}</Col>
    </Row>
    <Row>
        <Col lg='10'md='9' sm='9'>Coupon discount (-)</Col>
        <Col className="text-center" lg='2'md='3' sm='3'>0</Col>
    </Row>
    <hr />
    <Row>
        <Col lg='10'md='9' sm='9'>Total</Col>
        <Col lg='2'md='3' sm='3'>{productPrice}</Col>
    </Row>

    <button type="button" className='btn-Edit btn-Proceed'>
        <Link 
        to={'/Pages/Checkout'}>Proceed To Checkout</Link>
    </button>

    </div>

    </>
)
}

export default BillingSummary;