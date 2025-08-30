// Components
import { Awards, CallAway, ComboPackage, Contact, FAQs, Hero, Package, Platforms, SmmServices, Testimonial } from "@/components";
import HeroImg from "media/casestudy/trustin/headerImage.png";
import trustindentalroi from "media/casestudy/trustin/trustindentalroi.png";
import screenshotone from "media/casestudy/trustin/screenshotone.png";
import screenshottwo from "media/casestudy/trustin/screenshottwo.png";
import screenshotthree from "media/casestudy/trustin/screenshotthree.png";
import screenshotfour from "media/casestudy/trustin/screenshotfout.png";
import screenshotfive from "media/casestudy/trustin/screenshotfive.png";
import screenshotsix from "media/casestudy/trustin/screenshotsix.png";
import screenshotseven from "media/casestudy/trustin/screenshotseven.png";
import redline from "media/casestudy/trustin/redline.svg";
import CallAwayImageWomen from "media/callaway/women.png";


import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";
import Image from "next/image";

export default function Page() {
  const dataTest = [
    {
      shadowColor: "bg-[#4E81EC]",
      review: "SEO Company has completely transformed our online presence. Their advanced SEO tactics have boosted our website's traffic and increased our conversions immensely. Their expertise in keyword research, content optimization, and link-building is unmatched. Highly recommend their services!",
      testimonialImage: philip,
      testimonialName: "Philip",
    },
    {
      shadowColor: "bg-[#E1183A]",
      review: "SEO Company has been a game-changer. Their all-around SEO strategies helped us rank higher on search engines and attract more visitors. Their team is super knowledgeable and always ready to help. Five stars!",
      testimonialImage: chris,
      testimonialName: "Chris",
    },
    {
      shadowColor: "bg-[#F5C228]",
      review: "If you're looking for professional SEO services that deliver real results, SEO Company is your place to go. Their advanced SEO tactics and commitment to understanding our business have propelled us to the top of search results. Their team is amazing, and their services are worth every penny.",
      testimonialImage: bilal,
      testimonialName: "Bilal",
    },
    {
      shadowColor: "bg-[#24BF5A]",
      review: "I can't say enough good things about SEO Company. Their SEO strategies are well-planned, and work wonders for our search rankings. Their monthly updates keep us informed and confident. Highly recommended!",
      testimonialImage: elissa,
      testimonialName: "Elissa Kidarshan",
    },
    {
      shadowColor: "bg-[#4E81EC]",
      review: "If you want SEO services that really work, go with SEO Company. Their advanced SEO tactics and deep understanding of our business got us to the top of search results. Their team is awesome, and their services are worth every penny.",
      testimonialImage: joe,
      testimonialName: "Joe Francis",
    },
    {
      shadowColor: "bg-[#F5C228]",
      review: "SEO Company has a proven success record, and we’ve seen it ourselves. Their custom SEO plans helped us reach our target audience better, and their ongoing support ensures we keep growing. They're the best SEO firm out there.",
      testimonialImage: moses,
      testimonialName: "Moses",
    },
  ];
  return (
    <main>
      <Hero
        subTitle="Professional Search Engine Optimization Services"
        title="Tustin Dental Group Case Study, How We Generated 400% ROI"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] text-[45px] md:text-[35px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]"
        spaceBottom="pb-0"
        marqueeCss="pb-[40px]  xs:pt-[50px] sm:pt-[50px]"
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
      />
      <section >
        <div className="container">
          <div className="xs:py-[30px] md:py-[50px]">
            <div className="grid xs:grid-cols-12 lg:grid-cols-2 gap-8">
              <div><Image src={trustindentalroi} alt="Trustin Dental Group || Seo Company" width={580} height={676} className="mx-auto"/></div>
              <div>
                <h2 className="font-sans font-semibold xl:text-[40px] text-[35px] leading-snug">How We Helped Tustin Dental Group Achieve <span className="text-[#E1183A]">400% ROI</span></h2>
                <div className="py-2"></div>
                <h3 className="font-sans font-semibold text-[20px]">The Results</h3>
                <div className="xl:py-5 py-2">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-black rounded-full w-2 h-2"></div>
                    <h3 className="font-medium xl:text-[25px] text-[22px] leading-normal">400%+ ROI & ROAS</h3>
                  </div>
                  <div className="xl:py-3 py-2"></div>
                  <div className="flex flex-row items-center gap-8">
                    <div className="bg-[#0085F8] rounded-full w-2 xl:h-28 h-20"></div>
                    <p className="font-light xl:text-[18px] text-[15px]">By combining Google Business Profile optimization, targeted ads, and verification, we helped Tustin Dental Group quadruple their return on investment in under 3 months.</p>
                  </div>
                </div>
                <div className="xl:py-5 py-2">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-black rounded-full w-2 h-2"></div>
                    <h3 className="font-medium xl:text-[25px] text-[22px] leading-normal">120+ New Patient Inquiries Generated</h3>
                  </div>
                  <div className="py-3"></div>
                  <div className="flex flex-row items-center gap-8">
                    <div className="bg-[#EF4252] rounded-full w-2 xl:h-28 h-20"></div>
                    <p className="font-light xl:text-[18px] text-[15px]">The campaigns resulted in over 120 direct calls and appointment requests from interested patients, increasing their monthly bookings and overall clinic traffic.</p>
                  </div>
                </div>
                <div className="xl:py-5 py-2">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-black rounded-full w-2 h-2"></div>
                    <h3 className="font-medium xl:text-[25px] text-[22px] leading-normal">Ranked in the Top 3 on Google Maps</h3>
                  </div>
                  <div className="py-3"></div>
                  <div className="flex flex-row items-center gap-8">
                    <div className="bg-[#34A854] rounded-full w-2 xl:h-28 h-20"></div>
                    <p className="font-light xl:text-[18px] text-[15px]">Within weeks, their practice appeared in the local “3-Pack” on Google Maps for high-volume dental search terms, such as “Tustin dentist” and “dental clinic near me.”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xs:py-[30px] md:py-[50px]">
            <div>
              <h2 className="font-sans font-semibold xl:text-[40px] text-[35px] leading-snug">Fully <span className="text-[#E1183A]">Verified</span> & Ready to Scale</h2>
              <div className="py-1"></div>
              <h3 className="font-sans font-semibold text-[18px] leading-snug w-full lg:w-[70%]">How does a small local business, like Tustin Dental Group, get big results using Google Adword?</h3>
              <div className="py-2"></div>
              <p className="font-light text-[17px] w-full lg:w-[55%]">Within weeks, their practice appeared in the local “3-Pack” on Google Maps for high-volume dental search terms, such as “Tustin dentist” and “dental clinic near me.”</p>
              <div className="py-2"></div>
              <div className="bg-black rounded-lg w-100 p-7">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <h4 className="font-sans font-semibold text-[18px] leading-snug text-white">Within 12 months, 370 people booked appointments via Google Business Profile</h4>
                    <div className="py-1"></div>
                    <p className="font-light text-white xl:text-[18px] text-[15px]">The screenshot shows their Google Business verification dashboard, where every requirement - from liability insurance and background checks to business profile and reviews - was completed. This 100% verification allowed us to:</p>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-5">
                      <li className="text-white flex flex-row items-center gap-5">
                        <div className="bg-[#0085F8] rounded-full w-10 h-1"></div>
                        <p className="text-[16px]">Activate the <span className="font-bold">"Google Verified Doctor"</span> badge</p>
                      </li>
                      <li className="text-white flex flex-row items-center gap-5">
                        <div className="bg-[#EF4252] rounded-full w-10 h-1"></div>
                        <p className="text-[16px]">Unlock higher visibility on search and maps</p>
                      </li>
                      <li className="text-white flex flex-row items-center gap-5">
                        <div className="bg-[#34A854] rounded-full w-10 h-1"></div>
                        <p className="text-[16px]">Build trust with new patients at first glance</p>
                      </li>
                      <li className="text-white flex flex-row items-center gap-5">
                        <div className="bg-[#F8BA05] rounded-full w-10 h-1"></div>
                        <p className="text-[16px]">Run <span className="font-bold">high-performing Google Local Ads and Google Business</span> Profile</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="py-2"></div>
              <div>
                <Image src={screenshotone} alt="Trustin Dental Group || Seo Company" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="xs:py-[30px] md:py-[50px]">
            <div>
              <h2 className="font-sans font-semibold xl:text-[40px] text-[35px] leading-snug w-full lg:w-[60%]">1024 Calls in 6 Months - Powered by <span className="text-[#E1183A]">Local Optimization</span></h2>
              <div className="py-1"></div>

              <div className="py-2"></div>
              <p className="font-light xl:text-[18px] text-[15px] text-black">This graph shows the number of calls made directly from the Google Business Profile of Tustin Dental Group from January to June 2025. After we optimized their profile, launched high-performing Google Local Ads, and verified them as a Trusted Google Certified Dentist, their monthly calls increased consistently, totaling 1,024 calls in just 6 months.</p>
              <div className="py-1"></div>
              <p className="font-light xl:text-[18px] text-[15px] ">You can see a strong start in January, followed by stable growth month over month. This proves that local marketing done right brings real, measurable results.</p>
              <div className="py-2"></div>
              <div>
                <Image src={screenshottwo} alt="Trustin Dental Group || Seo Company" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xs:py-[30px] md:py-[50px]">
            <div>
              <h2 className="font-sans font-semibold xl:text-[40px] text-[35px] leading-snug ">The Strategy Behind Their <span className="text-[#E1183A]">Success</span></h2>
              <div className="py-1"></div>
              <p className="font-light xl:text-[18px] text-[15px] w-full lg:w-[70%] text-black">We didn't just run ads, we built a full, local marketing system designed to bring real patients through the door. Here's how we made it happen:</p>

              <div className="py-2"></div>
              <div>
                <div className="py-5">
                  <div className="flex flex-row items-center gap-3">
                    <h3 className="font-medium text-[25px]">Google Business Profile (GBP) Optimization:</h3>
                  </div>
                  <div className="py-3"></div>
                  <div className="flex flex-row items-center gap-8">
                    <div className="bg-[#0085F8] rounded-full w-1 xl:h-28 h-20"></div>
                    <p className="font-light xl:text-[18px] text-[15px]">We fine-tuned their Google listing to boost local rankings, increase visibility on Google Maps, and make them easy to find for nearby patients searching for a dentist.</p>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex flex-row items-center gap-3">
                    <h3 className="font-medium text-[25px]">Google Ads: Focused on Real Leads:</h3>
                  </div>
                  <div className="py-3"></div>
                  <div className="flex flex-row items-center gap-8">
                    <div className="bg-[#EF4252] rounded-full w-1 xl:h-28 h-20"></div>
                    <p className="font-light xl:text-[18px] text-[15px]">Instead of wasting budget on clicks, we ran high-converting Local Service Ads and Google Search Ads that generated direct phone calls and appointment requests.</p>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex flex-row items-center gap-3">
                    <h3 className="font-medium text-[25px]">Google "Verified Doctor" Badge:</h3>
                  </div>
                  <div className="py-3"></div>
                  <div className="flex flex-row items-center gap-8">
                    <div className="bg-[#34A854] rounded-full w-1 xl:h-28 h-20"></div>
                    <p className="font-light xl:text-[18px] text-[15px]">We helped Tustin Dental earn the official Google Certified Doctor badge, giving their profile instant credibility and trust in the eyes of potential patients.</p>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex flex-row items-center gap-3">
                    <h3 className="font-medium text-[25px]">Full Conversion Tracking & ROI Reporting</h3>
                  </div>
                  <div className="py-3"></div>
                  <div className="flex flex-row items-center gap-8">
                    <div className="bg-[#000000] rounded-full w-1 xl:h-28 h-20"></div>
                    <p className="font-light xl:text-[18px] text-[15px]">Every call, click, and booking was tracked, giving us and the clinic full clarity on what worked, what didn't, and how much revenue was being driven</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xs:py-[30px] md:py-[50px]">
            <div>
              <h2 className="font-sans font-semibold xl:text-[40px] text-[35px] leading-snug w-full lg:w-[70%]">Over <span className="text-[#E1183A]">30,000 Profile Views </span>  & 28,000+   Search Appearances in Just 6 Months</h2>
              <div className="py-1"></div>
              <p className="font-light xl:text-[18px] text-[15px] w-full lg:w-[70%] text-black">This highlights the powerful reach we created for Tustin Dental Group through a fully managed local marketing strategy. From January to June 2025:</p>
              <div className="py-2"></div>
              <div className="flex flex-row items-center gap-5">
                <div className="bg-[#34A854] rounded-full w-10 h-1"></div>
                <p><span className="font-bold">30,189 </span>people viewed their Google Business Profile</p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="bg-[#EF4252] rounded-full w-10 h-1"></div>
                <p><span className="font-bold">28,662 </span>people found the business in search results using high-intent keywords like:</p>
              </div>
              <div className="py-2"></div>
              <div className="flex flex-row items-center gap-8">
                <Image src={redline} alt="Trustin Dental Group || Seo Company" />
                <ul className="flex flex-col gap-3 list-disc">
                  <li>Dentist near me</li>
                  <li>Orthodontist</li>
                  <li>Dental dentist near me</li>
                  <li>Dentist in Tustin</li>
                </ul>
              </div>
              <div className="py-5"></div>
              <div>
                <Image src={screenshotthree} alt="Trustin Dental Group || Seo Company" />
              </div>
              <div className="py-2"></div>
              <h2 className="font-sans font-semibold text-[18px] leading-snug ">We also drove visibility across platforms:</h2>
              <div className="py-2"></div>
              <div>
                <div className="flex flex-row items-center gap-5">
                  <div className="bg-[#0085F8] rounded-full w-10 h-1"></div>
                  <p>23% from desktop search</p>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <div className="bg-[#EF4252] rounded-full w-10 h-1"></div>
                  <p>61% of users came from Google Search on mobile</p>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <div className="bg-[#34A854] rounded-full w-10 h-1"></div>
                  <p>16% from Google Maps</p>
                </div>
              </div>
              <div className="py-2"></div>
              <p> By optimizing their profile and aligning it with what people search for, we made sure the right patients found them at the right time, right when they were looking for dental help.</p>

            </div>
          </div>
        </div>
      </section>

      <div className="py-2"></div>
      <section>
        <div>
          <div className="container">
            <hr />

            <div className="xs:py-[30px] md:py-[50px]">
              <h2 className="font-sans font-semibold xl:text-[40px] text-[35px] leading-snug w-full lg:w-[70%]">Fully Optimized & <span className="text-[#E1183A]">Trusted</span> Google Business Presence</h2>
              <div className="py-2"></div>
              <p>Here's a look at the live Google Business Profile we managed for Tustin Dental Group. After verifying the business as a <b>Trusted Google Certified Dentist</b>, we fully optimized every section, from services to photos to Q&A.</p>
              <div className="py-2"></div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-5">
                  <div className="bg-[#0085F8] rounded-full w-10 h-1"></div>
                  <p>Profile strength marked as <b>"Looks good!"</b></p>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <div className="bg-[#EF4252] rounded-full w-10 h-1"></div>
                  <p>Over <b>25,000+</b> customer interactions</p>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <div className="bg-[#34A854] rounded-full w-10 h-1"></div>
                  <p><b>230+ Google reviews </b>with a 4.9-star rating</p>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <div className="bg-[#F8BF19] rounded-full w-10 h-1"></div>
                  <p>Consistent monthly performance insights and new 5-star reviews</p>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <div className="bg-[#000] rounded-full w-10 h-1"></div>
                  <p>Active Smart Campaigns with ad eligibility for local dental-related searches</p>
                </div>
              </div>
              <div className="py-3"></div>
              <div>
                <Image src={screenshotfour} />
              </div>
              <div className="py-3"></div>
              <p>This clean, complete profile not only builds trust with potential patients-it also helps Google rank the business higher in local search results.</p>
            </div>
          </div>
        </div>
      </section>


      <section>

        <div className="xs:py-[30px] md:py-[50px]">
          <div className="container">
            <h2 className="font-sans font-semibold xl:text-[40px] text-[35px] leading-snug w-full lg:w-[70%]">How We Turned <span className="text-[#E1183A]">Local Clicks</span> into New Dental Patients  </h2>
            <div className="py-2"></div>
            <p className="xl:text-[18px] text-[15px]">With a monthly spend of just <b>$553.00</b>, the campaign delivered over 2.79K ad views,<b> 320 Google Business Profile visits, 55 local</b> actions (like users clicking to get directions), and <b>101 phone calls</b> to the dental office.</p>
            <div className="py-2"></div>
            <p className="xl:text-[18px] text-[15px]">These results clearly highlight how effective our local marketing strategy was. By optimizing their <b>Google Business Profile</b>, verifying them as a <b>Google Trusted Dentist</b>, and launching <b>targeted Smart Campaigns</b>, we helped drive real local traffic and qualified leads, leading to a 400% ROI in just a few months.</p>
            <div className="py-3"></div>
            <div>
              <Image src={screenshotfive} alt="Trustin Dental Group || Seo Company" />
            </div>
          </div>
        </div>
      </section>


      <section>

        <div className="xs:py-[30px] md:py-[50px]">
          <div className="container">
            <h2 className="font-sans font-semibold xl:text-[40px] text-[35px] leading-snug w-full lg:w-[70%]"><span className="text-[#E1183A]">Cost-Efficient </span> Advertising That Converts Local Leads</h2>
            <div className="py-2"></div>
            <p className="xl:text-[18px] text-[15px]">In this performance view, we're seeing the monthly summary of our Google Ads campaign for Trusting Dental Group.With 377 total clicks and 99.00 conversions, we achieved a strong 27% conversion rate. That means nearly in 3 clicks resulted in a meaningful customer action, whether that was calling. visiting the website, or getting directions to the clinic.</p>
            <div className="py-2"></div>
            <p className="xl:text-[18px] text-[15px]">THere's a breakdown of key performance metrics:</p>
            <div className="py-3"></div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-5">
                <div className="bg-[#0085F8] rounded-full w-10 h-1"></div>
                <p><b>Total Ad Spend: </b>$666.00</p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="bg-[#EF4252] rounded-full w-10 h-1"></div>
                <p><b>Cost Per Click (CPC):</b> $1.77</p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="bg-[#34A854] rounded-full w-10 h-1"></div>
                <p><b>Cost Per Conversion:</b> $6.72</p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="bg-[#F8BF19] rounded-full w-10 h-1"></div>
                <p><b>Conversions:</b> 99 valuable actions</p>
              </div>
            </div>
            <div className="py-5"></div>
            <div>
              <Image src={screenshotsix} alt="Trustin Dental Group || Seo Company" />
            </div>
          </div>
        </div>
      </section>

      <section>

        <div className="xs:py-[30px] md:py-[50px]">
          <div className="container">
            <h2 className="font-sans font-semibold xl:text-[40px] text-[35px] leading-snug w-full lg:w-[70%]">Local Ads Performance: Smart Data, <span className="text-[#E1183A]">Real Growth</span> </h2>
            <div className="py-2"></div>
            <p className="xl:text-[18px] text-[15px]">This section of the dashboard uncovers how we reached and engaged high-quality leads using Google's Performance Max Campaign for Trusting Dental Group. Here's what stands out:</p>
            <div className="py-2"></div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-5">
                <div className="bg-[#0085F8] rounded-full w-10 h-1"></div>
                <p><b>Top-performing device:</b> Mobile (80%+ of conversions) </p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="bg-[#EF4252] rounded-full w-10 h-1"></div>
                <p><b>Geographic Reach:</b> Strongest response in the Tustin, CA area</p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="bg-[#34A854] rounded-full w-10 h-1"></div>
                <p><b>Best performing audience segments:</b> "Health & Wellness Seekers" and "Dental Service Intenders" </p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="bg-[#F8BF19] rounded-full w-10 h-1"></div>
                <p><b>Conversion by device: </b>Mobile outperformed desktop by a significant margin, confirming that mobile-first optimization was key. </p>
              </div>
            </div>
            <div className="py-5"></div>
            <div>
              <Image src={screenshotseven} alt="Trustin Dental Group || Seo Company" />
            </div>
            <div className="py-5"></div>
            <div className="grid grid-cols-2 gap-3 ">
              <div className="bg-[#0085F8] p-8 rounded-xl">
                <h2 className="text-[18px] font-semibold text-white flex flex-row gap-3 items-center">
                  <div className="bg-white rounded-full w-8 h-1"></div>
                  High-Performing Campaigns
                </h2>
                <ul className="flex flex-col gap-3 list-disc ml-8 mt-5">
                  <li className="text-white font-light xl:text-[18px] text-[15px]">Our tailored Emergency Campaign stood out with a remarkable 40% click-through rate and over 50 quality conversions, helping new patients find immediate care when they needed it most.</li>
                </ul>
              </div>


              <div className="bg-[#EF4252] p-8 rounded-xl">
                <h2 className="xl:text-[18px] text-[15px] font-semibold text-white flex flex-row gap-3 items-center">
                  <div className="bg-white rounded-full w-8 h-1"></div>
                  Smart Timing, Better Results
                </h2>
                <ul className="flex flex-col gap-3 list-disc ml-8 mt-5">
                  <li className="text-white font-light xl:text-[18px] text-[15px]">By analyzing the best-performing days and hours through the heatmap, we adjusted ad schedules to align with when patients are most likely to search for dental services- ensuring no opportunity is missed.</li>
                </ul>
              </div>

              <div className="bg-[#34A854] p-8 rounded-xl">
                <h2 className="xl:text-[18px] text-[15px] font-semibold text-white flex flex-row gap-3 items-center">
                  <div className="bg-white rounded-full w-8 h-1"></div>
                  Mobile-First Strategy
                </h2>
                <ul className="flex flex-col gap-3 list-disc ml-8 mt-5">
                  <li className="text-white font-light xl:text-[18px] text-[15px]">With over 80% of conversions coming from mobile devices, we shifted focus to mobile-optimized ads and landing pages, meeting patients where they are and making it easier for them to book appointments on the go.</li>
                </ul>
              </div>

              <div className="bg-[#F8BF19] p-8 rounded-xl">
                <h2 className="xl:text-[18px] text-[15px] font-semibold text-white flex flex-row gap-3 items-center">
                  <div className="bg-white rounded-full w-8 h-1"></div>
                  100% Optimization Score
                </h2>
                <ul className="flex flex-col gap-3 list-disc ml-8 mt-5">
                  <li className="text-white font-light xl:text-[18px] text-[15px]">Our campaigns consistently meet Google's best practice standards. A perfect score reflects our commitment to maximizing budget efficiency, improving ad relevance, and delivering real ROI.</li>
                </ul>
              </div>

              <div className="bg-black p-8 rounded-xl">
                <h2 className="xl:text-[18px] text-[15px] font-semibold text-white flex flex-row gap-3 items-center">
                  <div className="bg-white rounded-full w-8 h-1"></div>
                  Insight-Driven Decisions
                </h2>
                <ul className="flex flex-col gap-3 list-disc ml-8 mt-5">
                  <li className="text-white font-light xl:text-[18px] text-[15px]">From tracking top-performing search terms to monitoring trends in ad performance over time, we use every data point to fine-tune our strategy, leading to smarter campaigns and better patient reach.</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-xl flex flex-col items-start justify-center">
                <h2 className="text-[18px] font-semibold">
                  We also used:
                </h2>
                <div className="py-2"></div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-5">
                    <div className="bg-[#0085F8] rounded-full w-10 h-1"></div>
                    <p>Custom audience lists (past website visitors and phone call audiences)</p>
                  </div>
                  <div className="flex flex-row items-center gap-5">
                    <div className="bg-[#EF4252] rounded-full w-10 h-1"></div>
                    <p>Location-based bidding to focus on a high-converting radius</p>
                  </div>
                  <div className="flex flex-row items-center gap-5">
                    <div className="bg-[#34A854] rounded-full w-10 h-1"></div>
                    <p>Ad schedule optimization based on peak call/request times</p>
                  </div>
                </div>
              </div>


            </div>
            <div className="py-5"></div>
            <p className="xl:text-[18px] text-[15px]">This section of the dashboard uncovers how we reached and engaged high-quality leads using Google's Performance Max Campaign for Trusting Dental Group. Here's what stands out:</p>
          </div>
        </div>
      </section>



      <div className="xs:py-[50px] py-[90px]">
        <CallAway CallAwayImage={CallAwayImageWomen} desc={`Ready to skyrocket your online presence? Our proven SEO strategies will propel your website to <br class="2xl:block hidden" /> the top of search results. Don't let competitors outrank you – Hire SEO company today!`} bg="bg-[#E1183A] rounded-[40px]" btnClass="!bg-[#202124] !text-white" btnClass2="!bg-white !text-black" />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <FAQs
          items={[
            {
              title: "How long does SEO take to see results?",
              content: "SEO typically takes time to yield noticeable results, often several months depending on various factors such as competition, industry, and current website status."
            },
            {
              title: "What is included in on-page SEO services?",
              content: "On-page SEO services encompass optimizing web content, meta tags, headings, and internal links to enhance search engine rankings and user experience."
            },
            {
              title: "Why is SEO crucial for your business?",
              content: "SEO is crucial for your business as it boosts online visibility, drives organic traffic, and enhances credibility and conversions."
            },
            {
              title: "How does SEO Company execute its SEO service delivery?",
              content: "SEO Company implements its SEO services through comprehensive strategies, including keyword research, content optimization, technical SEO, and ongoing adjustments."
            },
            {
              title: "What are the benefits of partnering with us?",
              content: "Partnering with us provides access to top-tier White Label SEO services, ensuring effective solutions for your clients without the need for in-house expertise."
            },
            {
              title: "Why is SEO important for your business?",
              content: "SEO is essential for maintaining online visibility, attracting potential customers, and remaining competitive in today's digital scene."
            }
          ]
          }
        />
      </div>
    </main>
  );
}
