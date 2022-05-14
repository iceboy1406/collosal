import LineDivider from 'components/atoms/LineDivider'
import FaqTabbar from 'components/molecules/FaqTabbar'
import PageSentence from 'components/molecules/PageSentence'
import FaqList from 'components/organisms/FaqList'
import PageTemplate from 'components/templates/PageTemplate'
import React, { useEffect, useState } from 'react'
import getRandomItemsFromArray from 'utils/getRandomItemsFromArray'

const Faq = () => {
  const faqs = [
    {
      title: `How is the payment system?`,
      description: `If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.`,
    },
    {
      title: `Can I consult first?`,
      description: `Of course you can consult us first. We are very happy to help your problems and provide our best solutions. You can contact us via the contact page.`,
    },
    {
      title: `What if the project stops halfway?`,
      description: `We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.`,
    },
    {
      title: `Does it include servers and domains?`,
      description: `You don't need to think about anything else, we have everything prepared. You just need to check your progress and make sure the features you want are the right one.`,
    },
    {
      title: `Will I get the source code?`,
      description: `When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you. You don't need to worry about this.`,
    },
    {
      title: `Is there a warranty?`,
      description: `1 year warranty for our errors or mistakes. If you want to add a feature that is not included in the warranty, there is another fee per feature, and the price depends on the difficulty.`,
    },
  ]
  const [randomFaqs, setRandomFaqs] = useState([faqs, faqs, faqs, faqs])
  const [activeFaq, setActiveFaq] = useState(faqs)
  useEffect(() => {
    const faqs = [
      {
        title: `How is the payment system?`,
        description: `If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.`,
      },
      {
        title: `Can I consult first?`,
        description: `Of course you can consult us first. We are very happy to help your problems and provide our best solutions. You can contact us via the contact page.`,
      },
      {
        title: `What if the project stops halfway?`,
        description: `We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.`,
      },
      {
        title: `Does it include servers and domains?`,
        description: `You don't need to think about anything else, we have everything prepared. You just need to check your progress and make sure the features you want are the right one.`,
      },
      {
        title: `Will I get the source code?`,
        description: `When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you. You don't need to worry about this.`,
      },
      {
        title: `Is there a warranty?`,
        description: `1 year warranty for our errors or mistakes. If you want to add a feature that is not included in the warranty, there is another fee per feature, and the price depends on the difficulty.`,
      },
    ]
    setRandomFaqs([
      faqs,
      getRandomItemsFromArray(faqs, 5),
      getRandomItemsFromArray(faqs, 4),
      getRandomItemsFromArray(faqs, 3),
    ])
  }, [])
  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center">
        <div className="sm:w-10/12 md:8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Frequently asked questions, maybe the same as yours"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-5">
        <div className="basis-12/12 md:basis-4/12" data-aos="fade-up">
          <FaqTabbar
            tabs={[
              {
                name: 'General',
                onClick: () => {
                  setActiveFaq(randomFaqs[0])
                },
              },
              {
                name: 'Transaction',
                onClick: () => {
                  setActiveFaq(randomFaqs[1])
                },
              },
              {
                name: 'Maintenance',
                onClick: () => {
                  setActiveFaq(randomFaqs[2])
                },
              },
              {
                name: 'Technology',
                onClick: () => {
                  setActiveFaq(randomFaqs[3])
                },
              },
            ]}
          />
        </div>
        <div className="basis-12/12 md:basis-8/12">
          <FaqList faqs={activeFaq} />
        </div>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default Faq
