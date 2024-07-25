import React from 'react';
import Video1 from "./assets/video1.mp4"
import Video2 from "./assets/video2.mp4"


const HereSection = () => {
  return (
    <div>
        <div className='max-w-7xl mx-auto pt-20 px-6'></div>
        <div className='flex flex-col items-center mt-6 lg:mt-20'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                VirtualR build tools
                <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>for developers</span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immersive reality!
            </p>
            <div className='flex justify-center my-10'>
                <a href="" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>Start for free</a>
                <a href="#" className='py-3 px-4 mx-3 rounded-md border'>Documentation</a>
            </div>
            <div className='flex mt-10 justify-center'>
                <video className='rounded-md w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4'
                    src={Video1}
                    autoPlay
                    loop
                    muted>
                    Your Browser does not support the video tag
                </video>
                <video className='rounded-md w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4'
                    src={Video2}
                    autoPlay
                    loop
                    muted>
                    Your Browser does not support the video tag
                </video>
            </div>
        </div>
    </div>
  )
}

export default HereSection