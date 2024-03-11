import {Component} from 'react'

class ProductItemDetails extends Component{
    state = {productItem:[]}

    componentDidMount = () => {
        this.getProductItemDetails()
      }
    
    getProductItemDetails = async () => {
        const {match} = this.props
        const {params} = match
        const {id} = params
        console.log(id)
    
        const apiUrl = `https://fakestoreapi.com/products/${id}`
        const options = {
          method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        console.log(data)

        const updatedData = data.map(each=>({
            category:each.category,
            description:each.description,
            id:each.id,
            imageUrl:each.image,
            price:each.price,
            rate:each.rating.rate,
            count:each.rating.count,
            title:each.title,
        }))
        this.setState({productItem:updatedData})
    }
    render(){
        const {productItem} = this.state
        const{category,description,imageUrl,price,rate,count,title} = productItem
    return(
        <div>
            <img src={imageUrl} alt='product item'/>
            <p>{title}</p>
            <p>{description}</p>
            <p>{category}</p>
            <p>{price}</p>
            <p>{rate}</p>
            <p>{count}</p>
        </div>
    )
        
    }
}
export default ProductItemDetails