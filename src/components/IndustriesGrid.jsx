import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import industries1 from "media/industries/ecommerce.png";
import industries4 from "media/industries/it.png";
import industries3 from "media/industries/health.png";
import industries2 from "media/industries/education.png";
import industries5 from "media/industries/conquered3.png";
import { FadeText } from ".";

const DataImages = ["/industries/ecommerce.png", "/industries/it.png", "/industries/health.png", "/industries/education.png", "/industries/conquered3.png"];

const images = Array.from({length: 5}, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;

  // Cycle through DataImages if there are fewer items than the length of `images`
  const imageUrl = DataImages[i % DataImages.length];

  return `${imageUrl}?w=${width}&h=${height}`;
});

const titles = [
  ["E-commerce", "Boost your online store's traffic and sales with a targeted SEO Company that enhances product visibility."],
  ["Education", "Attract more students by optimizing your academic institution's online presence."],
  ["Hospitality", "Increase bookings and attract travelers with SEO Company for hotels, restaurants, and travel hubs."],
  ["Technology and IT", "Expand your tech company's reach with SEO Company strategies tailored to technology-specific keywords."],
  ["Automotive", "Drive local customer traffic to your dealership or auto repair shop with a focused automotive SEO Company."],
];

export default function IndustriesGrid({subTitle, title = "Industries We Proudly Serve", desc = "No matter the NATURE or SCALE of your business, enhance your online value with our assistance!"}) {
  return (
    <div className="md:py-[70px] py-[50px]">
      <div className="container">
        <div className="text-center mb-12">
          {subTitle && <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">{subTitle}</span>}

          {title && <FadeText text={title} className={`text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] xs:pb-[10px] font-semibold text-[#202124]  mb-2`} direction="up" />}
          {desc && <FadeText text={desc} className={`text-[14px] lg:text-[16px] 2xl:w-[75%] lg:w-[85%] mx-auto block leading-[26px] font-normal `} direction="up" />}
        </div>
        <div id="photos">
          <div className="columns-1 md:columns-2 gap-5 lg:columns-3">
            {images.map((imageUrl, idx) => {
              const [title, description] = titles[idx] || ["", ""];
              return (
                <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView className="relative">
                  <Image className="mb-4 size-full rounded-lg object-contain" src={imageUrl} alt={`Random stock image ${idx + 1}`} width={600} height={800} />
                  <div className="flex flex-col justify-center absolute bottom-0 left-0 right-0 bg-black/45 p-4 rounded-b-[30px]">
                    <h3 className="text-[30px] font-semibold text-white mb-2">{title}</h3>
                    <p className="text-white text-[14px]">{description}</p>
                  </div>
                </BlurFade>
              );
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
}
