import Image from "next/image";
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
export default function whyChoose({subTitle, title, desc, bgClass, classes = " ", gridsClasses = " ", cta = "", data, theme = "light"}) {
  return (
    <section>
      <div>
        <div className="container">
          <div className="text-center mb-16">
            {subTitle && (
              <span className="text-[20px] lg:text-[25px] bg-[#F8BF19] w-max mx-auto rounded-full py-3 px-[2.5rem] block leading-tight font-normal uppercase text-black mb-6 shadow-sm">
                {subTitle}
              </span>
            )}
            {title && (
              <h3
                className={`text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] font-medium text-[#202124] mx-auto ${theme == "light" ? "text-[#202124]" : "text-white"} mb-2`}
                dangerouslySetInnerHTML={{__html: title}}
              />
            )}
            {desc && (
              <p className={`text-[14px] lg:text-[16px] mx-auto block leading-[26px] font-light ${theme == "light" ? "text-[#202124]" : "text-white"}`} dangerouslySetInnerHTML={{__html: desc}} />
            )}
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-3 ">
            {data?.map(([image, title, desc], i) => (
              <div
                key={i}
                className="relative flex flex-col justify-center gap-3 min-h-[450px] hover:border-[1px] hover:border-solid  hover:shadow-lg lg:px-[25px] px-[15px] lg:py-[50px] py-[30px] hover:rounded-[30px] group"
              >
                  <div className="xl:w-[20%] lg:w-[30%] md:w-[35%] w-max group-hover:p-5 p-5 h-full rounded-full mb-[0px] group-hover:bg-[#EC4139]">
                  <Image src={image} alt="Brandmint" className="md:w-[45px] w-[30px] relative z-20 transition-all duration-400 ease-in-out group-hover:brightness-0 group-hover:invert" width={50} height={50} quality={95}/>
                  </div>
                <h3 className="xl:text-[30px] md:text-[20px] text-[25px] font-semibold border-b-[4px] border-b-[#EBEBEB] pb-5 mb-5" dangerouslySetInnerHTML={{__html: title}} />
                <p className="xl:text-[16px] text-[14px] font-light" dangerouslySetInnerHTML={{__html: desc}} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
