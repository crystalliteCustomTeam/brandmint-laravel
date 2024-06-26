import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/Sheet"
import Link from "next/link"
import { CTA } from "@/components"
import Image from "next/image"
import LogoImage from "media/logo.svg"

export default function Header() {
  return (
    <header>
      <div >
        <div className="container ">
          <div className="flex items-center border-b-[1px] border-black pb-[25px] pt-[40px]">
            <div>
              <Image src={LogoImage} className="xl:max-w-[200px] max-w-[150px]"  alt="BrandMint" />
            </div> {/* Logo */}
            <div className="ml-auto mr-5 hidden lg:block">
              <nav>
                <ul className="flex gap-5 2xl:gap-[28px]">
                  {
                      [ 
                        ["Home","/ds"],
                        ["Services","/ser"],
                        ["Industries We Serve","/ser"],
                        ["Client Testimonials","/ser"],
                        ["About","/ser"],
                        ["Blog","/ser"],      
                        ["Contact","/ser"]
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
            </div> {/* Desktop Menu */}
            
            <div className="lg:hidden ml-auto sm:mr-5">
              <Sheet>
                <SheetTrigger asChild>
                  <MenuIcon className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="left">
                <div className="mb-10">
                  <Image src={LogoImage} className="xl:max-w-[200px] max-w-[150px]"  alt="BrandMint" />
                </div> {/* Logo */}
                <nav>
                <ul className="grid grid-cols-1 gap-5">
                  {
                      [ 
                        ["Home","/ds"],
                        ["Services","/ser"],
                        ["Industries We Serve","/ser"],
                        ["Client Testimonials","/ser"],
                        ["About","/ser"],
                        ["Blog","/ser"],      
                        ["Contact","/ser"]
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
              <CTA text={"(123)-456-7890"} variant="black" className="mt-10 !w-full text-center" /> {/* Desktop Menu */}
                </SheetContent>
              </Sheet>
            </div>
            <CTA text={"Contact Us"} variant="black" className="px-5 xl:px-10 xs:hidden" /> {/* Desktop Menu */}
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