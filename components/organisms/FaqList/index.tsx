import LineDivider from 'components/atoms/LineDivider'
import FaqListItem, { FaqListItemProps } from 'components/molecules/FaqListItem'
import React from 'react'
import randomString from 'utils/randomString'
interface FaqListProps {
  faqs: FaqListItemProps[]
}
const FaqList = ({ faqs }: FaqListProps) => {
  return (
    <div className="w-full">
      {faqs.map((faq) => {
        return (
          <div key={randomString(64)} data-aos="fade-right">
            <FaqListItem title={faq.title} description={faq.description} />
            <LineDivider />
          </div>
        )
      })}
    </div>
  )
}

export default FaqList
