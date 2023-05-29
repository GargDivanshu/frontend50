import React from 'react'

const GetStarted = () => {
  return (
    <div>
        <div className="text-5xl DMSerif font-bold text-center py-[65px] border-y-[2px] border-black">
            Get Access to unique frontend challenges
        </div>

        <div className="bg-white flex flex-col">
          <div className="items-center justify-center text-center max-w-[650px] w-[650px] px-8 h-fit m-auto mt-[110px]">
          Build something amazing that makes you stand out and showcase your
skills by building inspirations that help you understand design, master new
tools and methods alongside discovering the best development practices
and feel confident in both small & large-scale projects.
          </div>

          <div className="items-center justify-center text-center my-[35px]">
          Ready to supercharge your frontend development skills?
          </div>

         <button className="px-[15px] mb-[130px] font-[600] w-fit mx-auto duration-200 ease-in py-[10px] border-[2px] border-black bg-white text-black hover:text-white hover:bg-black">
          Get Started
         </button>

        </div>
        
    </div>
  )
}

export default GetStarted