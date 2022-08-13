import logo from '../assets/img/sneaker-shop-logo-vector-38650178.jpg'
import shoppingCart from '../assets/img/shopping-cart.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { logout } from '../redux/actions/Auth'

export const SubHeader = ({ isAuth }) => {
  const [search, setSearch] = useState('')

  const { cartLength } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className='subheader'>
      <Link to='/'>
        <img className='logo' src={logo} alt='' />
      </Link>
      <div className='subheader__search'>
        <input
          type='search'
          className='custom__input subheader__search'
          name='search'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className='subheader__search_btn'>Search</div>
      </div>
      <div className='subheader__auth'>
        <Link to='profile'>
          <div>Profile</div>
        </Link>
        {isAuth ? (
          <div onClick={handleLogout}>Log out</div>
        ) : (
          <>
            <Link to='/register'>
              <div>Register</div>
            </Link>
            <Link to='/login'>
              <div>Login</div>
            </Link>
          </>
        )}
      </div>
      <Link to='/cart'>
        <div className='subheader__shopping-cart'>
          <img
            className='subheader__shopping-cart-img'
            src={shoppingCart}
            alt=''
          />
          <span>{cartLength}</span>
        </div>
      </Link>
    </header>
  )
}
