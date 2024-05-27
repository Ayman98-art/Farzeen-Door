import './ShopCat.css';


function ShopCat({imageCat , textCat}) {
return (
<>
    <div className='ShopCat'>
        <div className='ShopCat-img'>
            <img src={imageCat} alt="category" />
        </div>

        <div className='ShopCat-text'>
            <h4><a href="#">{textCat}</a></h4>
        </div>
    </div>
</>
)
}

export default ShopCat;