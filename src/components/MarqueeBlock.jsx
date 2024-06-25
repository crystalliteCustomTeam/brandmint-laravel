// Next
import Image from 'next/image';
// Media
import Marquee from "react-fast-marquee";
import star from 'media/star.png'
import seostar from 'media/seostar.png'
import ppcstar from 'media/ppcstar.png'
import smmstar from 'media/smmstar.png'

export default function MarqueeBlock({
  theme,
  css
}) {
  return (
    <div className={`relative ${theme === "dark" ? "bg-black" : "bg-white"} mx-[-1rem]`}>
      <div className={`rotate-6 ${css}`}>
        <Marquee className="text-[50px]  bg-white border-2 border-[#707070]" autoFill="true" >
          <div className="flex items-center gap-5 ml-3">
            <span ><Image src={star} className="w-[42px] h-[42px]" /> </span> BRANDING
            <span ><Image src={seostar} className="w-[42px] h-[42px]" /> </span> SEO
            <span ><Image src={ppcstar} className="w-[42px] h-[42px]" /> </span> SMM
            <span ><Image src={smmstar} className="w-[42px] h-[42px]" /> </span> PPC
          </div>
        </Marquee>
      </div>
    </div>
  )
}
