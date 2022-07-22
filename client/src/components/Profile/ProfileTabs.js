export const ProfileTabs = () => {
  return (
    <form className=''>
      <div className=''>
        <div className=''>
          <label for='account-fn'>User name</label>
          <input className='form-control' type='text' required />
        </div>
      </div>
      <div className='col-md-6'>
        <div className='form'>
          <label for='account-email'>Email</label>
          <input className='form-control' type='email' />
        </div>
      </div>
      <div className='col-md-6'>
        <div className='form'>
          <label for='account-pass'>Password</label>
          <input className='form-control' type='password' />
        </div>
      </div>
      <div className='col-md-6'>
        <div className='form'>
          <label for='account-confirm-pass'>Confirm password</label>
          <input className='form-control' type='password' />
        </div>
      </div>
      <button type='submit'>Update profile</button>
    </form>
  )
}
