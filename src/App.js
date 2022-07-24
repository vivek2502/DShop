import HomePage from './Components/HomePageComponents/HomePage'
import Login from './Components/Login/Login'
import Product from './Components/AddProduct/Product'
import ViewInfo from './Components/ViewProduct/ViewInfo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="addProduct" element={<Product />} />
        <Route path="viewProduct" element={<ViewInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
