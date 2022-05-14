import React, { ReactNode } from 'react'
interface Props {
    children: ReactNode[] | JSX.Element
}
const Container = ({children} : Props) => {
  return (
    <div className={`px-7 xl:px-[150px] 3xl:px-[300px] 4xl:px-[400px]`}>{children}</div>
  )
}

export default Container