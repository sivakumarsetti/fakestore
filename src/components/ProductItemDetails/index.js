import {Component} from 'react'
import './index.css'

class ProductItemDetails extends Component{
    state = {productItem:[]}

    componentDidMount = () => {
        this.getProductItemDetails()
      }
    
    getProductItemDetails = async () => {
        const apiUrl = `https://fakestoreapi.com/products/1`
        const options = {
          method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        console.log(data)

        const updatedData = {
            category:data.category,
            description:data.description,
            id:data.id,
            imageUrl:data.image,
            price:data.price,
            rate:data.rating.rate,
            count:data.rating.count,
            title:data.title,
        }
        this.setState({productItem:updatedData})
    }
    render(){
        const {productItem} = this.state
        const{category,description,imageUrl,price,rate,count,title} = productItem
    return(
        <div className='item-container'>
            <img src={imageUrl} alt='product item' className='image-product'/>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{category}</p>
                <p>RS {price}</p>
                <p>Rating: {rate}</p>
                <p>Reviews: {count}</p>
            </div>
        </div>
    )
        
    }
}
export default ProductItemDetails