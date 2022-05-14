import React from 'react'
interface LabelProps {
  htmlFor?: string
  label: string
}
const Label = ({ label, htmlFor }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-muted font-normal text-sm leading-5 select-none"
    >
      {label}
    </label>
  )
}

export default Label
