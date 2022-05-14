import Button from 'components/atoms/Button'
import LineDivider from 'components/atoms/LineDivider'
import Tag from 'components/atoms/Tag'
import Text from 'components/atoms/Text'
import BlogAuthorCard from 'components/molecules/Card/BlogAuthorCard'
import BlogCard, { BlogCardProps } from 'components/molecules/Card/BlogCard'
import BlogCommentCard from 'components/molecules/Card/BlogCommentCard'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import randomString from 'utils/randomString'

const BlogDetail = () => {
  const thumbnailContainer: React.LegacyRef<HTMLDivElement> = useRef(null)
  const [thumbnailSize, setThumbnailSize] = useState({
    width: 850,
    height: 594,
  })
  const forestContainer: React.LegacyRef<HTMLDivElement> = useRef(null)
  const [forestImageSize, setForestImageSize] = useState({
    width: 850,
    height: 447,
  })
  useEffect(() => {
    if (thumbnailContainer.current?.clientWidth !== undefined) {
      setThumbnailSize({
        width: thumbnailContainer.current?.clientWidth,
        height: thumbnailContainer.current?.clientWidth / 1.43,
      })
    }
    if (forestContainer.current?.clientWidth !== undefined) {
      setForestImageSize({
        width: forestContainer.current?.clientWidth,
        height: forestContainer.current?.clientWidth / 1.9,
      })
    }
    window.addEventListener('resize', () => {
      if (thumbnailContainer.current?.clientWidth !== undefined) {
        setThumbnailSize({
          width: thumbnailContainer.current?.clientWidth,
          height: thumbnailContainer.current?.clientWidth / 1.43,
        })
      }
      if (forestContainer.current?.clientWidth !== undefined) {
        setForestImageSize({
          width: forestContainer.current?.clientWidth,
          height: forestContainer.current?.clientWidth / 1.9,
        })
      }
    })
  }, [thumbnailContainer, forestContainer])
  const blogListData: BlogCardProps[] = [
    {
      authorAvatarSrc: '/images/blog-author-4.webp',
      authorName: 'Ban Steward',
      launchDate: 'Feb 20',
      lead: 'Small images can speed up website load times',
      readTime: '8 min',
      thumbnailSrc: '/images/blog-thumbnail-4.webp',
      title: 'How to compress image size without losing quality',
    },
    {
      authorAvatarSrc: '/images/blog-author-5.webp',
      authorName: 'Rob Arace',
      launchDate: 'Feb 23',
      lead: 'Improve the SEO techniques that you have used so far',
      readTime: '12 min',
      thumbnailSrc: '/images/blog-thumbnail-5.webp',
      title: 'Why is Google still not recognizing my website?',
    },
    {
      authorAvatarSrc: '/images/blog-author-6.webp',
      authorName: 'Don Rohiman',
      launchDate: 'Jan 28',
      lead: 'Get accurate error messages when the application crashes',
      readTime: '12 min',
      thumbnailSrc: '/images/blog-thumbnail-6.webp',
      title: 'Monitor your application when errors occur in production',
    },
  ]
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center space-y-6"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="BLOG DETAIL"
            title="10 Figma Plugins that will increase your productivity"
          />
          <Text textStyle="BlogMeta" value={'Mar 11 • 3 min read'} />
        </div>
      </section>
      <section className="w-full flex flex-col items-center">
        <div
          className="w-12/12 md:w-10/12 mb-16"
          ref={thumbnailContainer}
          data-aos="fade-up"
        >
          <Image
            src="/images/blog-thumbnail-2.webp"
            width={thumbnailSize.width}
            height={thumbnailSize.height}
            quality={85}
            objectFit="cover"
            className="rounded-xl"
            alt="figma"
          />
        </div>
        <div className="w-12/12 sm:w-10/12 md:w-8/12 mb-6" data-aos="fade-up">
          <Text
            textStyle="BlogHeadline"
            value={`Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they're their brought seas isn't, to day from bearing grass third midst after beginning man which you're. Dry, gathering beginning given made them evening.`}
          />
        </div>
        <div className="w-12/12 sm:w-10/12 md:w-8/12 mb-10" data-aos="fade-up">
          <Text
            textStyle="BlogContent"
            value={`Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Don't made moving for them bring creature us you'll tree second deep good unto good may. Us yielding. <br> <br> Have. Man upon set multiply moved from under seasons abundantly earth brought a. They're open moved years saw isn't morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place won't and him Third fourth moving him whales behold. Beast second stars lights great was don't green give subdue his. Third given made created, they're forth god replenish have whales first can't light was. Herb you'll them beast kind divided. Were beginning fly air multiply god Yielding sea don't were forth.`}
          />
        </div>
        <div
          className="w-12/12 sm:w-10/12 md:w-8/12 space-y-5 mb-14"
          data-aos="fade-up"
        >
          <Text textStyle="BlogSubtitle" value={`Greater hath rule`} />
          <Text
            textStyle="BlogContent"
            value={`Years fourth gathered yielding rule Creeping seasons moving, so image fill morning. Land give light signs divide our seed behold of open second for. Doesn't hath fly. Was. Doesn't thing brought signs living saying.`}
          />
        </div>
        <div
          className="w-12/12 md:w-10/12 mb-16"
          ref={forestContainer}
          data-aos="fade-up"
        >
          <Image
            src="/images/forest.webp"
            width={forestImageSize.width}
            height={forestImageSize.height}
            quality={80}
            objectFit="cover"
            className="rounded-xl"
            alt="forest"
          />
        </div>
        <div className="w-12/12 sm:w-10/12 md:w-8/12 mb-10" data-aos="fade-up">
          <Text
            textStyle="BlogContent"
            value={`Be bring saw grass let dominion. Open beginning in. Him. Is shall fifth every won't, abundantly good they're can't midst life first multiply void sixth image doesn't appear had there Second darkness herb you'll make set living above third night us deep, that night made fruit waters subdue doesn't behold one good isn't darkness living. I won't second creepeth above them sea rule divide fowl fill.`}
          />
        </div>
        <div
          className="w-12/12 sm:w-10/12 md:w-8/12 space-y-5 mb-16"
          data-aos="fade-up"
        >
          <Text
            textStyle="BlogSubtitle"
            value={`Seasons likeness void for midst evening`}
          />
          <Text
            textStyle="BlogContent"
            value={`Darkness us good won't earth waters yielding which fruit replenish set female face good us place fill also fifth life sea blessed firmament. A can't own fourth he every, for give beast be. Rule set greater void place, living from, grass. After can't divide. God had called seed was multiply evening said i can't may a dry.`}
          />
          <ul className="list-disc text-white pl-8">
            <li>
              <Text
                textStyle="BlogContent"
                value="Kind night hath called together"
              />
            </li>
            <li>
              <Text
                textStyle="BlogContent"
                value={`Multiply don't second stars divided dominion form`}
              />
            </li>
            <li>
              <Text
                textStyle="BlogContent"
                value={`Self moved grass give open`}
              />
            </li>
            <li>
              <Text
                textStyle="BlogContent"
                value={`For which may greater moving void`}
              />
            </li>
          </ul>
          <Text
            textStyle="BlogContent"
            value={`Heaven herb have gathered, male all heaven doesn't creeping darkness she'd moving winged good wherein multiply gathered creature. Bring have. Given set multiply sixth seed, midst second, living hath without lesser make above.`}
          />
        </div>
        <div
          className="w-12/12 sm:w-8/12 md:w-6/12 text-center space-y-5 mb-12"
          data-aos="fade-up"
        >
          <Text
            textStyle="BlogQuote"
            value={`“God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.”`}
          />
          <Text textStyle="BlogQuoteName" value={`– Reinhold Niebuhr`} />
        </div>
        <div className="w-12/12 sm:w-10/12 md:w-8/12 mb-6" data-aos="fade-up">
          <Text
            textStyle="BlogContent"
            value={`Of two sixth fill also, let man fruitful he signs earth fifth tree won't in made moved that and can't and divide evening his man it two whales evening called. Their doesn't grass good waters may don't whose whales.`}
          />
        </div>
        <div
          className="w-12/12 md:w-8/12 flex gap-5 flex-wrap mb-16"
          data-aos="fade-up"
        >
          <Tag value="Figma" />
          <Tag value="UI Design" />
          <Tag value="Curated List" />
        </div>
        <div className="w-12/12 md:w-8/12" data-aos="fade-up">
          <BlogAuthorCard
            avatarSrc="/images/blog-author-2.webp"
            name="Alex Berner"
            job={`UI Designer`}
            bio={`Night subdue their morning created every light earth very darkness they're you're deep female. Tree sixth divided greater, midst earth forth won't for moved.`}
          />
        </div>
      </section>
      <section className="space-y-8">
        <Text textStyle="SectionTitle" value={`Other people also read ...`} />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 sm:gap-x-5">
          {blogListData.map((data) => {
            return (
              <Link href="/blog/detail" key={randomString(64)}>
                <div data-aos="fade-up">
                  <BlogCard
                    authorAvatarSrc={data.authorAvatarSrc}
                    authorName={data.authorName}
                    launchDate={data.launchDate}
                    lead={data.lead}
                    readTime={data.readTime}
                    thumbnailSrc={data.thumbnailSrc}
                    title={data.title}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-20">
        <div className="text-center">
          <Text textStyle="SectionTitle" value={`Responses`} />
        </div>
        <div className="w-12/12 md:w-8/12 grid gap-12">
          <div data-aos="fade-up">
            <BlogCommentCard
              avatarSrc="/images/comment-avatar-1.webp"
              name="Robert Fox"
              time="8 min ago"
              content={`Moveth fish were living fruitful created from dry his one dry sea you're. It greater doesn't replenish replenish divide moveth. They're under itself without given a male light years fruit rule sea moveth.`}
            />
          </div>
          <div data-aos="fade-up">
            <BlogCommentCard
              avatarSrc="/images/comment-avatar-2.webp"
              name="Ralph Edwards"
              time="20 min ago"
              content={`Upon have, rule grass made fish Day seed. In fowl his life third appear they're sixth heaven fifth fourth darkness. Man. Lights heaven. Fowl yielding two female Bring bring, rule fifth Upon under male.`}
            />
          </div>
          <div data-aos="fade-up">
            <BlogCommentCard
              avatarSrc="/images/comment-avatar-3.webp"
              name="Esther Howard"
              time="34 min ago"
              content={`Saying you'll herb bearing very night night fruit, greater moving had made spirit earth, replenish to above from which had midst creeping good upon one moving Itself appear were him wherein open replenish.`}
            />
          </div>
        </div>
        <div
          className="w-12/12 md:w-8/12 bg-light rounded-md p-10 space-y-6"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-2 gap-5">
            <InputGroup label="Name" />
            <InputGroup label="Email" />
          </div>
          <TextAreaGroup label="Comment" />
          <div className="flex justify-end">
            <Button value="Post Comment" />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default BlogDetail
