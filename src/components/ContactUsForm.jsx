import {Input, Label, Button} from "@/components";
import Image from "next/image";
import location from "media/location-icon.png";
import phone from "media/phone-icon.png";
import email from "media/email-icon.png";
import {Checkbox} from "./ui/checkbox";
import { useId } from "react";

const detailData = [
  {
    imgIcon: location,
    text: "Operations: 502 W 7th ST STE 100 Erie, PA 16502",
  },
  {
    imgIcon: location,
    text: "Operations: 7 Coronation Road, Dephna House, Launchese, London, United Kingdom, NW10 7PQ",
  },
  {
    imgIcon: phone,
    text: "(717)-908-1211",
  },
  {
    imgIcon: phone,
    text: "1-844-400-0025",
  },
  {
    imgIcon: email,
    text: "Contact Email",
  },
];

export default function ContactUsForm() {
    const id = useId();
  return (
    <section>
      <div>
        <div className="container">
          <div>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] text-center font-medium">We've Driven Over 6,437,349 Leads For Clients <br className="xl:block hidden"/> Through Digital Marketing.</h2>
            <p className="mt-5 font-light text-[16px] text-center">Fill in the form below to instantly schedule a call with us.</p>
          </div>
          <div className="grid grid-cols-12 mt-10 gap-8">
            <div className="md:col-span-8 col-span-12">
              <form action="post">
                <div className="grid md:grid-cols-2 lg:gap-5 gap-x-2 gap-y-4">
                  <div>
                    <Input type="text" id="firstname" placeholder="First Name*" className="xl:!py-4 !py-3 !border-[1px] rounded-full border-[#707070] px-5 text-black " required/>
                  </div>
                  <div>
                    <Input type="text" id="lastname" placeholder="Last Name*" className="xl:!py-4 !py-3 !border-[1px] rounded-full px-5 border-[#707070] text-black" required/>
                  </div>
                  <div>
                    <Input type="text" id="email" placeholder="Email*" className="xl:!py-4 !py-3 !border-[1px] rounded-full border-[#707070] px-5 text-black" required/>
                  </div>
                  <div>
                    <Input type="text" id="phone" placeholder="Phone*" className="xl:!py-4 !py-3 !border-[1px] rounded-full border-[#707070] px-5 text-black" required/>
                  </div>
                  <div>
                    <Input type="text" id="company" placeholder="Company/Organizations*" className="xl:!py-4 !py-3 !border-[1px] rounded-full border-[#707070] px-5 text-black" />
                  </div>
                  <div>
                    <Input type="text" id="website" placeholder="Website (Optional)" className="xl:!py-4 !py-3 !border-[1px] rounded-full border-[#707070] px-5 text-black" />
                  </div>
                </div>
                <textarea rows={10} id="name" placeholder="Message" className="!border-[1px] rounded-[20px] border-[#707070] px-5 pt-5 text-black block w-full mt-5" />
                
                <h2 className="xl:text-[35px] lg:text-[30px] md:text-[25px] font-bold mt-5 text-black mb-5">What Services Can We Provide You?*</h2>
                <div className="grid lg:grid-cols-3 grid-cols-2 xl:gap-3 lg:gap-2 gap-4">
                  <div className="flex flex-col gap-y-5">
                    {[
                        ["Optimization (SEO)"],
                        ["Web Design"],
                        ["Reputation / Reviews Management"],
                        ["Web Hosting / Maintenance"],
                        ["ADA Compliance"],
                        ["Pay Per Click (PPC)"]
                    ].map(([text], i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Checkbox id="" className="w-5 h-5 rounded-none border-[3px]" />
                          <Label htmlFor={id} className="xl:text-[15px] lg:text-[12px] text-[12px] font-normal text-[#000000] leading-normal">
                            {text}
                          </Label>
                        </div>
                      ))}
                  </div>
                  <div className="flex flex-col gap-y-5">
                    {[
                        ["eCommerece Optimization"],
                        ["Content Writing"],
                        ["Amazon Marketing"],
                        ["Link Building"],
                        ["Amazon Marketing"],
                        ["Link Building"]
                    ].map(([text], i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Checkbox id="" className="w-5 h-5 rounded-none border-[3px]" />
                          <Label htmlFor={id} className="xl:text-[15px] lg:text-[12px] text-[12px] font-normal text-[#000000] leading-normal">
                            {text}
                          </Label>
                        </div>
                      ))}
                  </div>
                  <div className="flex flex-col gap-y-5">
                    {[
                        ["Social Media"],
                        ["Conversion Rate Omtimization"],
                        ["Video / Animation"],
                        ["Email Marketing"],
                        ["Search Engine MArketing"]
                    ].map(([text], i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Checkbox id="" className="w-5 h-5 rounded-none border-[3px]" />
                          <Label htmlFor={id} className="xl:text-[15px] lg:text-[12px] text-[12px] font-normal text-[#000000] leading-normal">
                            {text}
                          </Label>
                        </div>
                      ))}
                  </div>
                </div>
                <Button variant="black" className="mt-8">
                  <span className="xs:text-[14px] text-[18px]">Submit Now</span>
                </Button>
              </form>
            </div>

            <div className="md:col-span-4 col-span-12 md:pl-4">
              <h3 className="xl:text-[45px] font-medium text-[35px] leading-snug mb-5">Contact Us</h3>
              <ul className="flex flex-col gap-y-5">
                {detailData?.map((e, i) => (
                  <li key={i} className="flex items-center justify-start gap-4">
                    <Image src={e.imgIcon} className="w-[20px]" alt="Seo Company US" />
                    <span className="xl:text-[16px] text-[14px] font-light leading-normal" dangerouslySetInnerHTML={{__html: e.text}} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
