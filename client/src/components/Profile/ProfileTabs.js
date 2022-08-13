import { useState } from 'react'
import { useSelector } from 'react-redux'

export const ProfileTabs = () => {
  const { name, email } = useSelector((state) => state.auth.user)

  const [formValues, setFormValues] = useState({
    username: name,
    email: email,
  })

  const handleChangeFormValues = (e) => {
    const { value, name } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const isProfileTabsChanged = () => {
    if (name === formValues.username && email === formValues.email) return true
    else return false
  }

  return (
    <form className='profile__tabs' onSubmit={handleSubmit}>
      <div className='profile__tabs-inputs'>
        <div className='profile__tabs-input profile__tabs_username-label'>
          <label htmlFor='profile__tabs_username-label'>User name</label>
          <input
            value={formValues.username}
            onChange={handleChangeFormValues}
            type='text'
            name='username'
            required
          />
        </div>
        <div className='profile__tabs-input profile__tabs_email-label'>
          <label htmlFor='profile__tabs_email-label'>Email</label>
          <input
            value={formValues.email}
            onChange={handleChangeFormValues}
            name='email'
            type='email'
            required
          />
        </div>
      </div>
      <button type='submit' disabled={isProfileTabsChanged()}>
        Update profile
      </button>
    </form>
  )
}
