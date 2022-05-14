import React from 'react'
import Text from 'components/atoms/Text'
interface FeatureCardProps {
  title: string
  description: string
  icon: JSX.Element
  isNaked?: boolean
}
const FeatureCard = ({
  title,
  description,
  icon,
  isNaked = false,
}: FeatureCardProps) => {
  return (
    <div
      className={`w-full h-full bg-light rounded-md px-10 py-8 border-2 border-transparent hover:border-borderLight transition-all duration-300 grid gap-5`}
    >
      <div
        className={`rounded-sm ${
          isNaked
            ? ''
            : 'bg-light w-[50px] h-[50px] flex justify-center items-center'
        }`}
      >
        <div className={`text-white ${isNaked ? 'text-5xl' : 'text-2xl'}`}>
          {icon}
        </div>
      </div>
      <div className="grid gap-4">
        <Text value={title} textStyle="FeatureCardTitle" />
        <Text value={description} textStyle="FeatureCardDescription" />
      </div>
    </div>
  )
}

export default FeatureCard
export type { FeatureCardProps }
