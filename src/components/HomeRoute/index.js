import{Component} from 'react'
import Header from '../Header'
import ProductCard from '../ProductCard'
import ProductItemDetails from '../ProductItemDetails'
import './index.css'

class HomeRoute extends Component{
    state = {productList:[]}

    componentDidMount = () =>this.getProducts()

    getProducts = async () => {
        const apiUrl = `https://fakestoreapi.com/products`
        const options = {
          method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        // console.log(data)

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
        this.setState({productList:updatedData})

      }

      getProductDetails = (id) =>{
        const{productList} = this.state
        const filterProduct = productList.filter(each=>each.id===id)
        console.log(filterProduct)
        return <ProductItemDetails filterProduct={this.filterProduct}/>
      }
    render(){
        const{productList} = this.state
        // console.log(productList)
        return(
            <>
            <Header/>
            <div className='home-container'>
                <h1>All Products</h1>
                <ul className='product-list'>
                    {productList.map(each=><ProductCard key={each.id} itemDetails={each} getProductDetails={this.getProductDetails}/>)}
                </ul>
            </div>
            </>
            
        )
    }
}
export default HomeRoute