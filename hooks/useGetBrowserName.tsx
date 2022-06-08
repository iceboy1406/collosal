import React, { useEffect, useState } from 'react'
import { UAParser } from 'ua-parser-js'

const useGetBrowserName = () => {
  const [browserName, setBrowserName] = useState('Chrome')
  useEffect(() => {
    setBrowserName(`${UAParser.UAParser().browser.name}`)
    window.addEventListener('resize', () =>
      setBrowserName(`${UAParser.UAParser().browser.name}`)
    )
  })
  return browserName
}

export default useGetBrowserName
