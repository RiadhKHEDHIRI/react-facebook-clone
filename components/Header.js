import React from 'react';
import {SearchIcon, FlagIcon, PlayIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import {HomeIcon, UserGroupIcon, ViewGridIcon, ChatIcon, BellIcon, ChevronDownIcon} from "@heroicons/react/solid";
import {signOut, useSession} from "next-auth/client";
import Image from "next/image";

function Header() {
  const [session] = useSession();

  return (
    <div className="flex items-center p-2 top-0 z-50 bg-white sticky lg:px-5 shadow-md">
      <div className="flex items-center">
        <svg className="text-blue-500 h-14" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 30 30"
             style={{fill: 'currentColor'}}>
          <path
            d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/>
        </svg>
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-500"/>
          <input
            className="hidden lg:inline-flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search"/>
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 lg:space-x-2">
          <HeaderIcon active Icon={HomeIcon}/>
          <HeaderIcon Icon={FlagIcon}/>
          <HeaderIcon Icon={PlayIcon}/>
          <HeaderIcon Icon={ShoppingCartIcon}/>
          <HeaderIcon Icon={UserGroupIcon}/>
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <Image onClick={signOut} className="rounded-full cursor-pointer" src={session.user.image} width={40} height={40}
               layout={"fixed"} alt="Profile Photo"/>
        <p className="font-semibold pr-3 whitespace-nowrap">{session.user.name}</p>
        <ViewGridIcon className="icon"/>
        <ChatIcon className="icon"/>
        <BellIcon className="icon"/>
        <ChevronDownIcon className="icon"/>
      </div>
    </div>
  );
}

export default Header;