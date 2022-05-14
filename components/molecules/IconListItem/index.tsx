import Text from 'components/atoms/Text'
import React from 'react'
interface IconListItemProps {
  label?: string
  value: string
  icon: JSX.Element
}
const IconListItem = ({ icon, value, label = '' }: IconListItemProps) => {
  return (
    <div
      className={`flex flex-row place-content-between place-items-center w-fit ${
        label == '' ? 'space-x-6' : 'space-x-7'
      }`}
    >
      <div
        className={`rounded bg-light ${label == '' ? 'p-2.5' : 'p-5'} ${
          label == '' ? 'text-xl' : 'text-3xl'
        } text-white`}
      >
        {icon}
      </div>
      <div className="space-y-1">
        {label == '' ? '' : <Text textStyle="IconListLabel" value={label} />}
        {label == '' ? (
          <Text textStyle="IconListValueWithoutKey" value={value} />
        ) : (
          <Text textStyle="IconListValue" value={value} />
        )}
      </div>
    </div>
  )
}

export default IconListItem
