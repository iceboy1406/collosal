import Text from 'components/atoms/Text'
import useMobileDeviceDetection from 'hooks/useMobileDetection'
import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
interface FaqListItemProps {
  title: string
  description: string
}
const FaqListItem = ({ description, title }: FaqListItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobileDeviceDetection()
  return (
    <div className="w-full py-6 space-y-2.5">
      <div
        className={`flex justify-between items-center select-none ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text value={title} textStyle="FAQTitle" />
        <div className="text-white text-2xl">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
      {isOpen ? <Text value={description} textStyle="FAQDescription" /> : ''}
    </div>
  )
}

export default FaqListItem
export type { FaqListItemProps }
