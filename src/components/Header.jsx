import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/Sheet"
import Link from "next/link"
import { CTA, MarqueeBlock, MenuMarquee, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components"
import Image from "next/image"
import LogoImage from "media/logo.svg"
import MenuImage from "media/menuimage.png"



export default function Header() {
  return (
    <header>
      <div >
        <div className="container ">
          <div className="flex items-center border-b-[1px] border-black pb-[25px] pt-[40px]">
            <div>
              <Image src={LogoImage} className="xl:max-w-[200px] max-w-[150px]" alt="SEO company" />
            </div> {/* Logo */}
            <div className="ml-auto mr-5 hidden lg:block">
              <nav >
                <NavigationMenu>
                  <NavigationMenuList className="flex gap-2 2xl:gap-[28px]">
                    {
                      [
                        ["Home", "/"],
                        ["Services", [
                          [
                            "Local SEO", "/local-seo-services"
                          ],
                          [
                            "Nationwide SEO", "/nationwide-seo"
                          ],
                          [
                            "White Lable SEO", "/white-label-seo-services"
                          ],
                          [
                            "On Page SEO", "/on-page-seo-services"
                          ],
                         
                          [
                            "Off Page SEO", "/off-page-seo"
                          ],
                          [
                            "Ecommerce SEO", "/ecommerce-seo"
                          ],
                          [
                            "Google Services", "/ecommerce-seo"
                          ],
                          [
                            "Google Ads", "/google-ads-ppc"
                          ],
                          [
                            "Website Development", "/website-design-and-development"
                          ],
                          [
                            "Social Media Marketing", "/social-media-marketing"
                          ],

                        ]],
                        ["Industries We Serve", "/ser"],
                        ["Client Testimonials", "/ser"],
                        ["About", "/about-us"],
                        ["Blog", "/ser"],
                        ["Contact", "/contact-us"]
                      ].map(([text, link], i) => (

                        <NavigationMenuItem key={i}>
                          {typeof link === "string" ? (
                            <Link href={link} className="text-[13px] xl:text-[16px] font-medium hover:text-red-700 transition-colors">
                              {text}
                            </Link>
                          ) : (
                            <>
                              <NavigationMenuTrigger  className="text-[13px] xl:text-[16px] font-medium hover:text-red-700 transition-colors">Services</NavigationMenuTrigger>
                              <NavigationMenuContent >
                                <div className="w-[800px] max-w-[800px]  overflow-hidden bg-white p-5 !z-[9999999] relative">
                              
                                  <div className="grid grid-cols-12 gap-5 py-5 ">
                                    <div className="col-span-8 p-5">
                                      <ul className="columns-2">
                                        {link.map(([text, link], i) => (
                                          <li key={i} className="mb-5 "> 
                                            <Link href={link} className="text-[13px] xl:text-[16px] font-medium hover:text-red-700 transition-colors ">{text}</Link>
                                          </li>
                                        ))}
                                      </ul>
                                    
                                    </div>
                                    <div className="col-span-4 rounded-[25px] ">
                                        <Image src={MenuImage} alt="SEO COMPANY" className="w-[320px] h-[270px]"/>
                                    </div>
                                  </div>
                                  <MenuMarquee/>
                                </div>
                                
                              </NavigationMenuContent>
                            </>
                          )}
                        </NavigationMenuItem>


                      ))

                    }
                  </NavigationMenuList>
                </NavigationMenu>

                {/* <ul className="flex gap-5 2xl:gap-[28px]">
                  {
                    [
                      ["Home", "/ds"],
                      ["Services", "/ser"],
                      ["Industries We Serve", "/ser"],
                      ["Client Testimonials", "/ser"],
                      ["About", "/about-us"],
                      ["Blog", "/ser"],
                      ["Contact", "/ser"]
                    ].map(([text, link], i) => (
                      <li key={i}>
                        <Link href={link} className=" text-[13px] xl:text-[16px]   font-medium hover:text-red-700 transition-colors">
                          {text}
                        </Link>
                      </li>
                    ))

                  }
                </ul> */}
              </nav>
            </div> {/* Desktop Menu */}

            <div className="lg:hidden ml-auto sm:mr-5">
              <Sheet>
                <SheetTrigger asChild>
                  <MenuIcon className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="mb-10">
                    <Image src={LogoImage} className="xl:max-w-[200px] max-w-[150px]" alt="SEO company" />
                  </div> {/* Logo */}
                  <nav>
                    <ul className="grid grid-cols-1 gap-5">
                      {
                        [
                          ["Home", "/ds"],
                          ["Services", "/ser"],
                          ["Industries We Serve", "/ser"],
                          ["Client Testimonials", "/ser"],
                          ["About", "/ser"],
                          ["Blog", "/ser"],
                          ["Contact", "/ser"]
                        ].map(([text, link], i) => (
                          <li key={i}>
                            <Link href={link} className=" text-[14px] xl:text-[16px]   font-medium hover:text-red-700 transition-colors">
                              {text}
                            </Link>
                          </li>
                        ))

                      }
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
  )
}
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}