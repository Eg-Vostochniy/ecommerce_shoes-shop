import { useSelector } from 'react-redux'
import { Loading } from './Loading'

export const Notify = () => {
  const { error, success, loading } = useSelector((state) => state.alert)
  if (error || success)
    return (
      <div className={`notify ${error ? 'error' : 'success'}`}>
        <span>X</span>
        <div className='notify__content'>{error || success}</div>
      </div>
    )
  else if (loading) return <Loading />
}
