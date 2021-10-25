import React from 'react';
import {DotsHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {SearchIcon} from "@heroicons/react/outline";
import Contact from "./Contact";

const contacts = [
  {
    name: 'Alice',
    src: 'https://unsplash.com/photos/elQN-4ym_mA/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2MzUxMjU0MjY&force=true&w=640'
  },
  {
    name: 'Thomas',
    src: 'https://unsplash.com/photos/QuwQYDBI6sI/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2MzUxMjU0MjY&force=true&w=640'
  },
  {
    name: 'Anna',
    src: 'https://unsplash.com/photos/lm1nUOKmvdY/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2MzUxMjU0MjY&force=true&w=640'
  },
  {
    name: 'Fatima',
    src: 'https://unsplash.com/photos/pJTLMcbwv9w/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2MzUxMjQ2OTc&force=true&w=640'
  },
  {
    name: 'Rania',
    src: 'https://unsplash.com/photos/BKbwOaTCSUM/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2MzUxMjQ2OTc&force=true&w=640'
  },
]

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6"/>
          <SearchIcon className="h-6"/>
          <DotsHorizontalIcon className="h-6"/>
        </div>
      </div>

      {
        contacts.map(contact => (
          <Contact key={contact.src} src={contact.src} name={contact.name} />
        ))
      }
    </div>

  );
}

export default Widgets;