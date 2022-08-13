import star from '../../assets/img/star.png'
import emptyStar from '../../assets/img/star_empty.png'

export const Rating = ({ isStared }) => {
  return <img className='rating' src={isStared ? star : emptyStar} alt='star' />
}
