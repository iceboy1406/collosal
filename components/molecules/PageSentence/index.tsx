import Text from 'components/atoms/Text'
import React from 'react'
interface SectionSentenceProps {
  badge?: string
  title?: string
  description?: string
  badgeStyle?: 'success' | 'error'
}
const PageSentence = ({
  title = '',
  description = '',
  badge = '',
  badgeStyle = 'success',
}: SectionSentenceProps) => {
  return (
    <article className={`space-y-6`}>
      {title == '' && badge == '' ? (
        ''
      ) : (
        <div className="space-y-1">
          {badge == '' ? (
            ''
          ) : (
            <Text
              value={badge}
              textStyle={
                badgeStyle == 'success' ? 'SectionBadge' : 'SectionBadgeError'
              }
            />
          )}
          {title == '' ? '' : <Text value={title} textStyle="PageTitle" />}
        </div>
      )}
      {description == '' ? (
        ''
      ) : (
        <Text value={description} textStyle="PageDescription" />
      )}
    </article>
  )
}

export default PageSentence
