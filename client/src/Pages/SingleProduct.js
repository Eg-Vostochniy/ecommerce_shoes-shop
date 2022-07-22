import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { productDetails } from '../redux/actions/Product'

export const SingleProduct = () => {
  window.scrollTo(0, 0)

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productDetails(id))
  }, [id])
  return <div className=''>SingleProduct</div>
}
