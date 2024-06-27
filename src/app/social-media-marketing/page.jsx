// Components
import {Awards, CallAway, FAQs, Hero, Package, Testimonial, WhyChoose} from "@/components";
// Media
import heroImg from "media/socialMediaHero.png";
import CallAwayImageMen from "media/callaway/menLaptop.png";
import CallAwayImageWomen from "media/callaway/women.png";

// Why Choose Section Data
const chooseData = [
  ["/social-media-marketing/speech-bubble.png", "Clear <br/> Communication", "We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication."],
  [
    "/social-media-marketing/customer-centric-approch.png",
    "Customer-Centric <br/> Approch",
    "We prioritize our client's success, understand your unique needs, and deliver tailored solutions that drive your",
  ],
  ["/social-media-marketing/great-idea.png", "Innovation and <br/> Excellence", "We consistently deliver innovative, highquality solutions as a team on the cutting edge of technology trends."],
];

export default function Page() {
  return (
    <main>
      <div className="bg-black">
        <Hero
          subTitle="America's Leading Social Media Marketing Company"
          title="Your Business Driven Our Social Media Marketing"
          desc="Jumpto1 Social Media Marketing means more traffic, more calls and more sales! We offer data-driven strategies and surprising bottom-line results to fuel your business growth. Our SMM experts pen such stories that best narrate your BRAND. Let us create the hype for your brand , as we want you to get busy cracking lucrative deals and orders!"
          img={heroImg}
          theme="dark"
          imgCss="absolute bottom-0 -z-10 right-0 max-w-[60%] xl:max-w-full opacity-20 lg:opacity-100"
          spaceBottom="pb-[150px] sm:pb-[200px] xl:pb-[250px]"
          marqueeCss="relative top-[-70px] z-10"
          titleCss="xs:text-[25px] text-[35px] xl:text-[45px] 2xl:text-[50px]"
        />
      </div>
      <div className="py-[80px]">
        <Awards />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="Digital Marketing Expert <br /> Is Just A Call Away!"
          desc="If yes, you are in luck with having Brand Mint on your side. We are the ultimate one-stop <br class='xl:block hidden'/> digital marketing solution for all the problems your business faces online."
          CallAwayImage={CallAwayImageMen}
          // Banner={BannerBlue}
          bg="bg-gradient-to-t from-[#202124] to-[#000E2A] rounded-[40px]"
          btnClass="!bg-[#EC4139] !text-white"
          btnClass2="!bg-white !text-black"
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <WhyChoose
          subTitle="Why Choose Us"
          title="Because We HelpYour Business Get <br class='lg:block hidden'/> Bigger Every Passing Day!"
          desc="We know, and you know too, that business survival is so challenging in the internet-focused world. And when 90% of U.S. firms use social media, it becomes even more challenging to survive and keep moving. However, with a sound digital marketing agency that doesn't use cookie-cutter marketing, brands can enjoy impressive growth and sales. But the question arises, where to find such an authentic marketing agency?"
          data={chooseData}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Package id={1} />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Testimonial
          title="Still Not Convinced?"
          desc="Discover What Customers Have To Say About Us"
          gridsClasses="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
          bgClass="bg-transparent border-[1px] shadow-lg rounded-[15px]"
        />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="Digital Marketing Expert Is Just A Call Away!"
          desc="If yes, you are in luck with having Brand Mint on your side. We are the ultimate one-stop digital marketing solution for all the problems your business faces online."
          CallAwayImage={CallAwayImageWomen}
          bg="bg-[#E1183A] rounded-[40px]"
          btnClass="!bg-[#202124] !text-white"
          btnClass2="!bg-white !text-black"
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <FAQs
          items={[
            {
              title: "How long does SEO take to generate results?",
              content:
                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
            },
            {
              title: "What Includes In on page SEO services?",
              content:
                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
            },
            {
              title: "Why is SEO important for your business?",
              content:
                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
            },
            {
              title: "How Does Jumpto1 Carry Its SEO service delivery?",
              content:
                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
            },
            {
              title: "Why Should You Partner With Us?",
              content:
                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
            },
            {
              title: "Why is SEO important for your business?",
              content:
                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
            },
          ]}
        />
      </div>
    </main>
  );
}
