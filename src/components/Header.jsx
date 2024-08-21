"use client";
import React, {useState} from "react";
import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/Sheet";
import Link from "next/link";
import {
  CTA,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components";
import Image from "next/image";
import LogoImage from "media/logo.svg";
import MenuImage from "media/menuimage.png";
import MenuMask from "media/menuMask.png";
import discount from "media/discount.webp";
import local from "media/icons/local.png";
import NationWide from "media/icons/nationwide.png";
import WhiteLabel from "media/icons/whitelabel.png";
import OnPage from "media/icons/onpage.png";
import OfPage from "media/icons/offpage.png";
import SEOServices from "media/icons/seo_services.png";
import Ecommerce from "media/icons/ecommerce.png";
import GoogleServices from "media/icons/google_services.png";
import GoogleAds from "media/icons/google_ads.png";
import WebDevelopment from "media/icons/webdevelopment.png";
import SMM from "media/icons/smm.png";
import Telephone from "media/icons/telephone.webp";
import Contact from "media/icons/cta2.webp";
import Chat from "media/icons/cta3.webp";

const links = [
  {
    text: "Local SEO",
    link: "/local-seo-services",
    desc: "Accelerate your business success with SEO Company.",
    img: local,
  },
  {
    text: "Nationwide SEO",
    link: "/nationwide-seo",
    desc: "Increase your business's online presence with SEO Company's expert",
    img: NationWide,
  },
  {
    text: "White Label SEO",
    link: "/white-label-seo-services",
    desc: "Our white label SEO services empower digital firms globally ",
    img: WhiteLabel,
  },
  {
    text: "On Page SEO",
    link: "/on-page-seo-services",
    desc: "We specialize in optimizing every element of your site ",
    img: OnPage,
  },
  {
    text: "Off Page SEO",
    link: "/off-page-seo",
    desc: "We excel in Off-Page SEO, driving your website to peak success.",
    img: OfPage,
  },
  {
    text: "SEO Services",
    link: "/seo-services",
    desc: "Elevate your online presence with our expert SEO services.",
    img: SEOServices,
  },
  {
    text: "Ecommerce SEO",
    link: "/ecommerce-seo",
    desc: "we specialize in eCommerce SEO services designed to raise your online presence.",
    img: Ecommerce,
  },
  {
    text: "Google Services",
    link: "/google-services",
    desc: "Our Google Screened Program optimization services ensure your profile stands out. ",
    img: GoogleServices,
  },
  {
    text: "Google Ads",
    link: "/google-ads-ppc",
    desc: "Our precision targeting through our Google ads management services positions ",
    img: GoogleAds,
  },
  {
    text: "Website Development",
    link: "/website-design-and-development",
    desc: "Our company specializes in creating visually appealing, functional websites",
    img: WebDevelopment,
  },
  {
    text: "Social Media Marketing",
    link: "/social-media-marketing",
    desc: "Our social media marketing company offers management and full-funnel ROI tracking.",
    img: SMM,
  },
];

export default function Header() {
  return (
    <header>
      <div>
        <div className="container ">
          <div className="flex items-center border-b-[1px] border-black pb-[25px] pt-[40px]">
            <Link href="/">
              <Image src={LogoImage} className="xl:max-w-[200px] max-w-[150px]" alt="SEO company" />
            </Link>{" "}
            {/* Logo */}
            <div className="ml-auto mr-5 hidden lg:block">
              <nav>
                <NavigationMenu>
                  <NavigationMenuList className="flex gap-2 2xl:gap-[28px]">
                    {[
                      ["Home", "/"],
                      [
                        "Services",
                        [
                          ["Local SEO", "/local-seo-services"],
                          ["Nationwide SEO", "/nationwide-seo"],
                          ["White Lable SEO", "/white-label-seo-services"],
                          ["On Page SEO", "/on-page-seo-services"],
                          ["Off Page SEO", "/off-page-seo"],
                          ["SEO Services", "/seo-services"],
                          ["Ecommerce SEO", "/ecommerce-seo"],
                          ["Google Services", "/google-services"],
                          ["Google Ads", "/google-ads-ppc"],
                          ["Website Development", "/website-design-and-development"],
                          ["Social Media Marketing", "/social-media-marketing"],
                        ],
                      ],
                      ["Industries", "/industries"],
                      ["Testimonials", "/"],
                      ["About", "/about-us"],
                      ["Blog", "/"],
                      ["Contact", "/contact-us"],
                    ].map(([text, link], i) => (
                      <NavigationMenuItem key={i}>
                        {typeof link === "string" ? (
                          <Link href={link} className="text-[13px] xl:text-[16px] font-medium hover:text-red-700 transition-colors">
                            {text}
                          </Link>
                        ) : (
                          <>
                            <NavigationMenuTrigger className="text-[13px] xl:text-[16px] font-medium hover:text-red-700 transition-colors">Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="w-screen 2xl:max-w-screen-2xl xl:max-w-6xl lg:max-w-5xl  overflow-hidden bg-white !z-[9999999] relative rounded-none">
                                <div className="grid grid-cols-12 gap-5 py-0 ">
                                  <div className="col-span-8 p-5">
                                    <h3 className="uppercase text-[16px] font-medium text-[#707070]">Optimize a website</h3>
                                    <hr className="my-3" />
                                    <ul className="flex flex-wrap xl:gap-5 gap-3">
                                      {links.map((e, i) => (
                                        <li key={i} className="mb-5 w-[30%] group transition-all duration-300 delay-100 ease-in-out">
                                          <div className="flex  gap-5 items-start group-hover:border-[1px] group-hover:rounded-md group-hover:shadow-md  p-2 group-hover:bg-[#3b7ded] group-hover:text-white min-h-[100px]">
                                            <div className="w-[10%]">
                                              <Image src={e.img} alt="icon" width={80} height={80} quality={95} className="group-hover:invert group-hover:brightness-0" />
                                            </div>
                                            <div className="flex flex-col w-[90%]">
                                              <Link href={e.link} className="text-[13px] xl:text-[16px] font-medium transition-colors ">
                                                <h3 className="text-[16px] leading-normal font-semibold mb-1">{e.text}</h3>
                                              </Link>
                                              <p className="text-xs">{e.desc}</p>
                                            </div>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="col-span-4 border-l-2 border-l-transparent px-5 py-5 bg-[#EC413C] text-white">
                                    <div className="flex flex-col gap-3 items-start ">
                                      <Image src={discount} alt="SEO COMPANY" className="w-full h-[170px] mx-auto" />

                                      <span className="text-sm"> Development Excellence with SEO Company</span>
                                      <h2 className="text-2xl font-semibold">On Time, Within Budget</h2>
                                      <div className="w-full">
                                        <h3 className="capitalize text-[16px] font-medium">Ready to Get Started</h3>
                                        <hr className="my-3" />
                                        {[
                                          "Elevate Your Search Rankings Today",
                                          "Transform Your Online Visibility",
                                          "Optimize Your Site for Maximum Impact",
                                          "Contact Support",
                                          "Revolutionize Your Digital Presence",
                                        ].map((text, i) => (
                                          <ul key={i} className="w-full pl-6 first:divide-y-[1px] divide-slate-900 list-disc">
                                            <li className="last:border-b-0 border-b-black border-b-[1px] py-2 font-medium">
                                              <Link href="/" className="hover:text-[#1d1d1d]">
                                                {text}
                                              </Link>
                                            </li>
                                          </ul>
                                        ))}
                                      </div>
                                      {/* <p className="text-base">
                                        At SEO Company, we bridge your ideas with the real world, turning visions into vivid experiences. Innovation drives us, whether it's through mobile apps or
                                        blockchain technology, and we're committed to keeping you ahead. Our deep understanding of technology isn't just our craft; it's our passion, powering every
                                        unique solution we create for you. At SEO Company, we don't just build solutions; we craft a future where our success is intertwined with yours.
                                      </p> */}
                                      <div className="grid grid-cols-3 items-center justify-between gap-3 w-full mt-5">
                                        {[
                                          ["Book a Call", Telephone, "/"],
                                          ["Contact Email", Contact, "/"],
                                          ["Let's Chat", Chat, "/"],
                                        ].map(([text, img], i) => (
                                          <div key={i} className="flex flex-col  gap-5 items-center justify-center group">
                                            <div>
                                              <Link href={link}>
                                                <Image src={img} width={35} height={35} className="mx-auto mb-3 group-hover:invert group-hover:brightness-200" alt="SEO Company" />
                                                <span className="group-hover:text-[#1d1d1d] p-0 m-0 font-semibold">{text}</span>
                                              </Link>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </NavigationMenuContent>
                          </>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>{" "}
            {/* Desktop Menu */}
            <div className="lg:hidden ml-auto sm:mr-5">
              <Sheet>
                <SheetTrigger asChild>
                  <MenuIcon className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="mb-10">
                    <Image src={LogoImage} className="xl:max-w-[200px] max-w-[150px]" alt="SEO company" />
                  </div>{" "}
                  {/* Logo */}
                  <nav>
                    <ul className="grid grid-cols-1 gap-5">
                      {[
                        ["Home", "/ds"],
                        [
                          "Services",
                          [
                            ["Local SEO", "/local-seo-services"],
                            ["Nationwide SEO", "/nationwide-seo"],
                            ["White Lable SEO", "/white-label-seo-services"],
                            ["On Page SEO", "/on-page-seo-services"],
                            ["Off Page SEO", "/off-page-seo"],
                            ["SEO Services", "/seo-services"],
                            ["Ecommerce SEO", "/ecommerce-seo"],
                            ["Google Services", "/google-services"],
                            ["Google Ads", "/google-ads-ppc"],
                            ["Website Development", "/website-design-and-development"],
                            ["Social Media Marketing", "/social-media-marketing"],
                          ],
                        ],
                        ["Industries We Serve", "/industries"],
                        ["Client Testimonials", "/"],
                        ["About", "/about-us"],
                        ["Blog", "/"],
                        ["Contact", "/ser"],
                      ].map(([text, link], i) => (
                        <li key={i}>
                          {typeof link === "string" ? (
                            <>
                              <Link href={link} className=" text-[14px] xl:text-[16px]   font-medium hover:text-red-700 transition-colors">
                                {text}
                              </Link>
                            </>
                          ) : (
                            <>
                              <Sheet>
                                <SheetTrigger>{text}</SheetTrigger>
                                <SheetContent side="left">
                                  <ul className="">
                                    {link.map(([text, link], i) => (
                                      <li key={i} className="mb-5 ">
                                        <Link href={link} className="text-[13px] xl:text-[16px] font-medium hover:text-red-700 transition-colors ">
                                          {text}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </SheetContent>
                              </Sheet>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <CTA text={"(123)-456-7890"} variant="icon" className="mt-10 !w-full text-center" icon={true} /> {/* Desktop Menu */}
                </SheetContent>
              </Sheet>
            </div>
            <CTA text={"Contact Us"} variant="icon" className="xs:hidden" icon={true} /> {/* Desktop Menu */}
          </div>
        </div>
      </div>
    </header>
  );
}
function MenuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
