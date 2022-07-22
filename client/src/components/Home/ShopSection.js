import { Link } from 'react-router-dom'
import { Rating } from './Rating'
import { Pagination } from '../Pagination'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../../redux/actions/Product'

export const ShopSection = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(listProduct())
  }, [])
  return (
    <div className='container'>
      <div className='section'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 article'>
            <div className='shop-container row'>
              {
                <div className='shop col-lg-4 col-md-12 col-sm-6'>
                  <div className='border__product'>
                    <Link to='#'>
                      <div className='shop-back'>
                        <img src='' alt='' />
                      </div>
                    </Link>
                    <div className='shop__text'>
                      <p>
                        <Link to='#'>name</Link>
                      </p>
                      <Rating value='12' text='text' />
                      <h3>$</h3>
                    </div>
                  </div>
                </div>
              }
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
