import Text from 'components/atoms/Text'
import React from 'react'
interface SmallCardIconProps {
  title: string
  description: string
  icon: JSX.Element
}
const SmallCardIcon = ({ title, description, icon }: SmallCardIconProps) => {
  return (
    <>
      <div className="w-full bg-light rounded border border-borderLight px-5 py-6 grid gap-4">
        <aside className="flex gap-4 items-center">
          <div className="text-white text-3xl">{icon}</div>
          <Text textStyle="SmallCardTitle" value={title} />
        </aside>
        <Text textStyle="SmallCardDescription" value={description} />
      </div>
    </>
  )
}

export default SmallCardIcon
export type { SmallCardIconProps }
