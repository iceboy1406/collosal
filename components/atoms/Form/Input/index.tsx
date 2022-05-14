import React from 'react'
interface InputProps {
  defaultValue?: string | number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onSubmit?: React.FormEventHandler<HTMLInputElement>
  required?: boolean
  id?:string
  placeholder?:string
}
const Input = ({
  defaultValue = '',
  onChange = () => {},
  onSubmit = () => {},
  required = false,
  id,
  placeholder
}: InputProps) => {
  return (
    <>
      <input
        type="text"
        className="w-full bg-transparent border-borderLight text-white text-opacity-40 px-4 py-2 rounded focus:bg-light border      focus:border-white focus:border-opacity-30"
        defaultValue={defaultValue}
        onChange={onChange}
        onSubmit={onSubmit}
        required={required}
        id={id}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
export type {InputProps}
