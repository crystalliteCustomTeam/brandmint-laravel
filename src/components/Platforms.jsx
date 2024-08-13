import Image from "next/image";

import twitter from "media/platforms/twitter.png";
import tiktok from "media/platforms/tiktok.png";
import instagram from "media/platforms/instagram.png";
import facebook from "media/platforms/facebook.png";
import youtube from "media/platforms/youtube.png";

import one from "media/hurdles/1.png";
import two from "media/hurdles/2.png";
import three from "media/hurdles/3.png";
import four from "media/hurdles/4.png";
import five from "media/hurdles/5.png";
import six from "media/hurdles/6.png";
import loader from "media/loader.png";
import { RotateLogo } from "@/components";


export default function Platforms({
    subTitle = "Platform We Working With",
    title = `How Our Social Media <br class='hidden sm:block' />
                    Marketers Drive Business Outcomes?`,
    desc = `Let’s face it. Whether you are new to the business arena or have been running an enterprise for many years,
                    there are certain    you wish to have, ALWAYS!`,
    variant = "slider", images = [one,
        two,
        three,
        four,
        five,
        six] }) {
    return (
        <div className="xs:py-[50px] py-[90px] bg-[url('/bg-gradient.png')] bg-cover bg-center bg-no-repeat">
            <div className="container">
                {
                    variant == "slider" ? (
                        <>
                            <p className="relative mt-[20px] text-[24px] before:border-b-[6px] before:w-[90px] before:absolute before:-bottom-[3px] before:left-0 before:right-0 before:mx-auto before:border-[#EC4139] lg:text-[30px] inline-block border-b-[1px] border-[#707070] pb-[25px] font-medium">
                                {subTitle}
                            </p>
                            <div className="pt-[40px] flex flex-wrap justify-center xl:justify-between space-x-3 items-center gap-5 md:gap-8 xl:gap-5">
                                <div className="animate-bounce">
                                    <Image src={twitter} className="max-w-[40px] lg:max-w-[50px] xl:max-w-[70px]" alt="twitter" width={70} height={70} />
                                </div>
                                <div>
                                    <Image src={tiktok} className="max-w-[100px] lg:max-w-[150px] xl:max-w-[224px]" alt="tiktok" width={224} height={50} /></div>
                                <div>
                                    <Image src={instagram} className="max-w-[100px] lg:max-w-[150px] xl:max-w-[294px]" alt="instagram" />
                                </div>
                                <div>
                                    <Image src={facebook} className="max-w-[100px] lg:max-w-[150px] xl:max-w-[220px]" alt="facebook" />
                                </div>
                                <div>
                                    <Image src={youtube} className="max-w-[100px] lg:max-w-[150px] xl:max-w-[220px]" alt="youtube" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex justify-center items-center w-[250px] h-[250px] mx-auto relative">
                                <RotateLogo />
                                <svg version="1.1" id="Layer_1" x="0px" y="0px"
                                    viewBox="0 0 362 366" className="absolute">
                                    <g>
                                        <g>
                                            <path class="st1 fill-[#F0B501]" d="M267.8,121.5v92.3c0,7.2-2.9,13.7-7.6,18.4c-4.7,4.7-11.2,7.6-18.4,7.6c-14.4,0-26-11.7-26-26v-15.1
			c0-4.3-5.2-6.5-8.3-3.5L160,242.7l-18.7,18.7c-5.2,5.2-12.2,8.1-19.5,8.1c-24.8,0-36.9-30.1-19.1-47.4l66.7-64.4
			c3.1-3,1-8.4-3.4-8.4h-16.6c-7.3,0-13.9-3-18.7-7.7c-4.8-4.8-7.7-11.4-7.7-18.7c0-14.6,11.8-26.4,26.4-26.4h93.4
			C256.6,96.5,267.8,107.7,267.8,121.5z"/>
                                            <path class="st2 fill-[#3B7DED]" d="M267.8,121.5v92.3c0,7.2-2.9,13.7-7.6,18.4c-4.7,4.7-11.2,7.6-18.4,7.6c-14.4,0-26-11.7-26-26v-15.1
			c0-4.3-5.2-6.5-8.3-3.5L160,242.7l-18.7,18.7c-5.2,5.2-12.2,8.1-19.5,8.1c-7.9,0-14.5-3.1-19.3-7.8c-10.2-10.1-12-27.8,0.2-39.5
			l54.4-52.5h32.5V143h52.1V96.6h1.1c11.1,0,20.5,7.2,23.7,17.2C267.4,116.2,267.8,118.8,267.8,121.5z"/>
                                            <path class="st3 opacity-[0.2]" d="M267.8,121.5v28.5l-52.1,48.7c0-4.3-5.2-6.5-8.3-3.5L160,242.7l-18.7,18.7c-5.2,5.2-12.2,8.1-19.5,8.1
			c-7.9,0-14.5-3.1-19.3-7.8c-3.5-9.5-1.9-20.9,6.8-29.2l65.1-62.9l1.6-1.5l13.6-13l12.8-12.2l37.9-36h9.1c6.7,0,12.7,2.6,17.2,6.9
			C267.4,116.2,267.8,118.8,267.8,121.5z"/>
                                            <path class="st4 fill-[#E43E2B]" d="M242.8,96.5h-9.1l-64.3,61.2l-66.7,64.4c-17.8,17.2-5.6,47.4,19.1,47.4c7.3,0,14.3-2.9,19.5-8.1l18.7-18.7
			l47.4-47.4l60.4-56.8v-17C267.8,107.7,256.6,96.5,242.8,96.5z"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </>
                    )
                }

                <h2 className="mt-[40px] text-center text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] mb-[22px] font-semibold" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-center max-w-[850px] mx-auto">
                    {desc}
                </p>

                <div className="pt-[35px] flex flex-wrap justify-center items-center gap-5">
                    {
                        images.map((name, i) => (
                            <div key={i} className="hover:rotate-3 transition-all ease-in-out duration-300">
                                <Image src={name} className="" alt={name} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>

    )
}
