
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
                  <h2 className="xs:text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] text-center font-semibold">Why Choose Our Google Screened Services?</h2>
                  <p className="text-center my-5 xs:text-[1
                  px] sm:text-[14px]  md:text-[14px] lg:text-[14px] xl:text-[16px] font-light">Witness our expertise in Google Screened Ads and the assurance that Google Screened will bring more clients to your business!</p>
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-2 lg:gap-5 my-10">
                  <COLORCARD title="GMB Listing" image={gmbListing} btnText="View More" btnColor="bg-[#34AAFF]" description="Google Screened can take your business to the next level! Want your Google My Business profile to stand out from the crowd? Our optimization services for GMB listings are designed to ensure your Google Screened Badge shines brighter than the rest." />
                  <COLORCARD title="Google Screened Ads" image={googleLocalAds} btnText="View More" btnColor="bg-[#ED876F]" description="Looking to naturally capture leads? Probe into the dynamics of Google Screened and see how SEO Company makes it easier for you!"/>
                  <COLORCARD  title="Google Screened" btnText="View More" image={googleScreened} btnColor="!bg-[#6AC079]" description="Capturing leads just got simpler! With Google Screened Services, earning customer trust is effortless, especially with Google Screened Badges showcasing credibility directly to motivated clients."/>
                </div>
            </div>
        </div>
    </section>
  )
}
