import React from 'react'
import { TweetProps } from "./Tweet.types";
import TimeAgo from "react-timeago"
import { ChatAlt2Icon, HeartIcon, SwitchHorizontalIcon, UploadIcon } from '@heroicons/react/outline';

function Tweet( {tweet} : TweetProps) {
  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
        <div className="flex space-x-3">
            <img className="h-10 w-10 rounded-full object-cover" src={tweet.profileImg} alt={tweet.username} />
            <div>
                <div className="flex items-center space-x-1">
                    <p className="mr-1 font-bold">{tweet.username}</p>
                    <p className="hidden text-sm text-gray-500 sm:inline">
                        @{tweet.username.replace(/\s+/g, "").toLowerCase()} .
                    </p>
                    <TimeAgo className="text-sm text-gray-500" date={tweet.createdAt} />
                </div>   
                <p className="pt-1">{tweet.text}</p> 

                <img className="m-5 ml-0 mb-1 max-h-100 rounded-lg object-cover shadow-sm" src={tweet.image} alt={tweet.username} />           
            </div>
        </div>
        <div className="flex justify-between mt-5">
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
                <ChatAlt2Icon className="h-5 w-5" />
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
                <SwitchHorizontalIcon className="h-5 w-5" />
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
                <HeartIcon className="h-5 w-5" />
            </div>
            <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
                <UploadIcon className="h-5 w-5" />
            </div>
        </div>
    </div>
  )
}

export default Tweet