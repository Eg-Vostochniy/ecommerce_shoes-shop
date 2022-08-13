import { useSelector } from 'react-redux'
import { CartItem } from '../components/CartItem'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, cartLength } = useSelector((state) => state.cart)

  const cartPrice = cartItems?.reduce(
    (acc, item) => acc + item.price * item.selectedQuantity,
    0
  )

  return (
    <div className='cart'>
      <div className='cart__amount'>Total Cart Products ({cartLength})</div>
      {cartLength > 0 ? (
        <>
          <div className='cart__items'>
            {cartItems.map((item, index) => (
              <CartItem key={item._id + index} item={item} />
            ))}
          </div>
          <div className='cart__items-price'>
            Total: <span>{cartPrice}$</span>
          </div>
        </>
      ) : (
        <div className='cart__amount-null'>
          Please, add a product of your choice.
        </div>
      )}
      <div className='cart__buttons'>
        <Link to='/'>
          <button>Continue to shopping</button>
        </Link>
        {cartLength ? <button>Checkout</button> : null}
      </div>
    </div>
  )
}
