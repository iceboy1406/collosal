import React from 'react'
interface LazyCardProps {
  bottomSquareSize?: 'small' | 'big'
  height?: 300 | 350 | 400 | 450
}
const LazyCard = ({
  bottomSquareSize = 'small',
  height = 450,
}: LazyCardProps) => {
  return (
    <div
      className={`w-full ${
        height == 300
          ? 'h-[300px]'
          : height == 350
          ? 'h-[350px]'
          : height == 400
          ? 'h-[400px]'
          : height == 450
          ? 'h-[450px]'
          : ''
      } flex flex-col place-items-center place-content-between bg-cardDark border border-borderLight pt-[54px] rounded-md px-12 lg:px-16`}
    >
      <div className="w-full flex flex-col place-items-center">
        <div className="w-full max-w-[160px] h-[26px] mb-3.5 rounded-full bg-[#212136]"></div>
        <div className="w-full max-w-[96px] h-[26px] rounded-full bg-[#212136]"></div>
      </div>
      <div
        className={`w-full ${
          bottomSquareSize == 'small' ? 'max-w-[192px]' : ''
        } h-7/12 rounded-tr-[20px] rounded-tl-[20px] bg-[#212136]`}
      ></div>
    </div>
  )
}

export default LazyCard
export type {LazyCardProps}