// Next
import Image from "next/image";
import Link from "next/link";

// Media
import logo from "media/logo.svg";
import payment from "media/payment.png";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#202124]">
        <div className="container">
          <div className="lg:pt-[100px] lg:pb-[40px] py-[50px] border-b-[1px] border-b-solid border-[#707070] text-white">
            <div className="lg:flex grid grid-cols-12 justify-between gap-3 gap-y-6 lg:flex-nowrap flex-wrap relative">
              <div className="lg:max-w-[40%] col-span-12">
                <Link href="/">
                  <Image src={logo} alt="SEO company" width={200} height={40} className="brightness-0 invert mb-5" />
                </Link>
                <p className="lg:text-[15px] text-[14px] leading-[25px] lg:leading-[30px] font-normal text-white mb-10">
                  SEO Company is a full service digital marketing agency that offers a multitude of advertising solutions for various industry verticals. The company aims at making businesses successful
                  BRANDS with its affordable internet marketing solutions.
                </p>

                {/* <h3 className="text-[25px] font-normal leading-[30px] mb-4">Subscribe Our News Letter</h3>
                <input type="email" name="email" id="" /> */}
                <div className="flex gap-4 justify-start items-center mt-5">
                  {[
                    ["/", "facebook", "/facebook.png"],
                    ["/", "twitter", "/twitter.png"],
                    ["/", "instagram", "/instagram.png"],
                  ].map(([link, social, imageURL], i) => (
                    <Link href={link} key={i}>
                      <Image src={imageURL} alt={social} className="w-[40px] hover:" width={40} height={40} />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="lg:max-w-[20%] md:col-span-4 col-span-12 ">
                <h3 className="text-[25px] font-normal leading-[30px]">Quick Links</h3>
                <ul className="list-none mt-5">
                  {[
                    ["Home", "/"],
                    ["Services", "/"],
                    ["Industries We Serve", "/"],
                    ["Client Testimonials", "/"],
                    ["About", "/"],
                    ["Blog", "/"],
                    ["Contact", "/"],
                  ].map(([text, link], i) => (
                    <li key={i}>
                      <Link href={link} className="text-[14px] 2xl:text-[15px] leading-[30px] font-normal hover:text-[#EC4139] transition-colors">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:max-w-[20%] md:col-span-4 col-span-12 ">
                <h3 className="text-[25px] font-normal leading-[30px]">Services</h3>
                <ul className="list-none mt-5">
                  {[
                    ["SEO Services", "/"],
                    ["Website Services", "/"],
                    ["Social Media Marketing", "/"],
                    ["Content Writing", "/"],
                    ["Pay per Click", "/"],
                    ["Reputation Services", "/"],
                  ].map(([text, link], i) => (
                    <li key={i}>
                      <Link href={link} className="text-[14px] 2xl:text-[15px] leading-[30px] font-normal hover:text-[#EC4139] transition-colors">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:max-w-[20%] md:col-span-4 col-span-12 relative">
                <h3 className="text-[25px] font-normal leading-[30px]">Contact</h3>
                <ul className="list-none mt-5 space-y-3">
                  {[
                    ["/location.png", "#", "Operations: 502 W 7th ST STE 100 Erie, PA 16502"],
                    ["/phone.png", "#", "(717)-400-0010"],
                    ["/phone.png", "#", "1-844-400-0025"],
                    ["/mail.png", "#", "Contact Email"],
                  ].map(([icon, link, text], i) => (
                    <li key={i} className="flex items-center justify-start gap-3">
                      <div className="max-w-[25%]">
                        <Image src={icon} alt="SEO company" className="w-[20px]" width={20} height={20} />
                      </div>
                      <Link href={link} className="text-[14px] 2xl:text-[15px] leading-[20px] lg:max-w-[70%] max-w-[60%] font-normal hover:text-[#EC4139] transition-colors">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Image src={payment} alt="SEO company" width={120} height={100} className="absolute right-0 lg:-bottom-8 -bottom-[40px]" />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="py-[20px]">
            <div className="flex justify-center">
              <h4 className="lg:text-[18px] text-[14px] font-normal text-white">Copyright © 2024 SEO Company. All rights reserved.</h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
