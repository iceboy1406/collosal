import NavBar from 'components/organisms/NavBar'
import CallOut from 'components/organisms/CallOut'
import Footer from 'components/organisms/Footer'
import React, { ReactNode, useEffect } from 'react'
import Container from 'components/templates/Container'
import Head from 'next/head'
import useGetBrowserName from 'hooks/useGetBrowserName'
interface PageTemplateProps {
  children: ReactNode[] | JSX.Element
  title?: string
}
const PageTemplate = ({ children, title = 'Collosal' }: PageTemplateProps) => {
  const browserName = useGetBrowserName()
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Navbar Fixed on top */}
      <NavBar />
      {/* Background */}
      {browserName == 'Firefox' ? (
        <div className="w-full h-fit min-h-screen bg-dark overflow-x-hidden">
          <div className="w-full h-full min-h-screen relative">
            <div className="w-full h-full min-h-screen relative before:absolute before:w-full before:h-full before:min-h-screen before:bg-[url('/images/page-background.svg')] before:bg-cover before:blur-[175px]">
              {/* Space for navbar, because navbar is absolute */}
              <div
                className={`w-full h-full min-h-screen relative ${
                  browserName === 'Firefox' ? 'bg-dark/[.85]' : 'bg-dark/[.75]'
                } `}
              >
                <div className="h-[105px]"></div>
                {/* Padding */}
                <Container>
                  {children}
                  <div data-aos="fade-right">
                    <CallOut />
                  </div>
                  <Footer />
                </Container>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full h-fit min-h-screen bg-dark overflow-x-hidden">
            <div className="w-full h-full min-h-screen relative bg-[url('/images/page-background.svg')] bg-cover">
              <div className="w-full h-full min-h-screen relative backdrop-blur-[175px] bg-dark/[.80] overflow-visible">
                {/* Space for navbar, because navbar is absolute */}
                <div className="h-[105px]"></div>
                {/* Padding */}
                <Container>
                  {children}
                  <div data-aos="fade-right">
                    <CallOut />
                  </div>
                  <Footer />
                </Container>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default PageTemplate
