import React from 'react'
interface TagProps {
    value: string
}
const Tag = ({value}:TagProps) => {
  return (
    <div className='rounded-full w-fit h-fit px-8 py-2 bg-light border border-borderLight text-white text-sm font-medium'>{value}</div>
  )
}

export default Tag