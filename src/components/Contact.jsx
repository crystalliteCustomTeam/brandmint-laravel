import Image from "next/image";

import Contactbg from "media/contactBg.png";
import contactborder from "media/contactborder.png";
import buttonImage from "media/buttonImage.png";
import icon from "media/ctaicon.svg";
import { Button, Input, Label } from "@/components";

export default function Contact({
    title = `Get your <strong>free 30 minutes </strong>strategy
            session with an experienced
            digital marketer valued at
            <strong> $300 USD.</strong>`,
    btnText = "Get My Free 30 Minutes Strategy Session"
}) {
    return (
        <section>
            <div>
                <div className="container">
                    <div className="relative rounded-[25px] overflow-hidden z-10 ">
                        <div className="py-[70px] px-[40px]">
                            <h2 className="capitalize text-white xs:text-[20px] text-[25px] md:text-[35px] lg:text-[40px] xl:text-[45px]" dangerouslySetInnerHTML={{ __html: title }} />
                            <Image src={contactborder} alt="SEO company" className="max-w-[200px] md:max-w-[300px] my-5" />
                            <form className="grid xs:grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10 mt-20">
                                <div>
                                    <Label htmlFor="name" className="md:block hidden">Name*</Label>
                                    <Input type="text" id="name" placeholder="Type Full Name" />
                                </div>
                                <div>
                                    <Label htmlFor="phone" className="md:block hidden">Phone*</Label>
                                    <Input type="phone" id="phone" placeholder="(000) 0000-000" />
                                </div>
                                <div>
                                    <Label htmlFor="name" className="md:block hidden">Email Address*</Label>
                                    <Input type="email" id="email" placeholder="Type Your Email" />
                                </div>
                                <div>
                                    <Label htmlFor="name" className="md:block hidden">Website Link*</Label>
                                    <Input type="url" id="url" placeholder="www.yourwebsite.com" />
                                </div>
                            </form>
                            <Button className="w-full flex items-center justify-between mt-20 !bg-[#E1183A] h-[55px] group">
                                <span className="xs:text-[14px] text-[18px]">{btnText}</span>
                                <Image src={buttonImage} alt="SEO company" className="hidden sm:block group-hover:rotate-45 transition-transform duration-500 " width={41} height={41} />
                            </Button>
                        </div>
                        <Image src={Contactbg} alt="SEO company" fill={true} className="-z-10" />
                    </div>

                </div>
            </div>
        </section>
    )
}
