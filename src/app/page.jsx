"use client"
// Components
import { Awards, Hero, CallAway, Testimonial, Industries, SeoGraph, UsaCities, Package, ServicesTabs, Strategies } from "@/components"
// Media
import heroBG from 'media/horsebg.png'
import CallAwayImageMen from "media/callaway/menLaptop.png"
import CallAwayImageWomen from "media/callaway/women.png"
// Testimonial Data
let testimonialData = [
  {
    "shadowColor" : "bg-[#4E81EC]", 
    iconimage : "/card/stars.png",
    review: "'Business Name' is my go-to site for getting the reviews for my business accounts. Since the time I have known this site, I haven't visited any other.",
    testimonialImage : "/card/philip.png",
    testimonialName: 'Philip'
  },
  {
    "shadowColor" : "bg-[#E1183A]", 
    iconimage : "/card/stars.png",
    review: "Having positive reviews on the website and account feels so good. It is so encouraging to drive the business. I got them from Business Name and I love them.",
    testimonialImage : "/card/chris.png",
    testimonialName: 'Chris'
  },
  {
    "shadowColor" : "bg-[#F5C228]", 
    iconimage : "/card/stars.png",
    review: "If you are looking to build a strong review profile, I suggest you see BuyReviewz. They have an expert team and fulfill the order in a professional manner.",
    testimonialImage : "/card/bilal.png",
    testimonialName: 'Bilal'
  },
  {
    "shadowColor" : "bg-[#24BF5A]", 
    iconimage : "/card/stars.png",
    review: "'Business Name' is my go-to site for getting the reviews for my business accounts. Since the time I have known this site, I haven't visited any other.",
    testimonialImage : "/card/elissa.png",
    testimonialName: 'Elissa Kidarshan'
  },
  {
    "shadowColor" : "bg-[#4E81EC]", 
    iconimage : "/card/stars.png",
    review: "Having positive reviews on the website and account feels so good. It is so encouraging to drive the business. I got them from Business Name and I love them.",
    testimonialImage : "/card/joe.png",
    testimonialName: 'Joe Francis'
  },
  {
    "shadowColor" : "bg-[#F5C228]",   
    iconimage : "/card/stars.png",
    review: "If you are looking to build a strong review profile, I suggest you see BuyReviewz. They have an expert team and fulfill the order in a professional manner.",
    testimonialImage : "/card/moses.png",
    testimonialName: 'Moses'
  },
]
export default function page() {
  return (
    <main>
      <Hero
        subTitle="America's Leading Digital Marketing Company"
        title="Fresh Strategies <br class='hidden lg:block' />for Digital Success"
        desc="Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out."
        bg={heroBG}
        marqueeCss="absolute bottom-[100px] left-0 right-0"
        spaceBottom="pb-[300px]"
        
      />
      <div className=" xs:py-[50px] py-[90px]">
        <Awards/>
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <ServicesTabs />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="Digital Marketing Expert <br /> Is Just A Call Away!"
          desc="If yes, you are in luck with having Brand Mint on your side. We are the ultimate one-stop <br class='xl:block hidden'/> digital marketing solution for all the problems your business faces online."
          CallAwayImage={CallAwayImageMen}
          // Banner={BannerBlue}
          bg = "bg-gradient-to-t from-[#202124] to-[#000E2A] rounded-[40px]"
          btnClass="!bg-[#EC4139] !text-white"
          btnClass2="!bg-white !text-black"
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Strategies />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <SeoGraph />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial
          title="Still Not Convinced?"
          desc="Discover What Customers Have To Say About Us"
          gridsClasses="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
          bgClass="bg-transparent border-[1px] shadow-lg rounded-[15px]"
          data={testimonialData}
        />
      </div>
      

      <div className="xs:py-[50px] py-[90px]">
        <Industries
          title="Customer Base From Different Industries"
          desc="Businesses of every GENRE or SCALE are more than welcome to increase <br class='lg:block hidden'/> their DIGITAL worth with us!"
        />
      </div>
     
      
      
      <div className="xs:py-[50px] py-[90px]">
        <UsaCities/>  
      </div>
      



      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="Digital Marketing Expert Is Just A Call Away!"
          desc="If yes, you are in luck with having Brand Mint on your side. We are the ultimate one-stop digital marketing solution for all the problems your business faces online."
          CallAwayImage={CallAwayImageWomen}
          bg= "bg-[#E1183A] rounded-[40px]"
          btnClass="!bg-[#202124] !text-white"
          btnClass2="!bg-white !text-black"
        />
      </div>
     
    </main>
  )
}
