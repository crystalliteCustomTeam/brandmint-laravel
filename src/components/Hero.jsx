// Next
import Image from 'next/image'
// Media
import usaflag from 'media/usa_flag.png'
import ukflag from 'media/uk_flag.png'
// Components
import { CTA, MarqueeBlock, Input, Label, Button } from '@/components'


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
    ctaText = "Get in Touch Now!",
    ctaText2 = "Contact"
}) {
    return (
        <section>
            <div className="overflow-hidden pt-[100px]">
                <div className="relative ">
                    {bg && <Image src={bg} alt="SEO company" fill className="-z-10 opacity-10 lg:opacity-100 object-cover lg:object-fill object-right-bottom" />}
                    <div className="container relative">
                        <div className={`grid grid-cols-12 gap-5 items-center ${spaceBottom}`}>
                            <div className={` ${gridleft} `}>
                                <div className="flex gap-2 items-center">
                                    <Image src={flag === "usa" ? usaflag : ukflag} alt="SEO company" className="w-[40px] h-[40px]" />
                                    {subTitle && <p className={`lg:text-[16px] xs:text-[12px] sm:text-[14px] ${theme === "light" ? "text-black" : "text-white"}`}>
                                        {subTitle}
                                    </p>}
                                </div>
                                <div className={`mt-5 ${theme === "light" ? "text-black" : "text-white"}`}>
                                    {title && <h1 className={`leading-tight font-semibold  ${titleCss}`} dangerouslySetInnerHTML={{ __html: title }} />}
                                    {desc && <p className="mt-5 font-light text-[14px] lg:text-[16px] xs:text-justify">
                                        {desc}
                                    </p>}
                                    <div className="flex gap-2 mt-5">
                                        <CTA text={ctaText} />
                                        <CTA text={ctaText2} variant='icon' icon={true} className={`${theme === "light" ? " " : "!bg-white/20"}`} />
                                    </div>
                                </div>
                            </div>
                            {
                                form  ? (<>
                                    <div className={`${gridright} relative py-[50px]`}>
                                        <Image src={img} alt="SEO company" className={`block mx-auto object-contain ${imgCss}`} fill={true} />
                                        <div className='p-10 w-[80%] mx-auto backdrop-blur-sm bg-white/85 shadow-lg rounded-[20px]'>
                                            <form className="grid grid-cols-1  gap-5 " action='post'>
                                                <div>
                                                    <Input type="text" id="name" placeholder="Name" className="border-b-black text-black" required/>
                                                </div>
                                                <div>
                                                    <Input type="email" id="email" placeholder="Email" className="border-b-black text-black" required/>
                                                </div>
                                                <div>
                                                    <Input type="phone" id="phone" placeholder="Phone"  className="border-b-black text-black" required/>
                                                </div>
                                                <div>
                                                    <Input type="text" id="url" placeholder="Type Your Website"  className="border-b-black text-black" />
                                                </div>
                                                
                                                <Button  variant="black" className="mt-5">
                                                    <span className="xs:text-[14px] text-[18px]">Submit Now</span>
                                                   
                                                </Button>
                                            </form>
                                        </div>
                                    </div>
                                </>) : (
                                    <> <div className={`${gridright}`}>
                                        {img && <Image src={img} alt="SEO company" className={`block mx-auto ${imgCss}`} />}
                                    </div></>
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
