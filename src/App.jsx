import { useState} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Main from './layouts/Main'
import Header from './layouts/Header'
import ProductLists from './products/ProductList'
import products from './datas/products'
import ProductInfo from './products/ProductInfo'
import AddProduct from './layouts/AddProduct'
import SignIn from './users/SignIn'

function App() {
  const [count, setCount] = useState(0)

  const [isLoggedIn, setIsLoggedIn] =useState(false);

  const [userName, setUserName] = useState("");

  const handleLogin = (userName) =>{
    setIsLoggedIn(true);
  }

  return (
    <>
     <section className="app">
      <BrowserRouter>
      <Header userName={userName}
      setUserName={setUserName}></Header>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/products' element={<ProductLists products={products}/>}/>
        <Route path='/products/:id' element={<ProductInfo/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/SignIn' element={<SignIn setUserName={setUserName}/>}/>
      </Routes>
      </div>
      </BrowserRouter>
     </section>
    </>
  )
}

export default App
