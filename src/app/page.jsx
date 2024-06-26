"use client"
// Components
import { Awards, Hero, Tabs, TabsContent, TabsList, TabsTrigger, CallAway, Testimonial, Industries, SeoGraph, UsaCities, Package } from "@/components"
// Media
import heroBG from 'media/horsebg.png'
import Image from "next/image"
import service1 from "media/home/solution-seo.png"
import check from "media/home/check-mark.svg"
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
      <Awards/>
      <CallAway
        title="Digital Marketing Expert <br /> Is Just A Call Away!"
        desc="If yes, you are in luck with having Brand Mint on your side. We are the ultimate one-stop <br class='xl:block hidden'/> digital marketing solution for all the problems your business faces online."
        CallAwayImage={CallAwayImageMen}
        // Banner={BannerBlue}
        bg = "bg-gradient-to-t from-[#202124] to-[#000E2A] rounded-[40px]"
        btnClass="!bg-[#EC4139] !text-white"
        btnClass2="!bg-white !text-black"
      />

      <Testimonial
        title="Still Not Convinced?"
        desc="Discover What Customers Have To Say About Us"
        gridsClasses="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
        bgClass="bg-transparent border-[1px] shadow-lg rounded-[15px]"
        data={testimonialData}
      />

      
      <Industries
        title="Customer Base From Different Industries"
        desc="Businesses of every GENRE or SCALE are more than welcome to increase <br class='lg:block hidden'/> their DIGITAL worth with us!"
      />
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[60px] mb-[22px]">
              Fresh Strategies for Digital Success
            </h2>
            <p className="max-w-[782px] mx-auto">
              Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out.
            </p>
          </div>
          <Tabs defaultValue="Search Engine Optimization" className="grid grid-cols-12 gap-5 mt-16">
            <TabsList className="xl:col-span-4 col-span-12 grid grid-cols-1 items-center">
              {
                [
                  "Search Engine Optimizations",
                  "Reputation Management",
                  "Search Engine Optimization",
                  "App Design & Development",
                  "Pay Per Click (PPC)",
                  "Google Services"
                ].map((title, i) => (
                  <TabsTrigger value={title} key={i} className="data-[state=active]:bg-[#EF4252] data-[state=active]:text-white data-[state=active]:border-none bg-transparent rounded-[5px]
                  border-[#F3F3F3] mb-3 mt-3 border-2 text-[17px] text-[#CBCBCB] h-[50px]">
                    {title}
                  </TabsTrigger>
                ))
              }
            </TabsList>
            <div className="xl:col-span-8 col-span-12">
              <TabsContent value="Search Engine Optimizations" className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
                <div className="img-wrap mx-auto">
                  <Image src={service1} alt="home image" />
                </div>
                <div className="text-wrap md:text-left text-center">
                  <h2 className="text-[26px] sm:text-[32px] lg:text-[26px] sm:text-[32px] lg:text-[40px] font-medium mb-[20px]">
                    Search Engine
                    Optimization (SEO)
                  </h2>
                  <p className="text-[16px]">
                    Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="Reputation Management" className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
                <div className="img-wrap mx-auto">
                  <Image src={service1} alt="home image" />
                </div>
                <div className="text-wrap md:text-left text-center">
                  <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-medium mb-[20px]">
                    Reputation 
                    Management
                  </h2>
                  <p className="text-[16px]">
                    Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="Search Engine Optimization" className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
                <div className="img-wrap mx-auto">
                  <Image src={service1} alt="home image" />
                </div>
                <div className="text-wrap md:text-left text-center">
                  <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-medium mb-[20px]">
                    Search Engine
                    Optimization (SEO)
                  </h2>
                  <p className="text-[16px]">
                    Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="App Design & Development" className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
                <div className="img-wrap mx-auto">
                  <Image src={service1} alt="home image" />
                </div>
                <div className="text-wrap md:text-left text-center">
                  <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-medium mb-[20px]">
                  App Design 
                  & Development
                  </h2>
                  <p className="text-[16px]">
                    Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="Pay Per Click (PPC)" className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
                <div className="img-wrap mx-auto">
                  <Image src={service1} alt="home image" />
                </div>
                <div className="text-wrap md:text-left text-center">
                  <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-medium mb-[20px]">
                    Pay Per
                   Click (PPC)
                  </h2>
                  <p className="text-[16px]">
                    Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="Google Services" className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
                <div className="img-wrap mx-auto">
                  <Image src={service1} alt="home image" />
                </div>
                <div className="text-wrap md:text-left text-center">
                  <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-medium mb-[20px]">
                   Google 
                   Services
                  </h2>
                  <p className="text-[16px]">
                    Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out.
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
      <section className="pb-8">
        <div className="container text-center">
            <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[60px]">
              How Our SEO Strategy Powers
              Your Business
            </h2>
            <p className="max-w-[782px] mx-auto py-3">
              At the heart of our approach is a commitment to truly understanding your business. Here’s how our tailored,  SEO strategy works to amplify your success:
            </p>
        </div>
        <div className="container ">
          <div className="grid grid-cols-12 group text-[#CBCBCB] py-8">
            <div className="number col-span-2 md:col-span-1 group-hover:text-[#E1183A] text-[18px] sm:text-[22px] md:text-[30px] font-semibold">
              01
            </div>
            <div className="title col-span-9 md:col-span-5 mb-5 group-hover:text-[#E1183A] text-[18px] sm:text-[22px] md:text-[30px] font-semibold">
              Getting to Know You
            </div>
            <div className="content col-span-12 md:col-span-6 group-hover:text-[#202124]">
               First, we dive deep. We learn everything about your businessfrom your goals and target audience to reviewing your past marketing efforts. This thorough understanding allows us to craft a perfectly tailored strategy that hits all the right notes.
            </div>
          </div>
          <div className="grid grid-cols-12 group text-[#CBCBCB] py-8">
            <div className="number col-span-2 md:col-span-1 group-hover:text-[#24BF5A] text-[18px] sm:text-[22px] md:text-[30px] font-semibold">
              02
            </div>
            <div className="title col-span-9 md:col-span-5 mb-5 group-hover:text-[#24BF5A] text-[18px] sm:text-[22px] md:text-[30px] font-semibold">
             Crafting Your Custom Plan
            </div>
            <div className="content col-span-12 md:col-span-6 group-hover:text-[#202124]">
              Based on our findings, we develop an initial plan tailored just for you, covering the next 3-6 months. This isn’t just about SEO; we integrate various digital marketing strategies that align with your specific needs, ensuring a comprehensive approach.
            </div>
          </div>
          <div className="grid grid-cols-12 group text-[#CBCBCB] py-8">
            <div className="number col-span-2 md:col-span-1 group-hover:text-[#4E81EC] text-[18px] sm:text-[22px] md:text-[30px] font-semibold">
              03
            </div>
            <div className="title col-span-9 md:col-span-5 mb-5 max-w-[560px] group-hover:text-[#4E81EC] text-[18px] sm:text-[22px] md:text-[30px] font-semibold">
              Setting the Partnership in
              Motion
            </div>
            <div className="content col-span-12 md:col-span-6 group-hover:text-[#202124]">
              Once you’re happy with the plan and the pricing, we’ll send over a contract for you to sign. After the upfront fee is sorted, our team rolls up their sleeves and gets down to business. It’s time to turn plans into action.
            </div>
          </div>
          <div className="grid grid-cols-12 group text-[#CBCBCB] py-8">
            <div className="number col-span-2 md:col-span-1 group-hover:text-[#F5C228] text-[18px] sm:text-[22px] md:text-[30px] font-semibold">
              04
            </div>
            <div className="title col-span-9 md:col-span-5 mb-5 group-hover:text-[#F5C228] text-[18px] sm:text-[22px] md:text-[30px] font-semibold">
              Regular Updates and Reviews
            </div>
            <div className="content col-span-12 md:col-span-6 group-hover:text-[#202124]">
             We believe in keeping you in the loop. That’s why we schedule monthly meetings to review progress, discuss results, and make any necessary tweaks. This keeps our strategies fresh and your business on the path to success.ght notes.
            </div>
          </div>
          <div className="grid grid-cols-12 group text-[#CBCBCB] py-8">
            <div className="number col-span-2 md:col-span-1 group-hover:text-[#E1183A] text-[18px] sm:text-[22px] md:text-[30px] font-semibold">
              05
            </div>
            <div className="title col-span-9 md:col-span-5 mb-5 group-hover:text-[#E1183A] text-[18px] sm:text-[22px] md:text-[30px] font-semibold">
               Flexible and Responsive
            </div>
            <div className="content col-span-12 md:col-span-6 group-hover:text-[#202124]">
               We understand that business is dynamic. Should anything change in your situation or you need to adjust your marketing plans, you can pause or cancel our services anytime. We’re here to support your growth, however it evolves.
            </div>
          </div>
        </div>
      </section>
      <SeoGraph />
      <UsaCities/>



      <Package/>
      <CallAway
        title="Digital Marketing Expert Is Just A Call Away!"
        desc="If yes, you are in luck with having Brand Mint on your side. We are the ultimate one-stop digital marketing solution for all the problems your business faces online."
        CallAwayImage={CallAwayImageWomen}
        bg= "bg-[#E1183A] rounded-[40px]"
        btnClass="!bg-[#202124] !text-white"
        btnClass2="!bg-white !text-black"
      />
    </main>
  )
}
