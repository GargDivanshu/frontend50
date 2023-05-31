import Image from "next/image";
import Landing from "./components/Landing";
import Info from "./components/Info";
import Stat from "./components/Stat";
import BuiltFor from "./components/BuiltFor";
import Journey from './components/Journey';
import Icons from './components/icons/Icons';
import Brand from './components/Brand';

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <Landing />

      <Info />

      <Stat />

      <div className="py-[142px] w-[924px] min-h-[500px] text-center mx-auto leading-[44px] text-3xl">
        We are changing the way today’s working professionals start their
        content creation journey to build their brand value and become an
        influencer with the power of collaboration
      </div>

      <BuiltFor />

      <Journey/>

      <Icons/>

      <Brand/>

      <div className="py-[142px] w-[924px] text-center mx-auto ">
       <div className="text-3xl font-[700] leading-[44px]">
       Become a part of the top 1%
       </div>
       
       <div className="font-[400]">
       Join the exclusive community of professionals from fortune 500 companies
to emerging startups who aspire to create an impact with the power of content creation
       </div>
      </div>

      <div className="-mt-12 relative bg-black pb-[220px] min-h-fit rounded-t-[3.5rem] flex ">
        
        <div className="absolute top-0 bottom-0 left-0 right-0 flex py-[4.5rem] w-4/5 mx-auto justify-between">
        </div>
      </div>


      <div className="bg-[#1A1719] -mt-12 relative pb-[120px] min-h-fit flex ">
      
      </div>


    </div>
  );
}
