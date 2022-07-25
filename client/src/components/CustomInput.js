import { useState } from 'react'

export const CustomInput = ({ type, name, cls, ...props }) => {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <input
      onChange={handleChange}
      value={value}
      className={cls}
      type={type}
      name={name}
      {...props}
    />
  )
}
