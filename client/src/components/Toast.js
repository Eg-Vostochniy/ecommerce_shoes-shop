import { ToastContainer } from 'react-toastify'

export const Toast = () => {
  return (
    <div>
      <ToastContainer
        position='top-right'
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      ></ToastContainer>
    </div>
  )
}
