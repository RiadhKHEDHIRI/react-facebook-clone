import React from 'react';
import StoryCard from "./StoryCard";

const stories = [
  {
    name: 'Barbara',
    src: 'https://unsplash.com/photos/MAIz2_TyNG8/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2MzUwOTI0MjQ&force=true&w=640',
    profile: 'https://unsplash.com/photos/MAIz2_TyNG8/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2MzUwOTI0MjQ&force=true&w=640',
  },
  {
    name: 'Steff',
    src: 'https://unsplash.com/photos/LBkeBfqv-3k/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2MzUwODk2MDg&force=true&w=640',
    profile: 'https://unsplash.com/photos/7QhFv0_OUj8/download?force=true&w=640',
  },
  {
    name: 'Alex',
    src: 'https://unsplash.com/photos/-Bww-MdEiCU/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2MzUwODk2MDg&force=true&w=640',
    profile: 'https://unsplash.com/photos/W-1lg1gtlGE/download?force=true&w=640',
  },
  {
    name: 'Paul',
    src: 'https://unsplash.com/photos/dafcO9Mka4k/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM1MDk1Nzg2&force=true&w=640',
    profile: 'https://unsplash.com/photos/Ly2bD64YY38/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2MzUwODk2MDg&force=true&w=640',
  },
  {
    name: 'Norah',
    src: 'https://unsplash.com/photos/3pon_PtzcVQ/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2MzUwODk4MzI&force=true&w=640',
    profile: 'https://unsplash.com/photos/zbNl9wvjMcU/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8dG93SlpGc2twR2d8fHx8fDJ8fDE2MzUwOTI4NzQ&force=true&w=640',
  },
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(story => {
        return <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
      })}
    </div>
  );
}

export default Stories;