import ButtonLink from 'components/atoms/Button/ButtonLink'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const PageNotFound = () => {
  return (
    <>
      <PageTemplate title='Page Not Found'>
        <section className="grid grid-cols-1 place-items-center gap-6" data-aos="zoom-in-up">
          <div className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-6/12">
            <div className="text-center">
              <PageSentence
                badge="ERROR"
                badgeStyle="error"
                title="The page you are looking for is not on this website, please check again"
                description="The system cannot find the page you are looking for, maybe you have the wrong path or the page has been deleted."
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="Back to Home"
                href="/"
                color="white"
                style="light"
              />
            </div>
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default PageNotFound
