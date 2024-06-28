
// Components
import { Awards, Hero, CallAway, Testimonial, Industries, SeoGraph, UsaCities, ServicesTabs, Strategies, Header,FAQs, UkCities, Contact, Advertising } from "@/components"
// Media
import heroBG from 'media/horsebg.png'
import CallAwayImageMen from "media/callaway/menLaptop.png"
import CallAwayImageWomen from "media/callaway/women.png"

// Testimonial Data

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="UK's Leading Digital Marketing Company"
        title="Fresh Strategies <br class='hidden lg:block' />for Digital Success"
        desc="Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out."
        bg={heroBG}
        marqueeCss="absolute bottom-[100px] left-0 right-0"
        spaceBottom="pb-[300px]"
        flag="uk"
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
         
        />
      </div>
      

      <div className="xs:py-[50px] py-[90px]">
        <Industries
          title="Customer Base From Different Industries"
          desc="Businesses of every GENRE or SCALE are more than welcome to increase <br class='lg:block hidden'/> their DIGITAL worth with us!"
        />
      </div>
      <div  className="xs:py-[50px] py-[90px]">
            <Contact/>
        </div>
    
      
      
      <div className="xs:py-[50px] py-[90px]">
        <UkCities />
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
      <div className="xs:py-[50px] py-[90px]">
      <FAQs items={[
        {
          title: "How long does SEO take to generate results?",
          content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
        },
        {
          title: "What Includes In on page SEO services?",
          content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
        },
        {
          title: "Why is SEO important for your business?",
          content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
        },
        {
          title: "How Does Jumpto1 Carry Its SEO service delivery?",
          content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
        },
        {
          title: "Why Should You Partner With Us?",
          content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
        },
        {
          title: "Why is SEO important for your business?",
          content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
        }
      ]} />
      </div>

     
     
    </main>
  )
}
