import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { OPENSSL_VERSION_NUMBER } from "constants";

import React, { useState } from "react";

function TweetBox() {
  const [input, setInput] = useState("");
  return (
    <div className="flex space-x-2 p-5">
      <img
        src="https://links.papareact.com/gll"
        className="mt-4 h-14 w-14 object-cover rounded-full"
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            type="text"
            placeholder="What's happening?"
            className="h-24 w-full text-lg outline-none placeholder:text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon className="w-5 h-5 cursor-pointer transaction-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="w-5 h-5" />
              <EmojiHappyIcon className="w-5 h-5" />
              <CalendarIcon className="w-5 h-5" />
              <LocationMarkerIcon className="w-5 h-5" />
            </div>
            <button
              disabled={!input}
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white
              disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
