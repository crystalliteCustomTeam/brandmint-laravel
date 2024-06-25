// Components
import { Awards, Hero, CallAway, Card } from "@/components"
import CallAwayImageMen from "../../public/callaway/menLaptop.png"
import BannerBlue from "../../public/callaway/blueBG.png"
import CallAwayImageWomen from "../../public/callaway/women.png"
// Card Data
let cardData = [
  {
    iconimage : "/card/stars.png",
    review: "'Business Name' is my go-to site for getting the reviews for my business accounts. Since the time I have known this site, I haven't visited any other.",
    testimonialImage : "/card/philip.png",
    testimonialName: 'Philip'
  },
  {
    iconimage : "/card/stars.png",
    review: "Having positive reviews on the website and account feels so good. It is so encouraging to drive the business. I got them from Business Name and I love them.",
    testimonialImage : "/card/chris.png",
    testimonialName: 'Chris'
  },
  {
    iconimage : "/card/stars.png",
    review: "If you are looking to build a strong review profile, I suggest you see BuyReviewz. They have an expert team and fulfill the order in a professional manner.",
    testimonialImage : "/card/bilal.png",
    testimonialName: 'Bilal'
  },
  {
    iconimage : "/card/stars.png",
    review: "'Business Name' is my go-to site for getting the reviews for my business accounts. Since the time I have known this site, I haven't visited any other.",
    testimonialImage : "/card/elissa.png",
    testimonialName: 'Elissa Kidarshan'
  },
  {
    iconimage : "/card/stars.png",
    review: "If you are looking to build a strong review profile, I suggest you see BuyReviewz. They have an expert team and fulfill the order in a professional manner.",
    testimonialImage : "/card/bilal.png",
    testimonialName: 'Bilal'
  },
  {
    iconimage : "/card/stars.png",
    review: "'Business Name' is my go-to site for getting the reviews for my business accounts. Since the time I have known this site, I haven't visited any other.",
    testimonialImage : "/card/elissa.png",
    testimonialName: 'Elissa Kidarshan'
  },
]
export default function page() {
  return (
    <main>
      <Hero />
      <Awards/>
      <CallAway
        title="Digital Marketing Expert Is Just A Call Away!"
        desc="If yes, you are in luck with having Brand Mint on your side. We are the ultimate one-stop digital marketing solution for all the problems your business faces online."
        CallAwayImage={CallAwayImageMen}
        // Banner={BannerBlue}
        bg = "bg-gradient-to-t from-[#202124] to-[#000E2A] rounded-[40px]"
      />

      <Card
        title="Still Not Convinced?"
        desc="Discover What Customers Have To Say About Us"
        gridsClasses="grid-cols-3 gap-4"
        bgClass="bg-transparent border-[1px] shadow-lg rounded-[15px]"
        data={cardData}
      />

      <CallAway
        title="Digital Marketing Expert Is Just A Call Away!"
        desc="If yes, you are in luck with having Brand Mint on your side. We are the ultimate one-stop digital marketing solution for all the problems your business faces online."
        CallAwayImage={CallAwayImageWomen}
        bg= "bg-[#E1183A] rounded-[40px]"
      />
    </main>
  )
}
