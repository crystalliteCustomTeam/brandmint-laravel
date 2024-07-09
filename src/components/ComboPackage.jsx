// Next
import Image from "next/image"
// Components
// Media
import check from "media/home/check-mark.svg"
import satisfaction from "media/combo-satisfaction.png"
import chat from "media/chat.png"
import call from "media/call.png"
import { CTA } from "."

const ComboPackages = ({
  title = "Complete",
  featureBg = "bg-blue",
  CTABg = "bg-blue"
}) => {
  let seo = [
    {
      text: "Upto 100 Keywords"
    },
    {
      text: "Competitor Analysis"
    },
    {
      text: "Articles"
    },
    {
      text: "Blog Posts"
    },
    {
      text: "Press Releases"
    },
    {
      text: "Guest Blogs"
    },
    {
      text: "Power Posts"
    },
    {
      text: "Featured Posts"
    },
    {
      text: "Infographics"
    },
    {
      text: "Directory Submissions"
    },
    {
      text: "Classified Ads"
    },
    {
      text: "Community Participation"
    },
    {
      text: "Business Profiles"
    },
    {
      text: "Google Analytics Installation"
    },
    {
      text: "Google Webmaster Installation"
    },
    {
      text: "Google Places Submissions"
    },
    {
      text: "Converstion Tracking"
    },
    {
      text: "Weekly Rankings Report"
    },
    {
      text: "Before and After Progress Reports"
    },
    {
      text: "Social Media Posts"
    },
    {
      text: "Monthly Progress Report"
    },
  ]
  let psa = [
    {
      text: "Google Ads"
    },
    {
      text: "Bing Ads"
    },
    {
      text: "Keyword Research"
    },
    {
      text: "Competitor Analysis"
    },
    {
      text: "Ads Creation"
    },
    {
      text: "Banner Creation"
    },
    {
      text: "Adwords Account Setup"
    },
    {
      text: "Adwords Account Configuration"
    },
    {
      text: "Daily Spend Configuration"
    },
    {
      text: "Search Metrics Configuration"
    },
    {
      text: "Daily Bid Adjustment"
    },
    {
      text: "Daily Campaign Monitoring"
    },
    {
      text: "Negative Keyword Identification"
    },
    {
      text: "Google Webmaster Installation"
    },
    {
      text: "Weekly Ranking Report"
    },
    {
      text: "Google Analytics Report"
    },
  ]
  let branding = [
    {
      text: "Featured Posts on Yahoo"
    },
    {
      text: "Featured Posts on Entrepreneur"
    },
    {
      text: "Featured Blog Posts"
    },
  ]
  let smm = [
    {
      text: "Facebook/Twitter Page Creation"
    },
    {
      text: "Facebook/Twitter Posts & Outreach"
    },
    {
      text: "Linkedin Profile Creation"
    },
    {
      text: "Linkedin Posts and Outreach"
    },
    {
      text: "Instagram/Pinterest Page Creation"
    },
    {
      text: "Instagram/Pinterest Posts and Outreach"
    },
    {
      text: "YouTube Channel Creation"
    },
    {
      text: "YouTube Videos and Outreach"
    },
    {
      text: "Weekly/Monthly Progress Reports"
    },
  ]
  let psm = [
    {
      text: "Facebook Ads"
    },
    {
      text: "Twitter Ads"
    },
    {
      text: "Linkedin Ads"
    },
    {
      text: "Instagram Ads"
    },
    {
      text: "YouTube Ads"
    },
    {
      text: "Weekly/Monthly Progress Reports"
    },
  ]
  let webop = [
    {
      text: "Landing Page Optimization"
    },
    {
      text: "Call to Action Optimization"
    },
    {
      text: "Content Optimization"
    },
    {
      text: "Mobile Friendly Optimization"
    },
  ]
  let features = [
    {
      text: "Dedicated Project Manager"
    },
    {
      text: "24 HR Support, 6 Days a Week"
    },
    {
      text: "Client Dashboard Access"
    },
    {
      text: "100% Money Back Guarantee"
    },
  ]
  return (
    <section>
      <div className="xs:py-[50px] py-[90px] bg-[#0085F8]">
        <div className={`relative before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-[18%] before:h-full before:lg:block before:hidden`}>
          <div className="container">
            <div className="">
                <h2 className=" text-white text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] text-center mb-[22px] font-semibold">
                    The Complete Internet Marketing <span className="bg-[url('/curve-line.png')] bg-contain bg-bottom bg-no-repeat pb-[10px] lg:pb-[16px] xl:pb-[19px]">Package!</span>
                </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bg-white rounded-[26px] pl-[15px] 2xl:pl-[50px] pr[30px] py-[55px] grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 mt-[70px] justify-center">
            <div className="px-3 lg:pb-0 pb-4">
              <h3 className="text-[18px] font-bold mb-[35px]">SEO</h3>
              <ul>
                {
                  seo && seo.map((e, i) => (
                    <li key={i} className="flex items-center text-[14px] font-light">
                      <span className="me-[10px]"><Image src={check} alt="check icon" /></span>
                      {e.text}  
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="px-3 lg:pb-0 pb-4">
              <h3 className="text-[18px] font-bold mb-[35px]">Paid Search Advertising</h3>
              <ul>
                {
                  psa && psa.map((e, i) => (
                    <li key={i} className="flex items-center text-[14px] font-light">
                      <span className="me-[10px]"><Image src={check} alt="check icon" /></span>
                      {e.text}  
                    </li>
                  ))
                }
              </ul>
              <h3 className="text-[18px] font-bold mb-[35px] mt-[25px]">Branding</h3>
              <ul>
                {
                  branding && branding.map((e, i) => (
                    <li key={i} className="flex items-center text-[14px] font-light">
                      <span className="me-[10px]"><Image src={check} alt="check icon" /></span>
                      {e.text}  
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="px-3 lg:pb-0 pb-4">
              <h3 className="text-[18px] font-bold mb-[35px]">Social Media Marketing</h3>
              <ul>
                {
                  smm && smm.map((e, i) => (
                    <li key={i} className="flex items-center text-[14px] font-light">
                      <span className="me-[10px]"><Image src={check} alt="check icon" /></span>
                      {e.text}  
                    </li>
                  ))
                }
              </ul>
              <h3 className="text-[18px] font-bold mb-[35px] mt-[25px]">Paid Social Marketing</h3>
              <ul>
                {
                  psm && psm.map((e, i) => (
                    <li key={i} className="flex items-center text-[14px] font-light">
                      <span className="me-[10px]"><Image src={check} alt="check icon" /></span>
                      {e.text}  
                    </li>
                  ))
                }
              </ul>
              <h3 className="text-[18px] font-bold mb-[35px] mt-[25px]">Website Optimization</h3>
              <ul>
                {
                  webop && webop.map((e, i) => (
                    <li key={i} className="flex items-center text-[14px] font-light">
                      <span className="me-[10px]"><Image src={check} alt="check icon" /></span>
                      {e.text}  
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="px-3 lg:pb-0 pb-4">
              <Image src={satisfaction} alt="satisfaction" className="mt-[40px] mb-[60px] pl-[20px] mx-auto"/>
              <div className="bg-[#0085F8] rounded-[26px] border border-[#707070] py-[20px] px-[30px] text-white">
                <h3 className="text-[18px] font-bold mb-[35px]">Features</h3>
                <ul>
                  {
                    features && features.map((e, i) => (
                      <li key={i} className="flex text-sm text-white font-semibold items-center gap-2 mb-2">
                        <Image src={check} alt="Icons" className="brightness-0 invert" width={15} height={15} />
                        {e.text}</li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-[10px] mt-[30px]">
                  <Image src={chat} alt="chat" className="" />
                  <h5 className="text-[18px] font-bold">
                    Live Chat
                  </h5>
                </div>
                <div className="flex items-center gap-[10px] mt-[10px]">
                  <Image src={call} alt="chat" className="" />
                  <h5 className="text-[18px] font-bold">
                    <a href="tel:123-4567-89" className="">Call 123-4567-89</a>
                  </h5>
                </div>
                <CTA text={"Request a Quote Now"} className="inline-block !bg-[#4E81EC] hover:!bg-[#EC4139] mt-[15px] text-[14px] xl:text-[16px] px-5 xl:px-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComboPackages;