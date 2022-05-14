import Text from 'components/atoms/Text'
import React from 'react'
interface StatisticListItemProps {
  icon: JSX.Element
  value: string
  label: string
}
const StatisticListItem = ({ icon, label, value }: StatisticListItemProps) => {
  return (
    <div className="flex items-center gap-8">
      <div className="bg-light rounded p-5 text-3xl text-white">{icon}</div>
      <div className="">
        <Text textStyle="StatisticValue" value={value} />
        <Text textStyle="StatisticLabel" value={label} />
      </div>
    </div>
  )
}

export default StatisticListItem
export type { StatisticListItemProps }
