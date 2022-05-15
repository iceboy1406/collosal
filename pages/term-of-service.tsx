import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const TermOfService = () => {
  return (
    <PageTemplate>
      <section className="space-y-6 text-center" data-aos="zoom-in-up">
        <PageSentence badge="PAGE" title={`Terms & Conditions`} />
        <Text textStyle="BlogMeta" value="Updated at 2021-05-06" />
      </section>
      <LineDivider />
      <section className="grid place-items-center" data-aos="fade-up">
        <div className="w-full sm:w-10/12 md:w-8/12 space-y-10">
          <Text
            textStyle="PageContent"
            value={`
              By accessing and placing an order with Collosal, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and Collosal.
              <br> <br>
              Under no circumstances shall Collosal team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if Collosal team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.
              <br> <br>
              Collosal will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment.
              `}
          />
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="License" />
            <Text
              textStyle="PageContent"
              value={`
              Collosal grants you a revocable, non-exclusive, non- transferable, limited license to download, install and use the website strictly in accordance with the terms of this Agreement.
              <br> <br>
              These Terms & Conditions are a contract between you and Collosal ("we," "our," or "us") grants you a revocable, non-exclusive, non- transferable, limited license to download, install and use the website strictly in accordance with the terms of this Agreement.
              `}
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default TermOfService
