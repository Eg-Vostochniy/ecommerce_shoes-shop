import logo from '../assets/img/sneaker-shop-logo-vector-38650178.jpg'
import shoppingCart from '../assets/img/shopping-cart.png'
import { CustomInput } from './CustomInput'
import { Link } from 'react-router-dom'

export const SubHeader = ({ isAuth }) => {
  return (
    <header className='subheader'>
      <Link to=''>
        <img className='logo' src={logo} alt='' />
      </Link>
      <div className='subheader__search'>
        <CustomInput
          type='search'
          placeholder='Search'
          name='search'
          cls='subheader__search'
        />
        <button className='subheader__search-btn'>Search</button>
      </div>
      <div className='subheader__auth'>
        {isAuth ? (
          <span>Log out</span>
        ) : (
          <>
            <span>Register</span>
            <span>Login</span>
          </>
        )}
      </div>
      <div className='subheader__shopping-cart'>
        <img
          className='subheader__shopping-cart-img'
          src={shoppingCart}
          alt=''
        />
        <span>0</span>
      </div>
    </header>
  )
}
