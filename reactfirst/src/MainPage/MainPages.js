
import Header1 from "../Header/Header1";
import Typewriter from 'typewriter-effect';
import { IconBrandLinkedinFilled, IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandYoutubeFilled, IconBrandXFilled ,IconDownload} from '@tabler/icons-react';
import Header2 from "../Header/Header2";
import RotatingItem from "./RotatingItem";
function MainPages() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center relative">
            {/* Header Section */}
            <div className="absolute top-0 left-0">
                {/* <Header1 /> */}
                <Header2 />
            </div>

            {/* Main Content */}
            <div className="flex items-center justify-center flex-wrap px-6 py-10 sm:px-12 lg:px-24 w-full  " >
                {/* Text Section */}
                <div className="text-gray-900 dark:text-gray-300 font-mono font-semibold flex flex-col justify-center items-center w-full sm:w-[80%] lg:w-[60%] text-center sm:text-left">
                    <div className="text-xl sm:text-xl lg:text-3xl mb-2">
                        Hello! I am Ramakanta Gahan
                    </div>
                    <div className="text-xl sm:text-xl lg:text-3xl mb-4">
                        and I am a FullStack Software Developer.
                    </div>

                    {/* Typewriter Section */}
                    <div className="text-3xl text-Brightsun-400 sm:text-3xl lg:text-5xl mb-6">
                        <Typewriter
                            options={{
                                strings: ['I Code Cool Websites', 'I Develop Mobile Applications', 'I Develop Desktop Apps' , 'WordPress Developer', 'Compitetive Programmer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    <div className="flex gap-10 p-5">
                    <a href="Ramakanta Gahan Exp Res.pdf" download class="w-50 rounded-md p-3 animate-bounce focus:animate-none hover:animate-none    border border-Brightsun-400 backdrop-blur-md hover:bg-Brightsun-500 transition-all duration-500 ease-in-out hover:cursor-pointer flex items-center space-x-2">
 
                    <IconDownload stroke={2.0} class="w-5 h-5 text-black dark:text-white" />

                     <span class="text-black dark:text-white">Download CV</span>
                      </a>
                        <div className="w-30 rounded-md p-3 border animate-bounce focus:animate-none hover:animate-none border-Brightsun-400 backdrop-blur-md  hover:bg-Brightsun-500 transition-all duration-500 ease-in-out  hover:cursor-pointer"><a href="#">Let's Connect</a></div>

                    </div>

                    <div className="flex gap-8 p-5 mt-3 flex-wrap justify-center sm:gap-10 md:gap-20">
                        {/* <IconBrandLinkedinFilled  className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:scale-110 hover:rotate-12 hover:translate-y-3 hover:transition-all hover:duration-300 ease-in-out" />
                      <IconBrandGithubFilled  className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:scale-110 hover:rotate-12 hover:translate-y-3 hover:transition-all hover:duration-300 ease-in-out" />
                      <IconBrandInstagramFilled  className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:scale-110 hover:rotate-12 hover:translate-y-3 hover:transition-all hover:duration-300 ease-in-out" />
                      <IconBrandYoutubeFilled  className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:scale-110 hover:rotate-12 hover:translate-y-3 hover:transition-all hover:duration-300 ease-in-out" /> */}
                        <IconBrandLinkedinFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" />
                        <IconBrandGithubFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" />
                        <IconBrandInstagramFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" />
                        <IconBrandYoutubeFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" />
                        <IconBrandXFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" />
                    </div>
                </div>
                {/* Image Section */}
                {/* <div className="flex container items-center relative justify-center sm:items-start lg:items-end w-full sm:w-[50%] lg:w-[40%] mt-6 sm:mt-0 p-5   bg-Brightsun-400 rounded-full bg-opacity-50 hover:bg-opacity-100 transition-all duration-500 ease-in-out ">
                    <img className="w-full max-w-[600px] h-auto" src="boy1.png" alt="Illustration" />

                    <div className="absolute rotate-images  p-5 dark:bg-gray-800 top-0 left-5 bg-slate-300 rounded-full  border-spacing-5"><img className="h-12 w-12" src="java.png" /></div>
                    <div className="absolute rotate-images  p-5 dark:bg-gray-800 top-0 right-0 bg-slate-300 rounded-full  border-spacing-5"><img className="h-12 w-12" src="java.png" /></div>
                    <div className="absolute rotate-images  p-5 dark:bg-gray-800 right-0 bottom-0 bg-slate-300 rounded-full  border-spacing-5"><img className="h-12 w-12" src="java.png" /></div>
                    <div className="absolute  rotate-images p-5 dark:bg-gray-800 bottom-0 left-5 bg-slate-300 rounded-full  border-spacing-5"><img className="h-12 w-12" src="java.png" /></div>
               
               
               
                </div> */}
                <RotatingItem className="" />
            </div>
        </div>
    );
}

export default MainPages;
