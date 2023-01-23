import React, { useEffect, useState } from 'react'
import { UAParser } from 'ua-parser-js'

const useGetBrowserName = () => {
  const [browserName, setBrowserName] = useState('Chrome')
  useEffect(() => {
    setBrowserName(`${UAParser.UAParser().browser.name}`)
    const updateBrowserName = () => setBrowserName(`${UAParser.UAParser().browser.name}`);
    window.addEventListener('resize', updateBrowserName)

    return () => {
      window.removeEventListener('resize', updateBrowserName);
    };
  })
  return browserName
}

export default useGetBrowserName
