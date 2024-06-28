import Image from "next/image";
import Facebook from "media/facebookAdv.png";
import Youtube from "media/youtube.png";
import Insta from "media/instagramAdv.png";
import X from "media/x.png";
import {  COLORCARD } from "@/components"

export default function Advertising() {
  return (
    <section>
        <div>
            <div className="container">
                <div>
                  <h2 className="xs:text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] text-center font-medium">Social Media Advertising Services <br className="hidden lg:block"/>
                  That Grows Your Business</h2>
                  <p className="text-center my-5 xs:text-[1
                  px] sm:text-[14px]  md:text-[14px] lg:text-[14px] xl:text-[16px] font-light">Business Boost? Watch Us Doing Social Media Ad Campaign. Rest Assured, Working With Us Guarantees You <br className="hidden lg:block"/>
                  More Clients For Your Business!</p>
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-2 lg:gap-5 my-10">
                  <COLORCARD title="Facebook Advertising" image={Facebook} btnText="Advertising on Facebook"  description="If you seek professional Facebook Advertising Services, you have come to the rightplace. We will help you reach your targeted audience using the most sought-aftersocial media platform." />
                  <COLORCARD title="Youtube Advertising" image={Youtube} btnText="Advertising on Youtube" btnColor="bg-[#FE6763]" description="If your target audience is present on YouTube, then our experts cash bring you closer to your visual marketing goal. We bring you subscriptions, likes, and shares on your videos or channels with carefully targeted captions and tags."/>
                  <COLORCARD  title="Instagram Advertising" btnText="Advertising on Instagram" image={Insta} btnColor="!bg-[#7BC786]" description="Instagram is home to billions of active users scrolling through news feeds every day. We bring your brand closer to your audience with Instagram availability with thousands of daily views and interactions with potential customers."/>
                  <div className=" block md:hidden" >
                  <COLORCARD ctaCSS="inline-block" btnColor="!bg-[#262626]"  title="Advertising on X"  btnText="Advertising on X"  image={X} x description="Our team of professional in-house Twitter marketing experts, media strategists, and content creators drive attention by building brand awareness, influencer relations, and follower engagement."/>
                  </div>
                </div>
                <div className=" grid-cols-1 my-5 hidden md:grid">
                 
                    <COLORCARD ctaCSS="inline-block" btnColor="!bg-[#262626]"  title="Advertising on X"  btnText="Advertising on X" extraClass="!text-left" image={X} x description="Our team of professional in-house Twitter marketing experts, media strategists, and content creators drive attention by building brand awareness, influencer relations, and follower engagement."/>
                 
                  
                </div>
            </div>
        </div>
    </section>
  )
}
