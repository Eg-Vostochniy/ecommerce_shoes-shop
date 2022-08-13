import { Link } from 'react-router-dom'
import { Rating } from './Rating'
import { Pagination } from '../Pagination'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../../redux/actions/Product'

export const ShopSection = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.product.products)

  useEffect(() => {
    dispatch(listProduct())
  }, [])
  return (
    <div className='products'>
      {productList.map((p) => (
        <div key={p._id} className='products__item'>
          <div className='products__item-top'>
            <Link className='products__item_img' to={`/products/${p._id}`}>
              <img src={p.image} alt={p.name} />
            </Link>
            <div className='products__item_name'>{p.name}</div>
          </div>
          <div className='products__item-bottom'>
            <div className='products__item_rating'>
              {[...Array(p.rating)].map((_, index) => (
                <Rating key={index} isStared={true} />
              ))}
              {[...Array(5 - p.rating)].map((_, index) => (
                <Rating key={index} isStared={false} />
              ))}
              <div className='products__item_reviews'>
                {p.numReviews} reviews
              </div>
            </div>
            <div className='products__item_price'>{p.price}$</div>
          </div>
        </div>
      ))}
    </div>
  )
}
