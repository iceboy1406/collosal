import React, { useEffect, useState } from 'react'
import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import Container from 'components/templates/Container'
import { FiMenu, FiX } from 'react-icons/fi'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }, [])
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('h-screen')
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('h-screen')
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [isOpen])
  return (
    <>
      <nav
        className={`pt-8 w-full top-0 left-0 z-30 ${
          isScrolled ? 'fixed' : 'absolute'
        }`}
      >
        <Container>
          <div
            className={`bg-light px-6 py-4 w-full rounded-md backdrop-blur-[50px] ${
              isScrolled || isOpen ? '' : 'lg:bg-transparent lg:px-0'
            }`}
          >
            <div className="flex flex-col lg:flex-row w-full place-content-between lg:place-items-center">
              <div className="w-full flex flex-row place-content-between place-items-center lg:w-fit">
                <NavBrand />
                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <div
                    className='text-white text-2xl'
                  >
                    {isOpen ? <FiX /> : <FiMenu />}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  isOpen ? '' : 'hidden '
                }space-y-5 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-16 lg:flex lg:place-items-center`}
              >
                <NavLink href="/service" value="Services" canActive={true} />
                <NavLink
                  href="/how-we-work"
                  value="How We Work"
                  canActive={true}
                />
                <NavLink href="/project" value="Project" canActive={true} />
                <NavLink href="/about" value="About" canActive={true} />
              </div>
              <div
                className={`${isOpen ? '' : 'hidden '}lg:block mt-5 lg:mt-0`}
              >
                <ButtonLink
                  value="Contact"
                  style="light"
                  color="white"
                  size="small"
                  href="/contact"
                />
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default NavBar
