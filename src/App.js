import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import './App.css';
import ProductItemDetails from './components/ProductItemDetails';

const App = () => 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeRoute/>} />
        <Route exact path="/products/:id" element={<ProductItemDetails/>}/>
      </Routes>
    </BrowserRouter>

export default App;