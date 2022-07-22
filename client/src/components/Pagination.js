import { Link } from 'react-router-dom'

export const Pagination = () => {
  return (
    <nav>
      <ul className='pagination'>
        <li className='page-item active'>
          <Link to='#' className='page-link'></Link>
        </li>
        <li className='page-item'>
          <Link to='#' className='page-link'></Link>
        </li>
        <li className='page-item'>
          <Link to='#' className='page-link'></Link>
        </li>
        <li className='page-item'>
          <Link to='#' className='page-link'></Link>
        </li>
        <li className='page-item'>
          <Link to='#' className='page-link'></Link>
        </li>
      </ul>
    </nav>
  )
}
