import useMobileDeviceDetection from 'hooks/useMobileDetection'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
interface TextArrowLinkProps {
  label: string
  href: string
}
const TextArrowLink = ({ href, label }: TextArrowLinkProps) => {
  const isMobile = useMobileDeviceDetection()
  return (
    <Link href={href}>
      <div
        className={`flex gap-5 items-center ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        } select-none`}
      >
        <p className="text-base text-white font-semibold">{label}</p>
        <FiArrowRight className="text-white text-xl" />
      </div>
    </Link>
  )
}

export default TextArrowLink
