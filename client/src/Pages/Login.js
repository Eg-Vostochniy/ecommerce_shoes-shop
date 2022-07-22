import { Link } from 'react-router-dom'

export const Login = () => {
  window.scrollTo(0, 0)
  return (
    <div className=''>
      <form>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button>Login</button>
        <p>
          <Link to='/register'>Create account</Link>
        </p>
      </form>
    </div>
  )
}
