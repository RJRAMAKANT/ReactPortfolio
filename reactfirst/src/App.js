import logo from './logo.svg';
import './App.css';
import Header1 from './Header/Header1';
import MainPages from './MainPage/MainPages';
import ContactMe from './MainPage/ContactMe';
import { IconBrandLinkedinFilled, IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandYoutubeFilled, IconBrandXFilled } from '@tabler/icons-react';
import AboutMe from './MainPage/AboutMe';
import React, { useState, useEffect } from 'react';
import Loaders from './MainPage/Loaders';
import Experience from './MainPage/Expeience';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or initial setup
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loader for 3 seconds (or until data is fetched)

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loaders className='h-full w-full' />;  // Show loader while content is loading
  }
  
  return (

    <div className="relative min-h-screen bg-slate-200 dark:bg-gray-900 area">
        {/* <div className='position fixed top-[35%] right-0  flex flex-col gap-10'> 
          <a href=''><div><IconBrandLinkedinFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" /><span className='hidden'>Linked in</span></div></a>
          <a href=''><IconBrandGithubFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" /></a>
          <a href=''><IconBrandInstagramFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" /></a>
          <a href=''><IconBrandYoutubeFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" /></a>
          <a href=''><IconBrandXFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" /></a>

        </div> */}
        	<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

      <MainPages/>
      <AboutMe/>
      <Experience/>
      <ContactMe/>
     
      <div className='text-center text-gray-900 mt-10 dark:text-Brightsun-400  font-bold'>Copyright ©2024 All rights reserved | This Portfolio is made by @RJ RAMAKANT</div>
    </div>
  );
}

export default App;

