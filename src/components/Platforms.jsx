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

export default function Platforms() {
    return (
        <div className="container">
            <p className="relative mt-[20px] text-[24px] before:border-b-[6px] before:w-[90px] before:absolute before:-bottom-[3px] before:left-0 before:right-0 before:mx-auto before:border-[#EC4139] lg:text-[30px] inline-block border-b-[1px] border-[#707070] pb-[25px] font-medium">
                Platform We Working With
            </p>
            <div className="pt-[40px] flex flex-wrap justify-center xl:justify-between space-x-3 items-center gap-5 md:gap-8 xl:gap-5">
                <div>
                    <Image src={twitter} className="max-w-[40px] lg:max-w-[50px] xl:max-w-[70px]" alt="twitter" width={70} height={70}/>
                </div>
                <div>
                    <Image src={tiktok} className="max-w-[100px] lg:max-w-[150px] xl:max-w-[224px]" alt="tiktok" width={224} height={50}/></div>
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
            <h2 className="mt-[40px] text-center text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] mb-[22px] font-medium">
                Enter The Digital Era Now, <br class='hidden sm:block' />
                Else Wait For Miracle To Happen!
            </h2>
            <p className="text-center max-w-[850px] mx-auto">
                Let’s face it. Whether you are new to the business arena or have been running an enterprise for many years,
                there are certain    you wish to have, ALWAYS!
            </p>
            
            <div className="pt-[35px] flex flex-wrap justify-center items-center gap-5">
            {
                [
                    one,
                    two,
                    three,
                    four,
                    five,
                    six

                ].map((name,i)=>(
                    <div key={i}  className="hover:rotate-3 transition-all ease-in-out duration-300">
                        <Image src={name}  className="" alt={name} />
                    </div>
                ))
            }
                
            </div>
        </div>
    )
}
