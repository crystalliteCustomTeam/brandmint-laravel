// Components
import {  Tabs, TabsContent, TabsList, TabsTrigger } from "@/components"

// Media
import Image from "next/image"
import service1 from "media/home/solution-seo.png"


export default function ServicesTabs() {
  return (
    <section className="py-20">
    <div className="container">
      <div className="text-center">
        <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[60px] mb-[22px] font-medium">
          Fresh Strategies for Digital Success
        </h2>
        <p className="max-w-[782px] mx-auto ">
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
              <h2 className="text-[26px]   sm:text-[32px] lg:text-[40px] font-medium mb-[20px]">
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
  )
}
