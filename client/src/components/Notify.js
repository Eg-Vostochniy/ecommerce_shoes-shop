import { useDispatch, useSelector } from 'react-redux'
import { removeAlert } from '../redux/actions/Alert'
import { Loading } from './Loading'

export const Notify = () => {
  const { error, success, loading } = useSelector((state) => state.alert)
  const dispatch = useDispatch()

  const closeAlert = () => {
    dispatch(removeAlert())
  }

  if (error || success)
    return (
      <div className={`notify ${error ? 'error' : 'success'}`}>
        <div>
          <span onClick={closeAlert}>X</span>
        </div>
        <div className='notify__content'>{error || success}</div>
      </div>
    )
  else if (loading) return <Loading />
}
