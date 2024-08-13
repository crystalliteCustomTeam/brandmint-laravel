import Image from "next/image";

import usaCityImage from "media/usacities.png";
import liBorder from "media/liborder.png";
import { BlurFade, FadeText, WordFadeIn } from ".";

export default function UsaCities() {

    return (
        <section>
            <div>
                <div className="container">
                    <div className="mb-[40px] md:mb-[80px]">
                        <FadeText text={`<h2>Providing <span class="text-[#24BF5A] ">SEO</span> services to multiple cities across USA & Canada </h2>`} className="text-center xs:text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[48px] 2xl:text-[58px] text-[65px] leading-snug font-semibold capitalize"
                            direction="up"
                        />

                    </div>

                    <div className=" md:grid md:grid-cols-12 ">
                        <div className="hidden  md:col-span-12 lg:col-span-7  md:grid grid-cols-12 gap-5 text-center  md:divide-x md:divide-black ">
                            <ul className="col-span-3  [&>*:not(:last-child)]:mb-5">
                                {
                                    ["Arlington",
                                        "Cleveland",
                                        "Louisville",
                                        "New York",
                                        "Orlando",
                                        "Atlanta",
                                        "Dallas"].map((e, i) => (
                                            <BlurFade delay={0.1 * i} duration={1} inView={true} key={i}>
                                                <li className="md:text-[18px] lg:text-[20px] xl:text-[25px] group overflow-hidden cursor-pointer w-[130px] mx-auto" >{e}
                                                    <Image src={liBorder} alt="SEO company" className="translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-200 mx-auto max-w-[60%] scale-0 group-hover:scale-100" />
                                                </li>
                                            </BlurFade>
                                        ))
                                }
                            </ul>
                            <ul className="col-span-4 mpl-10 [&>*:not(:last-child)]:mb-5">
                                {
                                    ["Atlanta",
                                        "Dallas",
                                        "Kansas City",
                                        "Miami",
                                        "Philadelphia",
                                        "Austin",
                                        "Denver"].map((e, i) => (
                                            <BlurFade delay={0.1 * i} duration={1} inView={true} key={i}>
                                                <li className=" md:text-[18px] lg:text-[20px] xl:text-[25px] group overflow-hidden cursor-pointer w-[155px] mx-auto" >{e}
                                                    <Image src={liBorder} alt="SEO company" className="translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-200 mx-auto max-w-[60%] scale-0 group-hover:scale-100" />
                                                </li>
                                            </BlurFade>
                                        ))
                                }
                            </ul>
                            <ul className="col-span-4 md:pl-10 [&>*:not(:last-child)]:mb-5">
                                {
                                    ["Minneapolis",
                                        "Portland",
                                        "Baltimore",
                                        "Houston",
                                        "Las Vegas",
                                        "Phoenix",
                                        "San Antonio"].map((e, i) => (
                                            <BlurFade delay={0.1 * i} duration={1} inView={true} key={i}>
                                                <li className=" md:text-[18px] lg:text-[20px] xl:text-[25px] group overflow-hidden cursor-pointer w-[155px]  mx-auto" >{e}
                                                    <Image src={liBorder} alt="SEO company" className="translate-x-[-100%]  group-hover:translate-x-0 transition-transform duration-200 mx-auto max-w-[60%] scale-0 group-hover:scale-100" />
                                                </li>
                                            </BlurFade>
                                        ))
                                }
                            </ul>
                        </div>
                        <div className="md:hidden flex   items-center flex-wrap justify-around gap-y-5 ">
                            {
                                [
                                    "Arlington",
                                    "Cleveland",
                                    "Louisville",
                                    "New York",
                                    "Orlando",
                                    "Atlanta",
                                    "Dallas",
                                    "Atlanta",
                                    "Dallas",
                                    "Kansas City",
                                    "Miami",
                                    "Philadelphia",
                                    "Austin",
                                    "Denver",
                                    "Minneapolis",
                                    "Portland",
                                    "Baltimore",
                                    "Houston",
                                    "Las Vegas",
                                    "Phoenix",
                                    "San Antonio"

                                ].map((e, i) => (
                                    <div className="basis-auto h-[50px] px-[15px] border-2 flex justify-center items-center hover:bg-[#24BF5A] hover:text-white" key={i}>
                                        <span>{e}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-span-5 hidden lg:block">
                            <Image src={usaCityImage} className="h-full object-cover rounded-[20px]" alt="SEO company" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
