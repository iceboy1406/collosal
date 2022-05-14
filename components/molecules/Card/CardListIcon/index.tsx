import Text from 'components/atoms/Text'
import React from 'react'
interface CardListIconProps {
  icon: JSX.Element
  title: string
}
const CardListIcon = ({ icon, title }: CardListIconProps) => {
  return (
    <div className="w-full bg-light border border-borderLight px-5 py-4 flex gap-5 items-center">
      <div className="text-white text-3xl">{icon}</div>
      <Text value={title} textStyle="SmallCardTitle" />
    </div>
  )
}

export default CardListIcon
export type { CardListIconProps }
