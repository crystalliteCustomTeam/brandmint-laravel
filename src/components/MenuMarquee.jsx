// Next
import Image from 'next/image';
// Media
import Marquee from "react-fast-marquee";
import star from 'media/star.png'
import seostar from 'media/seostar.png'
import ppcstar from 'media/ppcstar.png'
import smmstar from 'media/smmstar.png'

export default function MenuMarquee({
  theme,
  css
}) {
  return (
    <div >
      <div >
        <Marquee className="text-[20px]  bg-white border-[1px] border-[#e0e0e0] p-2" autoFill="true" >
          <div className="flex items-center gap-5 ml-3">
            <span ><Image src={star} alt='Branding' className="w-[22px] h-[22px]" /> </span> BRANDING
            <span ><Image src={seostar} alt='SEO' className="w-[22px] h-[22px]" /> </span> SEO
            <span ><Image src={ppcstar} alt='SMM' className="w-[22px] h-[22px]" /> </span> SMM
            <span ><Image src={smmstar} alt='PPC' className="w-[22px] h-[22px]" /> </span> PPC
          </div>
        </Marquee>
      </div>
    </div>
  )
}
