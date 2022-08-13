import { useState } from 'react'
import { useDispatch } from 'react-redux'
import arrow from '../assets/img/arrow-down-sign-to-navigate.png'
import { changeCartItemQty, removeCartItem } from '../redux/actions/Cart'

export const CartItem = ({ item }) => {
  const [isModeOpen, setIsModeOpen] = useState(false)

  const dispatch = useDispatch()

  const changeCountMode = () => {
    setIsModeOpen(!isModeOpen)
  }

  const changeCountProduct = (count) => {
    dispatch(changeCartItemQty(count, item._id))
    setIsModeOpen(false)
  }

  const removeItemFromCart = () => {
    dispatch(removeCartItem(item._id))
  }
  return (
    <div className='cart__item'>
      <div className='cart__item-remove' onClick={removeItemFromCart}>
        x
      </div>
      <img className='cart__item_img' src={item.image} alt={item.name} />
      <div className='cart__item_name'>{item.name}</div>
      <div>
        <div>Quantity</div>
        <div onClick={changeCountMode} className='cart__item_quantity'>
          <span>{item.selectedQuantity}</span>
          <img src={arrow} alt='arrow' />
          {isModeOpen && (
            <div className='cart-count_mode'>
              {[...new Array(item.countInStock)].map((_, index) => (
                <div
                  key={index}
                  onClick={() => changeCountProduct(index + 1)}
                  className='cart-count_mode__item'
                >
                  {index + 1}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='cart__item_price'>
        <div>Subtotal</div>
        <div>{item.price * item.selectedQuantity}$</div>
      </div>
    </div>
  )
}
