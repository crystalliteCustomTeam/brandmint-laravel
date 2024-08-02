// Components
import { Tabs, TabsContent, TabsList, TabsTrigger, CTA } from "@/components"
// Media
import Image from "next/image"
import service1 from "media/home/solution-seo.png"

const data = [
  {
    value: "Search Engine Optimization",
    title: "Search Engine Optimization (SEO)",
    desc: "Our expert SEO services are designed to boost your rankings, increase visibility, and attract more traffic, ensuring your business reaches its peak online performance. Let SEO Company guide you through the world of digital dominance with accuracy and innovation.",
    img: service1,
    ctaText : "Connect with us today!"
  },
  {
    value: "Link Building",
    title: "Link Building",
    desc: "Enhance your SEO with our best SEO link building services. We specialize in securing high-quality backlinks from reputable sources, enhancing your site’s authority and visibility. You can rely on our link building services to drive targeted traffic and strengthen your online presence effectively.",
    img: service1,
    ctaText : "Let’s connect!"
  },
  {
    value: "Social Media Marketing",
    title: "Social Media Marketing",
    desc: "Our experience guarantees that your company shines with everything from influential social media campaigns to SEO techniques. As a leading social media marketing agency, we specialize in maximizing visibility and engagement, helping your business thrive as a top social media marketing company.",
    img: service1,
    ctaText : "Leave us a message!"
  },
  {
    value: "Pay Per Click",
    title: "Pay Per Click (PPC)",
    desc: "Increase your online visibility and engage your audience with SEO Company’s cutting-edge pay per click solutions. With our effective PPC advertising, we ensure you secure every client. Our pay per click services and PPC advertising services are designed to drive immediate traffic and conversions, putting your business in the spotlight.",
    img: service1,
    ctaText : "Find Out More"
  },
  {
    value: "White Label SEO",
    title: "White Label SEO",
    desc: "As a premier white label SEO company, we offer top-notch white label SEO services, making us the go-to agency for businesses aiming to maximize visibility and engagement.",
    img: service1,
    ctaText : "Learn More"
  }
]

export default function ServicesTabs() {
  return (
    <section >
      <div className="container">
        <div className="text-center">
          {/* <h2 className="text-[25px] sm:text-[30px] lg:text-[45px] xl:text-[60px] mb-[22px] font-medium"> */}
          <h2 className="text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] font-semibold text-[#202124] leading-tight mb-4">
          Exceptional Digital Performance with the Best SEO Company
          </h2>
          {/* <p className="max-w-[782px] mx-auto"> */}
          <p className="text-[#202124] text-[16px] leading-relaxed lg:max-w-[85%] xl:max-w-[70%] mx-auto">
          Revive your website's visibility from just another URL to the digital leader in your field. Our professional SEO services thrust your brand to the top of search results, taking up valuable clients. Every plan we create strives to change how potential clients interact with your business online, not merely improve your exposure.
          </p>
        </div>
        <Tabs defaultValue={data[0]?.value} className="grid grid-cols-12 gap-x-5 gap-y-10 mt-[30px] md:mt-[60px]">
          {/* <TabsList className="xl:col-span-4 col-span-12 grid grid-cols-1 items-center"> */}
          <TabsList className="col-span-12 md:col-span-4 flex md:flex-col h-full md:justify-evenly gap-4 md:gap-0 text-nowrap py-3 md:py-0 overflow-x-scroll md:overflow-x-auto custom-scrollbar">
            {
              data?.map(({ value }, i) => (
                //   <TabsTrigger value={value} key={i} className="data-[state=active]:bg-[#EF4252] data-[state=active]:text-white data-[state=active]:border-none bg-transparent rounded-[5px]
                // border-[#F3F3F3] mb-3 mt-3 border-2 text-[17px] text-[#CBCBCB] h-[50px]">
                <TabsTrigger value={value} key={i} className="text-[15px] lg:text-[17px] text-[#707070] text-center border-2 font-medium h-[50px] rounded-sm border-[#707070a5] data-[state=active]:text-white data-[state=active]:bg-[#EF4252] data-[state=active]:border-[#EF4252] transition-colors xl:w-[95%] px-4 md:px-0">
                  {value}
                </TabsTrigger>
              ))
            }
          </TabsList>
          {/* <div className="xl:col-span-8 col-span-12"> */}
          <div className="col-span-12 md:col-span-8">
            {
              data?.map(({ value, title, desc, img,ctaText }, i) => (
                <TabsContent value={value} className="grid md:grid-cols-12 grid-cols-1 gap-5 items-center" key={i}>
                  <div className="col-span-12 md:col-span-5">
                    <Image src={img} alt="SEO company" className="mx-auto block" />
                  </div>
                  <div className="md:text-left text-center col-span-12 md:col-span-7">
                    {/* <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-medium mb-[20px]"> */}
                    <h2 className="text-[20px] lg:text-[28px] xl:text-[34px] 2xl:text-[40px] font-medium text-[#202124] leading-snug mb-4">
                      {title}
                    </h2>
                    <p className="text-[14px] xl:text-[16px] text-[#202124] leading-normal lg:leading-relaxed mb-4 md:text-justify lg:text-left">
                      {desc}
                    </p>
                    <CTA text={ctaText} className="!bg-[#4E81EC] hover:!bg-[#EC4139] inline-block" />
                  </div>
                </TabsContent>
              ))
            }
            {/* <TabsContent value="Reputation Management" className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
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
                <CTA text={"Learn More"} className="inline-block !bg-[#4E81EC] hover:!bg-[#EC4139] mt-[25px]" />
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
                <CTA text={"Learn More"} className="inline-block !bg-[#4E81EC] hover:!bg-[#EC4139] mt-[25px]" />
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
                <CTA text={"Learn More"} className="inline-block !bg-[#4E81EC] hover:!bg-[#EC4139] mt-[25px]" />
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
                <CTA text={"Learn More"} className="inline-block !bg-[#4E81EC] hover:!bg-[#EC4139] mt-[25px]" />
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
                <CTA text={"Learn More"} className="inline-block !bg-[#4E81EC] hover:!bg-[#EC4139] mt-[25px]" />
              </div>
            </TabsContent> */}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
