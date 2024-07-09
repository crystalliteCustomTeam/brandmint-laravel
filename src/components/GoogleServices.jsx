
import Image from "next/image";
import gmbListing from "media/google-sevices/gmb-listing.png";
import googleLocalAds from "media/google-sevices/google-local-ads.png";
import googleScreened from "media/google-sevices/google-screened.png";
import {  COLORCARD } from "@/components"

export default function GoogleServices() {
  return (
    <section>
        <div>
            <div className="container">
                <div>
                  <h2 className="xs:text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] text-center font-semibold">Google Services We Provide</h2>
                  <p className="text-center my-5 xs:text-[1
                  px] sm:text-[14px]  md:text-[14px] lg:text-[14px] xl:text-[16px] font-light">Business Boost? Watch Us Doing GMB Listing, Google Local Ads, Google Screened Us Guarantees You <br className="hidden lg:block"/>
                  More Clients For Your Business!</p>
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-2 lg:gap-5 my-10">
                  <COLORCARD title="GMB Listing" image={gmbListing} btnText="View More" btnColor="bg-[#34AAFF]" description="Don’t you want your Google My Business listing to outrank your competitors? Our GMB listing optimization services have got you covered" />
                  <COLORCARD title="Google Local Ads" image={googleLocalAds} btnText="View More" btnColor="bg-[#ED876F]" description="Who Says Leads Are Hard To Capture? With Google Local Services, It Is Easy Than Ever!."/>
                  <COLORCARD  title="Google Screened" btnText="View More" image={googleScreened} btnColor="!bg-[#6AC079]" description="It's now easy to earn customers' trust with Google Badges, which conveys credibility right in front of motivated clients!"/>
                </div>
            </div>
        </div>
    </section>
  )
}
