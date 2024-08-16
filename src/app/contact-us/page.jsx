import { CallAway, ContactUsForm, FAQs, Hero } from "@/components";
import React from "react";

// Media
import HeroImg from "media/contactus.png";

export default function page() {
  return (
    <main>
      <Hero
        subTitle="America's #1 Internet Marketing Company"
        title="SEO Company That Maximize Sales & Profitability"
        marqueeTheme="light"
        img={HeroImg}
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        gridleft="col-span-12 lg:col-span-7"
        gridright="col-span-12 lg:col-span-5"
        form={true}
        titleCss="xs:text-[30px] text-[45px] md:text-[35px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]"
      />

      <div className="xs:py-[50px] py-[90px]">
        <ContactUsForm />
      </div>
      <div className="py-[30px] lg:py-[90px]">
        <CallAway
          title="Achieve The Best SEO Results By Hiring Us!"
          desc="Need expert digital marketing help? We are here for you. We are the #1 SEO company, providing <br class='hidden 2xl:block'/> a complete digital marketing solution for your business."
          titleClass="xs:text-[24px] text-[24px] sm:text-[28px]  lg:text-[40px] xl:text-[50px] 2xl:text-[55px] "
        />
      </div>
      <div className="py-[50px] lg:py-[90px]">
        <FAQs
          items={[
            {
              title: "How long does SEO take to see results?",
              content:
                "SEO typically takes time to yield noticeable results, often several months depending on various factors such as competition, industry, and current website status.",
            },
            {
              title: "Why should I choose local SEO experts for my business?",
              content:
                "Local SEO experts specialize in optimizing your online presence to target an audience in your specific geographic area, which can increase foot traffic and sales.",
            },
            {
              title: "What are the benefits of partnering with us?",
              content:
                "Partnering with us provides access to top-tier White Label SEO services, ensuring effective solutions for your clients without the need for in-house expertise.",
            },
            {
              title: "How does SEO Company execute its SEO service delivery?",
              content:
                "SEO Company implements its SEO services through comprehensive strategies, including keyword research, content optimization, technical SEO, and ongoing adjustments.",
            },
            {
              title: "What is included in on-page SEO services?",
              content:
                "On-page SEO services encompass optimizing web content, meta tags, headings, and internal links to enhance search engine rankings and user experience.",
            },
            {
              title: "Why is SEO important for your business?",
              content:
                "SEO is essential for maintaining online visibility, attracting potential customers, and remaining competitive in today's digital scene.",
            },
          ]}
        />
      </div>
    </main>
  );
}
