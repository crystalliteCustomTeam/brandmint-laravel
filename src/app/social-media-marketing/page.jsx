// Components
import {Awards, Hero, WhyChoose} from "@/components";
// Media
import heroImg from "media/socialMediaHero.png";

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

      <div className="py-[80px]">
        <WhyChoose
          subTitle="Why Choose Us"
          title="Because We HelpYour Business Get <br class='lg:block hidden'/> Bigger Every Passing Day!"
          desc="We know, and you know too, that business survival is so challenging in the internet-focused world. And when 90% of U.S. firms use social media, it becomes even more challenging to survive and keep moving. However, with a sound digital marketing agency that doesn't use cookie-cutter marketing, brands can enjoy impressive growth and sales. But the question arises, where to find such an authentic marketing agency?"
          data={chooseData}
        />
      </div>
    </main>
  );
}
