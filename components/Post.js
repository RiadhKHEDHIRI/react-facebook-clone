import React from 'react';
import Image from "next/image";
import {ChatIcon, ShareIcon, ThumbUpIcon} from "@heroicons/react/outline";

function Post({name, image, message, postImage, timestamp}) {
  return (
    <div className="flex flex-col bg-white rounded-t-2xl rounded-b-2xl shadow-md">
      <div className="">
        <div className="p-5 bg-white rounded-t-2xl">
          <div className="flex items-center space-x-2">
            <Image className="rounded-full" layout="fixed" src={image} height={40} width={40} alt={name}/>
            <div>
              <p className="font-medium">{name}</p>
              {timestamp ? (
                <p className="text-xs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
              ) : (
                <p className="text-xs text-gray-400">&nbsp;</p>
              )}
            </div>
          </div>
          <p className="pt-4">{message}</p>
        </div>
        {postImage && (
          <div className="h-56 md:h-96 relative">
            <Image className="" src={postImage} objectFit="cover" layout="fill" alt={timestamp}/>
          </div>
        )}

        <div className="flex justify-between items-center rounded-b-2xl text-gray-400 border-t mt-4">
          <div className="inputIcon rounded-none rounded-bl-2xl">
            <ThumbUpIcon className="h-4"/>
            <p className="text-xs sm:text-base">Like</p>
          </div>
          <div className="inputIcon rounded-none">
            <ChatIcon className="h-4"/>
            <p className="text-xs sm:text-base">Comment</p>
          </div>
          <div className="inputIcon rounded-none rounded-br-2xl">
            <ShareIcon className="h-4"/>
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;