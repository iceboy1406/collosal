import { useEffect, useState } from 'react'
import ua from 'ua-parser-js'
const useMobileDeviceDetection: () => boolean = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  useEffect(() => {
    deviceTypeHandler()
    window.addEventListener('resize', () => deviceTypeHandler())
    window.addEventListener('scroll', () => deviceTypeHandler())
  }, [])

  const deviceTypeHandler: () => void = () => {
    switch (ua.UAParser().device.type) {
      case ua.DEVICE.MOBILE:
        setIsMobile(true)
        break
      case ua.DEVICE.TABLET:
        setIsMobile(true)
        break
      default:
        setIsMobile(false)
    }
  }
  return isMobile
}
export default useMobileDeviceDetection