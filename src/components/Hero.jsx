// Next
import Image from 'next/image'
// Media
import usaflag from 'media/usa_flag.png'
import ukflag from 'media/uk_flag.png'
// Components
import { CTA, MarqueeBlock, Input, Label, Button, RotateLogo, BlurFade, BoxReveal, FadeText } from '@/components'


export default function Hero({
    subTitle,
    title,
    desc,
    titleCss = "xs:text-[30px] text-[45px] md:text-[35px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]",
    theme = "light",
    marqueeTheme = "dark",
    flag = "usa",
    bg,
    spaceBottom = "pb-[70px] lg:pb-[130px]",
    img,
    imgCss = "",
    marqueeCss = "py-[80px]",
    gridleft = "col-span-12 lg:col-span-6",
    gridright = "col-span-12 md:col-span-6",
    form = false,
    ctaText = "Get in Touch!",
    headerlogo = false
}) {
    return (
        <section>
            <div className="overflow-hidden pt-[100px]">
                <div className="relative ">
                    {bg && <Image src={bg} alt="SEO company" fill className="-z-10 opacity-10 lg:opacity-100 object-cover lg:object-fill object-right-bottom" />}
                    <div className="container relative">
                        <div className={`grid grid-cols-12 gap-5 items-center ${spaceBottom}`}>
                            <div className={` ${gridleft} `}>

                                <BlurFade delay={0.1} duration={1} inView={true} >
                                    <div className="flex gap-2 items-center">
                                        <Image src={flag === "usa" ? usaflag : ukflag} alt="SEO company" className="w-[40px] h-[40px]" />
                                        {subTitle && <p className={`lg:text-[16px] xs:text-[12px] sm:text-[14px] ${theme === "light" ? "text-black" : "text-white"}`}>
                                            {subTitle}
                                        </p>}
                                    </div>
                                </BlurFade>

                                <div className={`mt-5 ${theme === "light" ? "text-black" : "text-white"}`}>

                                    {title &&
                                        <FadeText text={title} direction='left' className={`leading-tight font-semibold  ${titleCss}`} />
                                    }



                                    {desc &&
                                        <FadeText text={desc} direction='left' className="mt-5 font-light text-[14px] lg:text-[16px] xs:text-justify" />
                                    }


                                    <div className="flex gap-2 mt-5">
                                        <BlurFade delay={0.1} duration={1} inView={true} >
                                            <CTA text={ctaText} />
                                        </BlurFade>
                                        {/* <CTA text={ctaText2} variant='icon' icon={true} className={`${theme === "light" ? " " : "!bg-white/20"}`} /> */}
                                    </div>


                                </div>
                            </div>
                            {
                                form ? (<>
                                    <div className={`${gridright} relative py-[50px]`}>
                                        <Image src={img} alt="SEO company" className={`block mx-auto object-contain ${imgCss}`} fill={true} />
                                        <div className='p-10 w-[80%] mx-auto backdrop-blur-sm bg-white/85 shadow-lg rounded-[20px]'>
                                            <form className="grid grid-cols-1  gap-5 " action='post'>
                                                <div>
                                                    <Input type="text" id="name" placeholder="Name" className="border-b-black text-black" required />
                                                </div>
                                                <div>
                                                    <Input type="email" id="email" placeholder="Email" className="border-b-black text-black" required />
                                                </div>
                                                <div>
                                                    <Input type="phone" id="phone" placeholder="Phone" className="border-b-black text-black" required />
                                                </div>
                                                <div>
                                                    <Input type="text" id="url" placeholder="Type Your Website" className="border-b-black text-black" />
                                                </div>

                                                <Button variant="black" className="mt-5">
                                                    <span className="xs:text-[14px] text-[18px]">Submit Now</span>

                                                </Button>
                                            </form>
                                        </div>
                                    </div>
                                </>) : (
                                    <>
                                        {headerlogo ? <>
                                            <div className={`${gridright} relative  top-[-100px] lg:left-[60px]  xl:left-[60px]  2xl:left-[100px]`}>
                                                {img && <Image src={img} alt="SEO company" className={`block mx-auto ${imgCss}`} />}
                                                {
                                                    headerlogo ? <div className="justify-center items-center hidden lg:flex  lg:w-[110px] lg:h-[110px] xl:w-[130px] xl:h-[130px] 2xl:w-[150px] 2xl:h-[150px]  relative">
                                                        <RotateLogo />
                                                        <svg version="1.1" id="Layer_1" x="0px" y="0px"
                                                            viewBox="0 0 362 366" className="absolute">
                                                            <g>
                                                                <g>
                                                                    <path className="st1 fill-[#F0B501]" d="M267.8,121.5v92.3c0,7.2-2.9,13.7-7.6,18.4c-4.7,4.7-11.2,7.6-18.4,7.6c-14.4,0-26-11.7-26-26v-15.1
                        c0-4.3-5.2-6.5-8.3-3.5L160,242.7l-18.7,18.7c-5.2,5.2-12.2,8.1-19.5,8.1c-24.8,0-36.9-30.1-19.1-47.4l66.7-64.4
                        c3.1-3,1-8.4-3.4-8.4h-16.6c-7.3,0-13.9-3-18.7-7.7c-4.8-4.8-7.7-11.4-7.7-18.7c0-14.6,11.8-26.4,26.4-26.4h93.4
                        C256.6,96.5,267.8,107.7,267.8,121.5z"/>
                                                                    <path className="st2 fill-[#3B7DED]" d="M267.8,121.5v92.3c0,7.2-2.9,13.7-7.6,18.4c-4.7,4.7-11.2,7.6-18.4,7.6c-14.4,0-26-11.7-26-26v-15.1
                        c0-4.3-5.2-6.5-8.3-3.5L160,242.7l-18.7,18.7c-5.2,5.2-12.2,8.1-19.5,8.1c-7.9,0-14.5-3.1-19.3-7.8c-10.2-10.1-12-27.8,0.2-39.5
                        l54.4-52.5h32.5V143h52.1V96.6h1.1c11.1,0,20.5,7.2,23.7,17.2C267.4,116.2,267.8,118.8,267.8,121.5z"/>
                                                                    <path className="st3 opacity-[0.2]" d="M267.8,121.5v28.5l-52.1,48.7c0-4.3-5.2-6.5-8.3-3.5L160,242.7l-18.7,18.7c-5.2,5.2-12.2,8.1-19.5,8.1
                        c-7.9,0-14.5-3.1-19.3-7.8c-3.5-9.5-1.9-20.9,6.8-29.2l65.1-62.9l1.6-1.5l13.6-13l12.8-12.2l37.9-36h9.1c6.7,0,12.7,2.6,17.2,6.9
                        C267.4,116.2,267.8,118.8,267.8,121.5z"/>
                                                                    <path className="st4 fill-[#E43E2B]" d="M242.8,96.5h-9.1l-64.3,61.2l-66.7,64.4c-17.8,17.2-5.6,47.4,19.1,47.4c7.3,0,14.3-2.9,19.5-8.1l18.7-18.7
                        l47.4-47.4l60.4-56.8v-17C267.8,107.7,256.6,96.5,242.8,96.5z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div> : ""
                                                }
                                            </div>
                                        </> : <>
                                            <div className={`${gridright} `}>
                                                {img && <Image src={img} alt="SEO company" className={`block mx-auto ${imgCss}`} />}
                                            </div>
                                        </>}

                                    </>
                                )
                            }

                        </div>
                    </div>
                    <MarqueeBlock theme={marqueeTheme} css={marqueeCss} />
                </div>
            </div>
        </section>
    )
}
