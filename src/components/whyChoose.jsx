import Image from "next/image";

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
              <h3 className={`lg:text-[50px] md:text-[40px] text-[25px] font-medium text-[#202124] mx-auto ${theme == "light" ? "text-[#202124]" : "text-white"} mb-2`} dangerouslySetInnerHTML={{__html: title}} />
            )}
            {desc && <p className={`text-[14px] lg:text-[16px] mx-auto block leading-[26px] font-light ${theme == "light" ? "text-[#202124]" : "text-white"}`} dangerouslySetInnerHTML={{__html: desc}} />}
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-3 ">
            {data?.map(([image, title, desc], i) => (
              <div key={i} className="flex flex-col justify-center gap-3 lg:min-h-[450px] min-h-[400px] even:border-[1px] even:border-solid  even:shadow-lg lg:px-[25px] px-[15px] lg:py-[40px] py-[30px] even:rounded-[30px]">
                <Image src={image} alt="Brandmint" className="w-[70px] h-[70px] mb-[20px]" width={50} height={50} />
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
