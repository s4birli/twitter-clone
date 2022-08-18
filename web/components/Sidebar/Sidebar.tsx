import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkAltIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
} from "@heroicons/react/outline"
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
        <img className="m-3 h-10 w-10" src="/assets/img/logo-twitter-icon.png" alt="" />
        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={HashtagIcon} title="Explore" />
        <SidebarRow Icon={BellIcon} title="Notifications" />
        <SidebarRow Icon={MailIcon} title="Message" />
        <SidebarRow Icon={BookmarkAltIcon} title="Bookmark" />
        <SidebarRow Icon={CollectionIcon} title="List" />
        <SidebarRow Icon={UserIcon} title="Sign In" />
        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar