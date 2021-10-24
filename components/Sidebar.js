import React from 'react';
import {useSession} from "next-auth/client";
import {ShoppingBagIcon} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import {ChevronDownIcon, DesktopComputerIcon, ClockIcon, UsersIcon, UserGroupIcon, CalendarIcon} from "@heroicons/react/solid";

function Sidebar() {
  const [session] = useSession();

  return (
    <div className="p-2 max-w-md xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name}/>
      <SidebarRow Icon={UsersIcon} title="Friends"/>
      <SidebarRow Icon={UserGroupIcon} title="Groups"/>
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"/>
      <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
      <SidebarRow Icon={CalendarIcon} title="Events"/>
      <SidebarRow Icon={ClockIcon} title="Memories"/>
      <SidebarRow Icon={ChevronDownIcon} title="See more"/>
    </div>
  );
}

export default Sidebar;