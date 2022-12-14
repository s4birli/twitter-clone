import React from "react";
import { SidebarRowProps } from "./SidebarRow.types";

function SidebarRow({ Icon, title }: SidebarRowProps) {
  return (
    <div className="flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 group">
      <Icon className="h-6 w-6" />
      <p className="hidden md:inline-flex group-hover:text-twitter text-base font-light lg:text-lg transition-all duration-200">
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
