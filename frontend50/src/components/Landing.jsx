import React from 'react'

const Landing = () => {
  return (
    <div className="border-b-[2px] pt-[100px] md:h-[600px] h-fit border-black max-w-screen mx-auto flex flex-col sm:flex-row justify-center">
      
      <div className="mx-auto my-[60px] max-w-fit">
         <h1 
         style={{
          "line-height": "82px",
         }}
         className="md:text-[60px] text-[55px] DMSerif font-bold sm:leading-[48px] max-w-[711px] w-[711px] text-center">
          Supercharge your frontend development skills</h1>

         <p className="my-[30px] text-[23px] font-[400]  md:max-w-[612px] mx-auto w-[612px] text-center">Level up your frontend development skills by recreating real websites from real companies and get rewarded in crypto.</p>

         {/* <p className="my-10px] text-[23px] font-[400]">The perfect type of practice for developers of all skill levels. Are you up for the challenge?</p>

         <div className="flex">
           <button className="mr-1 border-[2px] bg-white border-black hover:bg-black px-[15px] font-[600] duration-200 ease-in py-[10px] hover:text-white">
              View Projects
           </button> 

           <button className="ml-1 border-[2px] bg-transparent border-black hover:bg-black px-[15px] font-[600] duration-200 ease-in py-[10px] hover:text-white">
               Learn More
           </button>
         </div> */}
      </div>

      {/* <div className="mx-[30px] my-[60px] max-w-[600px]">
       <img 
       className="hidden sm:flex my-auto"
       src="https://www.frontendpractice.com/_next/image?url=%2Fproject-collage.png&w=3840&q=100"
       />
      </div> */}

    </div>
  )
}

export default Landing