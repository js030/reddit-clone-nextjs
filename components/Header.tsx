import Image from 'next/image'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
  BeakerIcon,
  ChatIcon,
  ChevronDownIcon,
  GlobeIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
  SparklesIcon,
  VideoCameraIcon,
} from '@heroicons/react/solid'
import {
  BellIcon,
  PlusIcon,
  SpeakerphoneIcon,
  StarIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'

function Header() {
  const { data: session } = useSession()

  return (
    <div className="sticky top-0 z-50 flex items-center bg-white px-5 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            objectFit="contain"
            src="https://links.papareact.com/fqy"
            layout="fill"
          />
        </Link>
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px] ">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex flex-1 items-center rounded-full border-gray-200 bg-gray-100 p-3">
        <input
          type="text"
          className="flex-1 rounded-full bg-transparent outline-none"
          placeholder="Search raddit"
        />
        <button type="submit" className="hidden" />
        <SearchIcon className="h-6 w-6 text-gray-400" />
      </form>

      <div className="flex hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />

        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>

      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden flex-shrink-0 items-center border border-gray-100 lg:flex"
        >
          <div className="flex items-center space-x-3">
            <div>
              <img
                src="https://links.papareact.com/23l"
                className="h-5 w-5 object-cover"
                alt=""
              />
            </div>

            <div className="flex flex-1 flex-col items-start text-xs">
              <p className="truncate">{session?.user?.name}</p>
              <p>1 Karma</p>
              <p>Sign Out</p>
            </div>
            <ChevronDownIcon className="h-5 w-5" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden flex-shrink-0 items-center border border-gray-100 lg:flex"
        >
          <div>
            <img
              src="https://links.papareact.com/23l"
              className="h-5 w-5 object-cover"
              alt=""
            />
          </div>
          <p>Sign In</p>
        </div>
      )}
    </div>
  )
}

export default Header
