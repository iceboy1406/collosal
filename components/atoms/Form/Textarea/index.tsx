import React from 'react'
interface TextAreaProps {
  defaultValue?: string | number
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  onSubmit?: React.FormEventHandler<HTMLTextAreaElement>
  required?: boolean
  rows?: number
  id?:string
  placeholder?:string
}
const TextArea = ({
  defaultValue = '',
  onChange = () => {},
  onSubmit = () => {},
  required = false,
  rows = 4,
  id,
  placeholder
}: TextAreaProps) => {
  return (
    <>
      <textarea
        className="w-full bg-transparent border-borderLight text-white text-opacity-40 px-4 py-2 rounded focus:bg-light border      focus:border-white focus:border-opacity-30"
        defaultValue={defaultValue}
        onChange={onChange}
        onSubmit={onSubmit}
        required={required}
        rows={rows}
        id={id}
        placeholder={placeholder}
      ></textarea>
    </>
  )
}

export default TextArea
export type {TextAreaProps}
