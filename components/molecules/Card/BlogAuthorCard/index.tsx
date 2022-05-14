import Text from 'components/atoms/Text'
import Image from 'next/image'
import React from 'react'
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'
interface BlogAuthorCardProps {
  avatarSrc: string
  name: string
  job: string
  bio: string
}
const BlogAuthorCard = ({ avatarSrc, bio, job, name }: BlogAuthorCardProps) => {
  return (
    <div className="w-full rounded-md bg-light p-6 flex flex-col gap-5 md:flex-row lg:gap-10">
      <div className="">
        <div className="relative w-[100px] h-[100px]">
          <Image src={avatarSrc} layout="fill" objectFit="cover" alt='Author Avatar' />
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
          <div className="space-y-1.5">
            <Text textStyle="AuthorName" value={name} />
            <Text textStyle="AuthorJob" value={job} />
          </div>
          <div className="flex gap-2.5">
            <a href="https://twitter.com/" target={'_blank'} rel="noreferrer">
              <div className="bg-light p-2.5 rounded-full text-xl text-white">
                <FiTwitter />
              </div>
            </a>
            <a href="https://www.facebook.com/" target={'_blank'} rel="noreferrer">
              <div className="bg-light p-2.5 rounded-full text-xl text-white">
                <FiFacebook />
              </div>
            </a>
            <a href="https://www.linkedin.com/" target={'_blank'} rel="noreferrer">
              <div className="bg-light p-2.5 rounded-full text-xl text-white">
                <FiLinkedin />
              </div>
            </a>
          </div>
        </div>
        <Text textStyle="AuthorBio" value={bio} />
      </div>
    </div>
  )
}

export default BlogAuthorCard
