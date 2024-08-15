import { BlurFade, BoxReveal, CTA, } from ".";

export default function SeoServiceSteps(
    {
        title = `Our Local SEO Services Entail a <br class='hidden md:block' /> <span class="text-[#E1183A]">Versatile Series of Steps</span>`,
        description = "If you want to remain one step ahead of your competitors and be your clients' first choice, you must win your local clients' trust. With our SEO local services, you can increase your conversion rates. Jumpto1 executes the following to serve you with the best local SEO services.",
        items }) {
    return (
        <div>
            <div className="container text-center">
                <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] font-semibold" dangerouslySetInnerHTML={{ __html: title }} />

                <p className="py-3 text-[16px] font-light" dangerouslySetInnerHTML={{ __html: description }} />

            </div>
            <div className="container">
                {
                    items?.map(({ no, title, content, borderColor }, i) => (
                        <BlurFade delay={0.1} key={i} duration={1} inView={true} boxColor="#ec4139">
                            <div className="grid grid-cols-12 items-center md:py-[50px] py-[25px] md:min-h-[270px] min-h-auto border-b border-[#707070] last-of-type:border-none">
                                <div className={`title col-span-12 md:col-span-3 h-full flex items-center  mb-5 md:mb-0`}>
                                    <div className="flex">
                                        <span className="pr-2 text-[16px] sm:text-[18px] xl:text-[27px] font-medium">{no}.</span> <h4 className="text-[16px] sm:text-[18px] xl:text-[27px] font-medium" dangerouslySetInnerHTML={{ __html: title }} />
                                    </div>
                                </div>
                                <div className={`content col-span-12 md:col-span-9 h-full flex items-center md:ms-[30px] ms-[0] md:ps-[50px] ps-[25px] border-l-[3px] ${borderColor} text-justify md:text-left group-hover:text-[#202124] `}>
                                    <p className="text-[14px] md:text-[15spx] xl:text-[18px] font-light" dangerouslySetInnerHTML={{ __html: content }} />
                                </div>
                            </div>
                        </BlurFade>
                    ))
                }
            </div>
        </div>
    )
}
