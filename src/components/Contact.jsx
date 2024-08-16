import Image from "next/image";

import Contactbg from "media/contactBg.png";
import contactborder from "media/contactborder.png";
import buttonImage from "media/buttonImage.png";
import icon from "media/ctaicon.svg";
import { BlurFade, Button, FadeText, Input, Label } from "@/components";

export default function Contact({
    title = `<h2>Get your <strong>free 30 minutes </strong>strategy
            session with an experienced
            digital marketer valued at
            <strong> $300 USD.</strong></h2>`,
    btnText = "Get My Free 30 Minutes Strategy Session"
}) {
    return (
        <section>
            <div>
                <div className="container">
                    <div className="relative rounded-[25px] overflow-hidden z-10 ">
                        <div className="sm:py-[70px] sm:px-[40px] py-[70px] px-[30px]">

                            <FadeText text={title} className="capitalize text-white xs:text-[20px] text-[25px] md:text-[35px] lg:text-[40px] xl:text-[42px]"
                                direction="up"
                            />
                            <Image src={contactborder} alt="SEO company" className="max-w-[200px] md:max-w-[300px] my-5" />
                            <form className="grid xs:grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10 mt-20">

                                <div>
                                    <BlurFade delay={0.2}>
                                        <Label htmlFor="name" className="md:block hidden">Name*</Label>
                                    </BlurFade>
                                    <BlurFade delay={0.2}>
                                        <Input type="text" id="name" placeholder="Type Full Name" />
                                    </BlurFade>
                                </div>

                                <div>
                                    <BlurFade delay={0.6}>
                                        <Label htmlFor="phone" className="md:block hidden">Phone*</Label>
                                    </BlurFade>
                                    <BlurFade delay={0.6}>
                                        <Input type="phone" id="phone" placeholder="(000) 0000-000" />
                                    </BlurFade>
                                </div>
                                <div>
                                    <BlurFade delay={0.8}>
                                        <Label htmlFor="name" className="md:block hidden">Email Address*</Label>
                                    </BlurFade>
                                    <BlurFade delay={0.8}>
                                        <Input type="email" id="email" placeholder="Type Your Email" />
                                    </BlurFade>
                                </div>
                                <div>
                                    <BlurFade delay={0.9}>
                                        <Label htmlFor="name" className="md:block hidden">Website Link*</Label>
                                    </BlurFade>
                                    <BlurFade delay={0.9}>
                                        <Input type="url" id="url" placeholder="www.yourwebsite.com" />
                                    </BlurFade>
                                </div>
                            </form>
                            <BlurFade delay={0.9}>
                                <Button className="w-full flex items-center justify-between mt-20 !bg-[#525252] h-[55px] group">
                                    <span className="xs:text-[12px] text-[16px] md:text-[18px]">{btnText}</span>
                                    <Image src={buttonImage} alt="SEO company" className="hidden sm:block group-hover:rotate-45 transition-transform duration-500 " width={41} height={41} />
                                </Button>
                            </BlurFade>
                        </div>
                        <Image src={Contactbg} alt="SEO company" fill={true} className="-z-10" />
                    </div>

                </div>
            </div>
        </section>
    )
}
