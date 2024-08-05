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

export default function Platforms( {
    subTitle="Platform We Working With",
    title=`How Our Social Media <br className='hidden sm:block' />
                    Marketers Drive Business Outcomes?`,
    desc=`Let’s face it. Whether you are new to the business arena or have been running an enterprise for many years,
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
                        <div className="flex justify-center items-center animate-[spin_8s_ease-in_infinite]">
                            <Image  src={loader} alt="seo-comapnay" width={150} height={150}/>
                            <p></p>
                        </div> 
                        </>
                    )
                }

                <h2 className="mt-[40px] text-center text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] mb-[22px] font-semibold" dangerouslySetInnerHTML={{__html:title}} />
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
