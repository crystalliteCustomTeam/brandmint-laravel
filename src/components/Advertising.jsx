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
                  <h2 className="xs:text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] text-center font-semibold">Start Your Business Growth With Our <br className="hidden lg:block"/>
                  Social Media Advertising Services</h2>
                  <p className="text-center my-5 xs:text-[1
                  px] sm:text-[14px]  md:text-[14px] lg:text-[14px] xl:text-[16px] font-light">Our social media marketing services are designed to maximize brand reach, drive significant results, and transform <br className="hidden lg:block"/> your social media  
                  presence, ensuring exceptional success.</p>
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 md:gap-2 lg:gap-5 my-10">
                  <COLORCARD title="Facebook Advertising Services" image={Facebook} btnText="Advertising on Facebook"  description="Leverage our expertise to reach your target audience on Facebook with highly targeted and engaging ads that drive traffic and conversions." />
                  <COLORCARD title="Youtube Advertising Services" image={Youtube} btnText="Advertising on Youtube" btnColor="bg-[#FE6763]" description="Boost your brand's visibility with our YouTube advertising services, designed to captivate viewers and generate more leads through impactful video content."/>
                  <COLORCARD  title="Instagram Advertising Services" btnText="Advertising on Instagram" image={Insta} btnColor="!bg-[#7BC786]" description="Increase your brand's presence on Instagram with visually appealing and strategically crafted ads that attract and retain customers."/>
                  <div className=" block md:hidden" >
                  {/* <COLORCARD ctaCSS="inline-block" btnColor="!bg-[#262626]"  title="Advertising on X"  btnText="X Advertising Services"  image={X} x description="Our team of X (Twitter) advertising professionals provides comprehensive strategies and execution to ensure your campaigns deliver exceptional results across all platforms."/> */}
                  </div>
                </div>
                <div className=" grid-cols-1 my-5 hidden md:grid">
                 
                    <COLORCARD ctaCSS="inline-block" btnColor="!bg-[#262626]"  title="X Advertising Services"  btnText="Advertising on X" extraClass="!text-left" image={X} x description="Our team of X (Twitter) advertising professionals provides comprehensive strategies and execution to ensure your campaigns deliver exceptional results across all platforms."/>
                 
                  
                </div>
            </div>
        </div>
    </section>
  )
}
