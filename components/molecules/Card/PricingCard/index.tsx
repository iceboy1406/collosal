import React, { MouseEventHandler, useState } from 'react'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import randomString from 'utils/randomString'
interface Props {
  title: string
  price: string
  features: string[]
  buttonOnclick?: MouseEventHandler<HTMLButtonElement>
}
const PricingCard = ({
  title,
  price,
  features,
  buttonOnclick = () => {},
}: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>()
  return (
    <div
      className="w-full h-fit bg-light rounded-[10px] px-10 py-7 flex flex-col place-content-between border-2 border-transparent hover:border-borderLight transition-all duration-300"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row place-content-between items-start py-8 border-b border-borderLight">
        <Text value={title} textStyle="PricingTitle" />
        <div className="">
          <Text value="Starting From" textStyle="PricingSubtitle" />
          <Text value={price} textStyle="PricingPrice" />
        </div>
      </div>
      <div className="text-center py-9">
        {features.map((feature) => (
          <Text  key={randomString(64)} value={feature} textStyle="PricingDetail" />
        ))}
      </div>
      <Button value="Detail" onClick={buttonOnclick} color={isHovered ? 'primary' : 'white'} />
    </div>
  )
}

export default PricingCard
