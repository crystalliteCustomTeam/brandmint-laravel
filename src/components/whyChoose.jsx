export default function whyChoose({subTitle, title, desc, bgClass, classes = " ", gridsClasses = " ", cta = "", data, theme = "light"}) {
  return (
    <section>
      <div >
        <div className="container">
          <div className="text-center mb-12">
            {subTitle && (
              <span className="text-[20px] lg:text-[25px] bg-[#F8BF19] w-max mx-auto rounded-full py-3 px-[2.5rem] block leading-tight font-normal uppercase text-black mb-3 shadow-sm">
                {subTitle}
              </span>
            )}
            {title && (
              <h3 className={`lg:text-[50px] text-[40px] font-medium text-[#202124] mx-auto ${theme == "light" ? "text-[#202124]" : "text-white"} mb-2`} dangerouslySetInnerHTML={{__html: title}} />
            )}
            {desc && <p className={`text-[14px] lg:text-[16px] mx-auto block leading-[26px] ${theme == "light" ? "text-[#202124]" : "text-white"}`} dangerouslySetInnerHTML={{__html: desc}} />}
          </div>

          <div className="grid grid-cols-3 gap-3 even:border-[1px] even:border-solid even:shadow-lg">
                <div>1</div>
                <div>2</div>
                <div>3</div>
          </div>
        </div>
      </div>
    </section>
  );
}
