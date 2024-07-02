import Image from 'next/image'
import usaflag from 'media/usa_flag.png'

import { CTA, MarqueeBlock } from '@/components'

export default function Hero({
    subTitle,
    title,
    desc,
    titleCss = "text-[30px] md:text-[28px] lg:text-[30px] xl:text-[40px] 2xl:text-[45px]",
    theme = "light",
    marqueeTheme = "dark",
    bg
}) {
    return (
        <section >
            <div className="relative overflow-hidden z-10">
                <Image src={bg} alt="SEO company" />
                <div className="container">
                    <div className="flex items-center">
                        <div className="col-span-12 md:col-span-6">
                            <div className="flex gap-2 items-center">
                                <Image src={usaflag} alt="SEO company" className="w-[40px] h-[40px]" />
                                {subTitle && <p className="lg:text-[16px] text-[14px] text-white">
                                    {subTitle}
                                </p>}
                            </div>
                            <div className={`mt-5 ${theme === "light" ? "text-black" : "text-white"}`}>
                                <h1 className={`leading-tight font-medium ${titleCss}`} dangerouslySetInnerHTML={{ __html: title }} />
                                <p className="mt-5 font-light text-[14px] lg:text-[16px]">
                                    {desc}
                                </p>
                                <div className="flex gap-2 mt-5">
                                    <CTA text={'GET STARTED NOW'} />
                                    <CTA text={'Contact'} variant='black' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MarqueeBlock theme={marqueeTheme} />
            </div>
        </section>
    )
}
