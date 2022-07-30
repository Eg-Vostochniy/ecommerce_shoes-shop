import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CustomInput } from '../components/CustomInput'
import { useDispatch } from 'react-redux'
import { register } from '../redux/actions/Auth'
import { valid } from '../utils/authValidation'
import logo from '../assets/img/sneaker-shop-logo-vector-38650178.jpg'

export const Register = () => {
  const [isShowedPassword, setIsShowedPassword] = useState(false)
  const [validErrs, setValidErrs] = useState([])

  const form = useRef()

  const dispatch = useDispatch()

  const formSubmit = (e) => {
    e.preventDefault()

    const { errs, errsLength } = valid.register(
      form.current[0].value,
      form.current[1].value,
      form.current[2].value
    )

    if (errsLength === 0) {
      setValidErrs([])
      dispatch(
        register(
          form.current[0].value,
          form.current[1].value,
          form.current[2].value
        )
      )
    } else setValidErrs(errs)
  }

  return (
    <div className='auth'>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <form onSubmit={formSubmit} ref={form} className='auth__form register'>
        <h2>Sign Up</h2>
        <label className='auth__label username'>
          <span>User Name</span>
          <CustomInput type='text' name='username' />
        </label>
        <label className='auth__label email'>
          <span>Email</span>
          <CustomInput type='email' name='email' />
        </label>
        <label className='auth__label password'>
          <span>Password</span>
          <CustomInput
            type={isShowedPassword ? 'text' : 'password'}
            name='password'
          />
          <small onClick={() => setIsShowedPassword(!isShowedPassword)}>
            {isShowedPassword ? 'Hide' : 'Show'}
          </small>
        </label>
        <button className='auth__form-button' type='submit'>
          Register
        </button>
        <span className='auth__form-redirect'>
          <Link to='/login'>Sign In</Link>
        </span>
        {validErrs.length > 0 && (
          <div className='auth__errors'>
            {validErrs.map((error) => (
              <div>* {error}</div>
            ))}
          </div>
        )}
      </form>
    </div>
  )
}
