import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import React from 'react'

const LogoList = () => {
  return (
    <>
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight" data-aos='fade-left'>
        <div className="">
          <Image
            src={'/images/github-logo.svg'}
            width={120}
            height="36"
            alt="github logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/forbes-logo.svg'}
            width={120}
            height="36"
            alt="forbes logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/google-logo.svg'}
            width={120}
            height="36"
            alt="google logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/microsoft-logo.svg'}
            width={120}
            height="36"
            alt="microsoft logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/facebook-logo.svg'}
            width={120}
            height="36"
            alt="facebook logo"
          />
        </div>
      </section>
    </>
  )
}

export default LogoList
