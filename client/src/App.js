import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
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
import { Notify } from './components/Notify'
import { useSelector } from 'react-redux'
import { Header } from './components/Header'
import { SubHeader } from './components/SubHeader'

export const App = () => {
  const isAuth = useSelector((state) => state.auth)
  const { pathname, state } = useLocation()

  const PrivateRoute = (props) => {
    return isAuth ? (
      props.children
    ) : (
      <Navigate to='/login' state={{ prevPath: pathname }} />
    )
  }

  const PublicRoute = (props) => {
    if (pathname === '/login' && isAuth)
      return <Navigate to={state?.prevPath ? state.prevPath : '/'} />
    return !isAuth ? (
      props.children
    ) : (
      <Navigate to={state?.prevPath ? state.prevPath : '/'} />
    )
  }

  return (
    <div className='app'>
      <Notify />
      <Header />
      <div className='container'>
        <SubHeader isAuth={isAuth} />
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='/products/:id'
            element={
              <PrivateRoute>
                <SingleProduct />
              </PrivateRoute>
            }
          />
          <Route
            path='/login'
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path='/register'
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path='/cart/:id?'
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path='/shipping'
            element={
              <PrivateRoute>
                <Shipping />
              </PrivateRoute>
            }
          />
          <Route
            path='/payment'
            element={
              <PrivateRoute>
                <Payment />
              </PrivateRoute>
            }
          />
          <Route
            path='/placeorder'
            element={
              <PrivateRoute>
                <PlaceOrder />
              </PrivateRoute>
            }
          />
          <Route
            path='/order'
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
