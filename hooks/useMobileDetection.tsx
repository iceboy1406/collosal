import { useEffect, useState } from 'react'
import ua from 'ua-parser-js'
const useMobileDeviceDetection: () => boolean = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  useEffect(() => {
    deviceTypeHandler()
    const resizeListener = () => deviceTypeHandler();
    window.addEventListener('resize', resizeListener)

    const scrollListener = () => deviceTypeHandler();
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('resize', resizeListener);
      window.removeEventListener('scroll', scrollListener);
    };
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