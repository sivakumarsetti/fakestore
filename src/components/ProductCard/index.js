import {Link} from 'react-router-dom'
import './index.css'

const ProductCard = props =>{
    const{itemDetails} = props
    const{imageUrl,id,title,price} = itemDetails

    return(
        <Link to={`/products/${id}`}>
            <li className='item-card'>
                <img src={imageUrl} alt='product item' className='product-image'/>
                <p className='title-text'>{title}</p>
                <p className='title-text'>RS: {price}</p>
            </li>
        </Link>
        
    )
}
export default ProductCard