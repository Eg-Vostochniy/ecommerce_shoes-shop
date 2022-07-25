import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { SingleProduct } from './Pages/SingleProduct'
import { NotFound } from './Pages/NotFound'
import { Login } from './Pages/Login'
import { Payment } from './Pages/Payment'
import { Shipping } from './Pages/Shipping'
import { Order } from './Pages/Order'
import { PlaceOrder } from './Pages/PlaceOrder'
import { Cart } from './Pages/Cart'
import { Profile } from './Pages/Profile'
import { Register } from './Pages/Register'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart/:id?' element={<Cart />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/order' element={<Order />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
