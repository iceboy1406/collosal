import Button from 'components/atoms/Button'
import LineDivider from 'components/atoms/LineDivider'
import BlogCard, { BlogCardProps } from 'components/molecules/Card/BlogCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Link from 'next/link'
import React from 'react'
import randomString from 'utils/randomString'

const Blog = () => {
  const blogListData: BlogCardProps[] = [
    {
      authorAvatarSrc: '/images/blog-author-1.webp',
      authorName: 'Jane Cooper',
      launchDate: 'Mar 18',
      lead: 'People have been using wrong SEO techniques on their websites.',
      readTime: '5 min',
      thumbnailSrc: '/images/blog-thumbnail-1.webp',
      title: 'SEO tricks that can increase the traffic of your website',
    },
    {
      authorAvatarSrc: '/images/blog-author-2.webp',
      authorName: 'Alex Berner',
      launchDate: 'Mar 11',
      lead: 'All these plugins are free and you can use them forever',
      readTime: '3 min',
      thumbnailSrc: '/images/blog-thumbnail-2.webp',
      title: '10 Figma Plugins that will increase your productivity',
    },
    {
      authorAvatarSrc: '/images/blog-author-3.webp',
      authorName: 'Anne Grane',
      launchDate: 'Mar 10',
      lead: 'Step by step setting up the server and deploying the application',
      readTime: '20 min',
      thumbnailSrc: '/images/blog-thumbnail-3.webp',
      title: 'How to deploy a Node JS application to a VPS',
    },
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
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-uo">
          <PageSentence
            badge="BLOG"
            title="Get precise knowledge wherever you are"
          />
        </div> 
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
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
        <div className="">
          <Button value='Load More' color='white' style='light' />
        </div>
      </section>
    </PageTemplate>
  )
}

export default Blog
