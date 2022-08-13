import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { addNewCartProduct } from '../redux/actions/Cart'
import { productDetails } from '../redux/actions/Product'
import arrow from '../assets/img/arrow-down-sign-to-navigate.png'
import { Rating } from '../components/Home/Rating'

export const SingleProduct = () => {
  const { id } = useParams()

  const product = useSelector((state) => state.product.productDetails)
  const isProductInCart = Boolean(
    useSelector((state) => state.cart.cartItems.find((item) => item._id == id))
  )

  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const [isModeOpen, setIsModeOpen] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productDetails(id))
  }, [id])

  const addProductToCart = () => {
    dispatch(addNewCartProduct({ ...product, selectedQuantity }))
  }

  const changeCountMode = () => {
    setIsModeOpen(!isModeOpen)
  }

  const changeCountProduct = (count) => {
    setSelectedQuantity(count)
    setIsModeOpen(false)
  }
  return (
    <div className='product'>
      <img src={product.image} />
      <div className='product__info'>
        <h3 className='product__info_name'>{product.name}</h3>
        <p className='product__info_description'>{product.description}</p>
        <div className='product__info-cart'>
          {isProductInCart && (
            <div className='product__info-alert'>
              Product already added to cart
            </div>
          )}
          <div className='product__info-cart__item'>
            <span>Price</span>
            <span>{product.price}$</span>
          </div>
          <div className='product__info-cart__item'>
            <span>Status</span>
            <span
              className={`product__info-cart__item_status-${
                product.countInStock ? 'in_stock' : 'unavailable'
              }`}
            >
              {product.countInStock ? 'In stock' : 'Unavailable'}
            </span>
          </div>
          <div className='product__info-cart__item'>
            <span>Reviews</span>
            <div className='product__info-cart__item_rating'>
              {product.rating &&
                [...new Array(product.rating)].map((_, index) => (
                  <Rating key={index} isStared={true} />
                ))}
              {product.rating &&
                [...new Array(5 - product.rating)].map((_, index) => (
                  <Rating key={index} isStared={false} />
                ))}
              {product.numReviews} reviews
            </div>
          </div>
          {product.countInStock ? (
            <div className='product__info-cart__item'>
              <span>Quantity</span>
              <div
                onClick={changeCountMode}
                className='product__info-cart__item_quantity'
              >
                <span>{selectedQuantity}</span>
                <img src={arrow} alt='arrow' />
                {isModeOpen && (
                  <div className='product__info-count_mode'>
                    {[...new Array(product.countInStock)].map((_, index) => (
                      <div
                        key={index}
                        onClick={() => changeCountProduct(index + 1)}
                        className='product__info-count_mode__item'
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
        {product.countInStock && !isProductInCart ? (
          <div className='product__info_btn' onClick={addProductToCart}>
            Add to cart
          </div>
        ) : (
          <Link to='/cart'>
            <div className='product__info_btn'>Go to cart</div>
          </Link>
        )}
      </div>
    </div>
  )
}
