import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CustomInput } from '../components/CustomInput'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/Auth'
import { valid } from '../utils/authValidation'

export const Login = () => {
  const [isShowedPassword, setIsShowedPassword] = useState(false)
  const [validErrs, setValidErrs] = useState([])

  const form = useRef()

  const dispatch = useDispatch()

  const formSubmit = (e) => {
    e.preventDefault()

    const { errs, errsLength } = valid.login(
      form.current[0].value,
      form.current[1].value
    )

    if (errsLength === 0) {
      setValidErrs([])
      dispatch(login(form.current[0].value, form.current[1].value))
    } else setValidErrs(errs)
  }

  return (
    <form onSubmit={formSubmit} ref={form} className='auth__form login'>
      <h2>Sign In</h2>
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
        Login
      </button>
      <span className='auth__form-redirect'>
        <Link to='/register'>Create account</Link>
      </span>
      {validErrs.length > 0 && (
        <div className='auth__errors'>
          {validErrs.map((error) => (
            <div>* {error}</div>
          ))}
        </div>
      )}
    </form>
  )
}
