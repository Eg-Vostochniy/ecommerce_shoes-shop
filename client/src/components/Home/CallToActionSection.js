export const CallToActionSection = () => {
  return (
    <div className='subscribe-section bg-white-black'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='subscribe-head'>
              <h2></h2>
              <p></p>
              <form className='form-section'>
                <input type='email' name='email' placeholder='Your Email' />
                <input type='submit' name='subscribe' value='Yes, I want' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
