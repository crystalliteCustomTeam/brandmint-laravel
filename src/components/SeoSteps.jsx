export default function SeoSteps({
  title=`Our 6 Step SEO Process Ensures Your Customers <br class="2xl:block hidden" /> Don’t Find Your Competitors, But You!`,
  count = [
    {
      title: "Understanding Your Goals",
      desc: "Once our clients choose to work with us, we arrange initial meetings to better understand their business and marketing goals. This helps us devise rock-solid SEO strategies suitable for their business. In short, we push limits to deliver satisfactory and tangible results every time! We cater to every type of SEO, Shopify SEO, E-commerce SEO, small business SEO, etc.",
    },
    {
      title: "SEO Audit",
      desc: "After gathering their SEO goals, we start executing our process with a complete SEO analysis and SEO audit services for your website. Our SEO experts investigate what your website is missing and elements that need improvisation. Later, we provide our clients with a detailed Search Engine Optimization report highlighting the areas our team will work on, with defined future strategies.audit services for your website. Our SEO experts investigate what your website is missing and elements that need improvisation. Later, we provide our clients with a detailed Search Engine Optimization report highlighting the areas our team will work on, with defined future strategies.",
    },
    {
      title: "Competitive Analysis",
      desc: "The most important aspect of web SEO services is learning about competitors. Our SEO specialists. The most important aspect of web SEO services is learning about competitors. Our SEO specialists perform exhaustive research on the industry to identify the key competitors. We do so to develop a detailed strategy, identify marketing and new link building service.",
    },
    {
      title: "On Page Optimization",
      desc: "On page optimization is perhaps the most important aspect of the entire On page optimization is perhaps the most important aspect of the entire Search Engine Optimization process. Our experts observe Google's latest algorithms to ensure your website is flawless when indexed. Our technical team analyzes your website, tweaks your site code to optimize it to offer you actionable search results. This step ensures your website gets easily found on major search engines.",
    },
    {
      title: "Off Page Optimization",
      desc: "The more authority your site has, the more Google loves it! Our Off page SEO services provider helps your brand build digital authority. With our off-page optimization, including back linking activities, we complete our SEO efforts as one of its attributes.",
    },
    {
      title: "Reporting & Analysis",
      desc: "We don’t hide anything from our customers and keep them in the loop throughout the process of SEO. We don’t hide anything from our customers and keep them in the loop throughout the process of SEO. We offer our clients various reporting options to choose from — weekly, bi-monthly and monthly. Our reports mention data-focused comparisons that we did for planning our strategy. Our thorough result analysis and month-on-month estimates help our clients discover differences between",
    },
  ]
}) {
  return (
    <section>
      <div className={`bg-black`}>
        <div className="container">
          <div className="md:py-[100px] py-[50px] text-white">
            <h3 className="text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[45px] font-semibold text-center md:mb-24 mb-10" dangerouslySetInnerHTML={{__html:title}}/>

            {count.map((e, i) =>
              i % 2 === 0 ? (
                <div key={i} className="md:grid md:grid-cols-12 items-center relative hidden">
                  <div className="md:col-span-5 col-span-12 py-5 border-b-[1px] border-solid border-[#363636]">
                    <h4 className={`relative text-[24px] text-center sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px]`} dangerouslySetInnerHTML={{__html: e.title}} />
                  </div>
                  <div className="md:col-span-2 col-span-12">
                    <div className="2xl:h-[250px] lg:h-[250px] md:h-[200px]  w-1 mx-auto bg-white relative">
                      <span className="absolute bg-[#363636] h-16 flex items-center justify-center w-16 rounded-full text-xl lg:text-2xl xl:text-3xl  font-bold text-center -right-7 xl:top-[35%] lg:top-[35%] top-14">0{++i}</span>
                    </div>
                  </div>
                  <div className="md:col-span-5 col-span-12 ">
                    <p className="text-[12px] lg:text-[14px] xl:text-[14px] leading-normal font-light " dangerouslySetInnerHTML={{__html: e.desc}} />
                  </div>
                </div>
              ) : (
                <div key={i} className="md:grid md:grid-cols-12 items-center relative hidden">
                  <div className="md:col-span-5 col-span-12 ">
                    <p className="text-[12px] lg:text-[14px] xl:text-[14px] leading-normal font-light " dangerouslySetInnerHTML={{__html: e.desc}} />
                  </div>
                  <div className="md:col-span-2 col-span-12">
                    <div className="2xl:h-[250px] lg:h-[250px] md:h-[250px]  w-1 mx-auto bg-white relative">
                      <span className="absolute bg-[#363636] h-16 flex items-center justify-center w-16  rounded-full text-xl lg:text-2xl xl:text-3xl font-bold text-center -left-7 xl:top-[35%] lg:top-[35%] top-14">0{++i}</span>
                    </div>
                  </div>
                  <div className="md:col-span-5 col-span-12 py-5 border-b-[1px] border-solid border-[#363636]">
                    <h4 className={`relative text-[24px] text-center sm:text-[20px]  md:text-[25px] lg:text-[30px] xl:text-[35px]`} dangerouslySetInnerHTML={{__html: e.title}} />
                  </div>
                </div>
              )
            )}

            {count.map((e, i) => (
              <div key={i} className="grid grid-cols-1 items-center relative md:hidden gap-3 ">
                <div className="relative my-8">
                    <span className="bg-[#363636] h-16 flex items-center justify-center w-16 rounded-full text-3xl font-bold text-center mx-auto">0{++i}</span>
                </div>
                <div className="">
                  <h4 className={`relative text-[24px] text-center`} dangerouslySetInnerHTML={{__html: e.title}} />
                </div>

                <div className="text-center">
                  <p className="text-[12px] leading-normal font-light " dangerouslySetInnerHTML={{__html: e.desc}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
