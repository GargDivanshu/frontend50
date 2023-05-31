"use client"

import React from 'react'
import Instagram from './Instagram';
import Linkedin from './Linkedin';
import Telegram from './Telegram';
import TikTok from './TikTok';
import Twitter from './Twitter';
import Youtube from './Youtube';
import Discord from './Discord';
import  Image  from 'next/image';

const Icons = () => {
  return (
    <div className="-mt-12 relative bg-black pb-[220px] min-h-fit rounded-[3.5rem] flex ">
        
        <div className="absolute top-0 bottom-0 left-0 right-0 flex py-[4.5rem] w-4/5 mx-auto justify-between">
       

<Image 
        src="/linkedin.png"
        height={80}
        width={80}
        alt="Linkedin"
        />

<Image 
        src="/youtube.png"
        height={80}
        width={80}
        alt="Youtube"
        />

<Image 
        src="/instagram.png"
        height={80}
        width={80}
        alt="Instagram"
        />


<Image 
        src="/tik-tok.png"
        height={80}
        width={80}
        alt="tik-tok"
        />

<Image 
        src="/telegram.png"
        height={80}
        width={80}
        alt="Telegram"
        />

<Image 
        src="/twitter.png"
        height={80}
        width={80}
        alt="Twitter"
        />

<Image 
        src="/discord.png"
        height={80}
        width={80}
        alt="discord"
        />

</div>
        {/* <Twitter/>
        <Youtube/> */}
        {/* <Discord/> */}
    </div>
  )
}

export default Icons