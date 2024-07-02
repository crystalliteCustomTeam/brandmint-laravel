import { CTA, } from ".";

export default function SeoServiceSteps({items}) {
    return (
        <div>
            <div className="container text-center">
                <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[60px] font-medium">
                    Our Local SEO Services Entail a <br class='hidden md:block' />
                    <span className="text-[#E1183A]">Versatile Series of Steps</span>
                </h2>

                <p className="py-3 text-[16px] font-light">
                    If you want to remain one step ahead of your competitors and be your clients' first choice, you must win your local clients' trust. With our SEO local services, you can increase your conversion rates. Jumpto1 executes the following to serve you with the best local SEO services.
                </p>
            </div>
            <div className="container">
                {
                    items?.map(({no,title,content,borderColor}, i) => (
                    <div key={i} className="grid grid-cols-12 items-center my-[50px] md:min-h-[170px] min-h-[170px]">
                        <div className={`title col-span-12 md:col-span-4 h-full flex items-center text-[16px] sm:text-[18px] xl:text-[27px]`}>
                            <div className="flex">
                                <span className="pr-2">{no}.</span> {title}
                            </div>
                        </div>
                        <div className={`content col-span-12 md:col-span-8 md:ms-[30px] ms-[0] ps-[50px] border-l-[3px] ${borderColor} text-[14px] md:text-[15spx] xl:text-[18px] text-justify md:text-left group-hover:text-[#202124] font-light`}>
                            {content}
                        </div>
                    </div>
                    ))    
                }
                {/* <SeoServiceStepsRow no="01" title="Local SEO Audit" content="Our local SEO Company conducts an exhaustive local SEO audit to define your existing local SEO ranking, acquire actionable insights and make your local SEO checklist. Jumpto1 checks your NAP visibility, determines your geographical area and service zones, and investigates your Google My Business listing. To achieve your local SEO strategy, our local SEO specialists also execute a Google My Business page audit, examine analysis, audit the landing page, analyze local citations, opponent benchmarking, and analyze organic links." borderColor="border-[#0085F8]"/>
                <SeoServiceStepsRow no="02" title="Keyword Research & Strategy" content="We conduct extensive keyword investigation and analysis to recognize geo-specific, industry-corresponding keywords and categorize them by search intent. Once Jumpto1’s local SEO specialist has outlined your search terms, he makes a local SEO manual to help you devise locally-centric website content." borderColor="border-[#EF4252]"/> */}
                <div className="flex gap-2 mt-5 justify-center">
                    <CTA text={'GET STARTED NOW'} />
                    <CTA text={'Contact'} variant='icon' icon={true} />
                </div>
            </div>
        </div>
    )
}
