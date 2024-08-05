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
      desc: "At SEO Company, we specialize in offering top-notch Off-Page SEO Services tailored for WordPress websites across diverse industries. WordPress SEO has emerged as a cornerstone of effective website optimization globally, and our dedicated Off-Page SEO Experts leverage its creative flexibility to craft unique digital experiences for your brand.",
      img: wordpress
    },
    {
      value: "shopify",
      title: "Shopify",
      desc: "We provide exceptional Off-Page SEO Services tailored specifically for Shopify stores across diverse industries. Shopify SEO has become a pivotal aspect of effective website optimization globally, and our skilled Off-Page SEO Experts use its robust features to create compelling digital storefronts for your brand.",
      img: shopify
    },
    {
      value: "wix",
      title: "Wix",
      desc: "At SEO Company, our goal is to deliver professional Wix SEO services to clients across diverse industries. Wix website SEO is renowned globally as a powerful and trusted method for optimizing websites. Our dedicated Wix SEO experts leverage the creative flexibility of Wix.com to craft bespoke websites that embody your brand’s uniqueness.",
      img: wix
    },
    {
      value: "etsy",
      title: "Etsy",
      desc: "We specialize in delivering professional Etsy SEO services to clients across various verticals. Etsy website SEO is recognized globally as a powerful and trusted method for optimizing online shops. Our dedicated Etsy SEO experts leverage the creative flexibility of Etsy to design unique storefronts that reflect your brand’s identity.",
      img: etsy
    },
    {
      value: "magento",
      title: "Magento",
      desc: "Our Magento SEO services are renowned globally. Magento website SEO is recognized globally as a powerful and trusted method for optimizing e-commerce sites. Our dedicated Magento SEO experts leverage Magento's creative flexibility to design unique websites that embody your brand’s identity.",
      img: magento
    },
    {
      value: "woocommerce",
      title: "Woo Commerce",
      desc: "WooCommerce website SEO is recognized globally as a powerful and trusted method for optimizing e-commerce platforms. Our dedicated WooCommerce SEO experts leverage WooCommerce's creative freedom to design unique websites that reflect your brand’s identity.",
      img: woocommerce
    },
    {
      value: "html5",
      title: "HTML5",
      desc: "HTML5 website SEO is recognized globally as a powerful and trusted method for optimizing websites. Our dedicated HTML5 SEO experts leverage the creative flexibility of HTML5 to design unique websites that embody your brand’s identity.",
      img: html5
    },
    {
      value: "bigcommerce",
      title: "Big Commerce",
      desc: "We have been providing BigCommerce SEO to our clients for a number of years and every time we’ve received satisfactory feedback. BigCommerce website SEO is recognized globally as a powerful and trusted method for optimizing e-commerce platforms. Our dedicated BigCommerce SEO experts leverage BigCommerce's creative flexibility to design unique websites that reflect your brand’s identity.",
      img: bigCommerce
    },
    {
      value: "squarespace",
      title: "Square Space",
      desc: "We specialize in delivering professional SquareSpace SEO services to clients across various verticals. SquareSpace website SEO is recognized globally as a powerful and trusted method for optimizing websites. Our dedicated SquareSpace SEO experts leverage the creative freedom of SquareSpace to design unique websites that embody your brand’s identity.",
      img: squareSpace
    }
  ]

export default function TechnologiesTabs() {
  return (
    <section >
      <div className="container">
        <div className="text-center">
          <h2 className="text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] font-semibold text-[#202124] leading-tight mb-4">
          Here’s What We Work With
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
