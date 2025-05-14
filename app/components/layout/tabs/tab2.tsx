'use client';

import React, { useState, useEffect } from 'react';
import ResponsiveSlider from './responsivetabs/responsive'

const tabs = [
  {
    title: 'Passenger vehicles',
    subTitle: 'Revving up innovation from interior to exterior.',
    thumbnails: [
      { icon: '/images/tabs/tab1/thumbnail1.png', video: '/images/tabs/tab1/video1.mp4' },
      { icon: '/images/tabs/tab1/thumbnail2.png', video: '/images/tabs/tab1/video2.mp4' },
      { icon: '/images/tabs/tab1/thumbnail3.png', video: '/images/tabs/tab1/video3.mp4' },
    ],
  },
  {
    title: 'Commercial vehicles',
    subTitle: 'Advancing engineering for heavy-duty vehicles.',
    thumbnails: [
      { icon: '/images/tabs/tab2/thumbnail1.png', video: '/images/tabs/tab2/video1.mp4' },
      { icon: '/images/tabs/tab2/thumbnail2.png', video: '/images/tabs/tab2/video2.mp4' },
    ],
  },
];

function NestedTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

const currentTab = tabs[activeTabIndex];
const currentThumb = currentTab.thumbnails[activeThumbIndex] || currentTab.thumbnails[0];
const currentVideo = currentThumb?.video;

 
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveThumbIndex((prev) => (prev + 1) % currentTab.thumbnails.length);
    }, 7000); 

    return () => clearInterval(interval);
  }, [activeTabIndex, isPlaying, currentTab.thumbnails.length]);


  useEffect(() => {
    setActiveThumbIndex(0);
  }, [activeTabIndex]);

    useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight+150;
      const index = Math.floor(scrollPosition / sectionHeight);
      if (index >= 0 && index < tabs.length) {
        setActiveTabIndex(index);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" flex flex-col w-full justify-center items-center  bg-black text-white ">
     
         <h2 className='md:text-5xl text-2xl pb-10 pt-24 text-white text-center font-light w-[70%]'>Evolving the drive with <strong>360-degree </strong>
 comprehensive solutions</h2>

       <div className="w-full hidden  md:flex md:flex-row flex-col bg-black p-4 md:px-30 sm:px-2">


   <div className="flex md:flex-col sm:flex-row md:w-[33.33%] w-screen justify-center  ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`py-10 text-start px-4 transition  ${
              index === activeTabIndex ? 'border-s-2 md:ps-13 ps-4 border-white text-white' : 'text-gray-600 border-s-2 ps-13 border-gray'
            }`}
          >
            <h2 className="text-3xl pt-2">{tab.title}</h2>
            <p className="text-lg font-light">{tab.subTitle}</p>
          </button>
        ))}
      </div>

     
      <div className="flex-1 relative w-[65%] flex flex-col justify-center items-center">
        <video
          key={currentVideo}
          src={currentVideo}
          className="w-full  h-[500px] object-contain"
          autoPlay
          muted
          
          playsInline
        />

       
        <div className="absolute bottom-0 flex gap-4 items-center">
          {currentTab.thumbnails.map((thumb, idx) => (
            <button
              key={idx}
              onClick={() => setActiveThumbIndex(idx)}
              className={`w-20 h-15 opacity-40 ${
                idx === activeThumbIndex ? 'opacity-100' : 'border-gray-500'
              } rounded overflow-hidden`}
            >
              <img src={thumb.icon} className="w-full h-full object-contain" />
            </button>
          ))}
        </div>

        
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-6 right-6 border border-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>
      </div>

       </div>
   

   <div  className='bg-black w-screen overflow-hidden sm:hidden block'>
<ResponsiveSlider tabs={tabs} />
   </div>
    </div>
  );
}

export default NestedTabs;
