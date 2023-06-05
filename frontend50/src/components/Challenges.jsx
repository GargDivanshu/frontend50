import React from 'react'

const Challenges = () => {
    return (
        <div className="border-b-[2px] pt-[100px] border-black max-w-screen mx-auto flex flex-col sm:flex-row justify-center">
          
          <div className="mx-auto my-[60px] max-w-fit">
            <div className="flex md:flex-row flex-col">
             <h1 
             style={{
              "line-height": "82px",
             }}
             className="text-[42px] md:w-[332px] DMSerif font-bold leading-9 sm:leading-[48px] max-w-[298px] w-[298px] text-left">
             Are any of these challenges familiar to you as a Frontend Developer?</h1>

    <div className=" max-w-[742px] w-[712px]">
        <div className="px-[40px] py-[60px] border-2 border-black bg-white m-auto mt-3 w-[610px] h-fit items-center text-[20px] font-[400] leading-[21.76px]">
    1.Don&apos;t have professional experience in frontend development <br/><br/>
    2.Don&apos;t have and are not sure how to make an impressive portfolio <br/><br/>
    3.Not sure what projects to build that can be mentioned on resume <br/><br/>
    4.Don&apos;t get answers from companies and faced multiple rejections<br/><br/>
    5.Don&apos;t know how to stand out from the crowd of frontend developers <br/><br/>
    </div>
    </div>
    </div>
             <p 
             style={{
              "line-height": "26.11px",
             }}
             className="my-[30px] italic text-[23px] font-[400] max-w-[640px] mx-auto w-[640px] text-center">If you&apos;ve got one of these problems it&apos;s time to fix the errors
you&apos;re making and land the frontend role you always wanted.</p>
    
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

export default Challenges