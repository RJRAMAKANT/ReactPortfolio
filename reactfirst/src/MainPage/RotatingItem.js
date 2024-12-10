import React from 'react';
import './rotate.css'; // Ensure correct path to your CSS

function RotatingItem() {
  return (
    <div className="center sm:w-[50%] lg:w-[40%] mt-6 sm:mt-0 p-5   bg-Brightsun-400 rounded-full bg-opacity-50 hover:bg-opacity-100 transition-all duration-500 ease-in-out ">
      <img className="background-image pl-2" src="boy1.png" alt="Main Illustration" />
      
      {/* Rotating items */}
      <div className="item"><img className="h-14 w-14" src="java.png" alt="Java Logo" /></div>
      <div className="item"><img className="h-14 w-14" src="html5.png" alt="Java Logo" /></div>
      <div className="item"><img className="h-14 w-14" src="android.png" alt="Java Logo" /></div>
      <div className="item"><img className="h-14 w-14" src="reactjs.png" alt="Java Logo" /></div>
      <div className="item"><img className="h-14 w-14" src="javas.png" alt="Java Logo" /></div>
    </div>
  );
}

export default RotatingItem;
