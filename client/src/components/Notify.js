export const Notify = ({ msg, onClose }) => {
  return (
    <div className='notify'>
      <span onClick={onClose}>X</span>
      <div className='notify'>{msg}</div>
    </div>
  )
}
