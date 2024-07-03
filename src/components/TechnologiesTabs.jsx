// Components
import { Tabs, TabsContent, TabsList, TabsTrigger, CTA } from "@/components"
// Media
import Image from "next/image";
import wordpress from "media/technologies-tabs/wordpress.svg";
import shopify from "media/technologies-tabs/shopify.svg";
import wix from "media/technologies-tabs/wix.svg";
import etsy from "media/technologies-tabs/etsy.svg";
import magento from "media/technologies-tabs/magento.svg";
import woocommerce from "media/technologies-tabs/woo-commerce.svg";
import html5 from "media/technologies-tabs/html5.svg";
import bigCommerce from "media/technologies-tabs/big-commerce.svg";
import squareSpace from "media/technologies-tabs/square-space.svg";



const data = [
    {
      value: "wordpress",
      title: "Wordpress",
      desc: "At Jumpto1, we offer the most professional WordPress SEO services to our valued clients belonging to various verticals. WordPress website SEO has become one of the most powerful and trusted website optimization endeavors worldwide. Our WordPress SEO expert utilizes the creative freedom WordPress offers to design a unique website for your brand. We focus on enhancing user experience with the goal of generating sales.",
      img: wordpress
    },
    {
      value: "shopify",
      title: "Shopify",
      desc: "At Jumpto1, we offer the most professional WordPress SEO services to our valued clients belonging to various verticals. WordPress website SEO has become one of the most powerful and trusted website optimization endeavors worldwide. Our WordPress SEO expert utilizes the creative freedom WordPress offers to design a unique website for your brand. We focus on enhancing user experience with the goal of generating sales.",
      img: shopify
    },
    {
      value: "wix",
      title: "Wix",
      desc: "At Jumpto1, we offer the most professional WordPress SEO services to our valued clients belonging to various verticals. WordPress website SEO has become one of the most powerful and trusted website optimization endeavors worldwide. Our WordPress SEO expert utilizes the creative freedom WordPress offers to design a unique website for your brand. We focus on enhancing user experience with the goal of generating sales.",
      img: wix
    },
    {
      value: "etsy",
      title: "Etsy",
      desc: "At Jumpto1, we offer the most professional WordPress SEO services to our valued clients belonging to various verticals. WordPress website SEO has become one of the most powerful and trusted website optimization endeavors worldwide. Our WordPress SEO expert utilizes the creative freedom WordPress offers to design a unique website for your brand. We focus on enhancing user experience with the goal of generating sales.",
      img: etsy
    },
    {
      value: "magento",
      title: "Magento",
      desc: "At Jumpto1, we offer the most professional WordPress SEO services to our valued clients belonging to various verticals. WordPress website SEO has become one of the most powerful and trusted website optimization endeavors worldwide. Our WordPress SEO expert utilizes the creative freedom WordPress offers to design a unique website for your brand. We focus on enhancing user experience with the goal of generating sales.",
      img: magento
    },
    {
      value: "woocommerce",
      title: "Woo Commerce",
      desc: "At Jumpto1, we offer the most professional WordPress SEO services to our valued clients belonging to various verticals. WordPress website SEO has become one of the most powerful and trusted website optimization endeavors worldwide. Our WordPress SEO expert utilizes the creative freedom WordPress offers to design a unique website for your brand. We focus on enhancing user experience with the goal of generating sales.",
      img: woocommerce
    },
    {
      value: "html5",
      title: "HTML5",
      desc: "At Jumpto1, we offer the most professional WordPress SEO services to our valued clients belonging to various verticals. WordPress website SEO has become one of the most powerful and trusted website optimization endeavors worldwide. Our WordPress SEO expert utilizes the creative freedom WordPress offers to design a unique website for your brand. We focus on enhancing user experience with the goal of generating sales.",
      img: html5
    },
    {
      value: "bigcommerce",
      title: "Big Commerce",
      desc: "At Jumpto1, we offer the most professional WordPress SEO services to our valued clients belonging to various verticals. WordPress website SEO has become one of the most powerful and trusted website optimization endeavors worldwide. Our WordPress SEO expert utilizes the creative freedom WordPress offers to design a unique website for your brand. We focus on enhancing user experience with the goal of generating sales.",
      img: bigCommerce
    },
    {
      value: "squarespace",
      title: "Square Space",
      desc: "At Jumpto1, we offer the most professional WordPress SEO services to our valued clients belonging to various verticals. WordPress website SEO has become one of the most powerful and trusted website optimization endeavors worldwide. Our WordPress SEO expert utilizes the creative freedom WordPress offers to design a unique website for your brand. We focus on enhancing user experience with the goal of generating sales.",
      img: squareSpace
    }
  ]

export default function TechnologiesTabs() {
  return (
    <section >
      <div className="container">
        <div className="text-center">
          <h2 className="text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] font-medium text-[#202124] leading-tight mb-4">
            Technologies We Love to Work
          </h2>
        </div>
        <Tabs defaultValue={data[0]?.value} className="md:grid md:grid-cols-12 gap-10 mt-[30px] md:mt-[60px] items-center">
          <TabsList className="mb-8 md:mb-0 md:col-span-6 md:grid grid-cols-3 gap-3 lg:gap-5 md:justify-evenly text-nowrap py-3 md:py-0 overflow-x-scroll md:overflow-x-auto custom-scrollbar relative w-[100%]">
            {
              data?.map(({ value,img }, i) => (
                
                    <TabsTrigger value={value} key={i} className="text-center border rounded-[20px] data-[state=active]:text-white data-[state=active]:bg-[#d3d3d3] border-[#d3d3d3] transition-colors px-2 lg:px-3 mx-2 md:mx-0 min-h-[100px] w-[150px] md:w-[100%] lg:min-h-[120px] xl:min-h-[150px] group">
                        <Image src={img} alt="" className="mx-auto data-[state=active]:invert"/>
                    </TabsTrigger>
              ))
            }
          </TabsList>
          <div className="md:col-span-6">
            {
              data?.map(({ value, title, desc }, i) => (
                <TabsContent value={value} className="grid md:grid-cols-12 grid-cols-1 gap-5 items-center" key={i}>
                  <div className="md:text-left text-center col-span-12">
                    <h2 className="text-[20px] lg:text-[28px] xl:text-[34px] 2xl:text-[40px] font-medium text-[#202124] leading-snug mb-4">
                      {title}
                    </h2>
                    <p className="text-[14px] xl:text-[16px] text-[#202124] leading-normal lg:leading-relaxed mb-4 md:text-justify lg:text-left">
                      {desc}
                    </p>
                  </div>
                </TabsContent>
              ))
            }
          </div>
        </Tabs>
      </div>
    </section>
  )
}
