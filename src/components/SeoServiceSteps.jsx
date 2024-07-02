import { CTA, } from ".";

export default function SeoServiceSteps(
    {
        title = `Our Local SEO Services Entail a <br class='hidden md:block' /> <span class="text-[#E1183A]">Versatile Series of Steps</span>`,
        description = "If you want to remain one step ahead of your competitors and be your clients' first choice, you must win your local clients' trust. With our SEO local services, you can increase your conversion rates. Jumpto1 executes the following to serve you with the best local SEO services.",
        items}) {
    return (
        <div>
            <div className="container text-center">
                <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[60px] font-medium" dangerouslySetInnerHTML={{__html : title}}/>

                <p className="py-3 text-[16px] font-light">
                {description}
                </p>
            </div>
            <div className="container">
                {
                    items?.map(({no,title,content,borderColor}, i) => (
                    <div key={i} className="grid grid-cols-12 items-center md:my-[50px] my-[25px] md:min-h-[170px] min-h-auto">
                        <div className={`title col-span-12 md:col-span-4 h-full flex items-center text-[16px] sm:text-[18px] xl:text-[27px] mb-5 md:mb-0`}>
                            <div className="flex">
                                <span className="pr-2">{no}.</span> {title}
                            </div>
                        </div>
                        <div className={`content col-span-12 md:col-span-8 h-full flex items-center md:ms-[30px] ms-[0] md:ps-[50px] ps-[25px] border-l-[3px] ${borderColor} text-[14px] md:text-[15spx] xl:text-[18px] text-justify md:text-left group-hover:text-[#202124] font-light`}>
                            {content}
                        </div>
                    </div>
                    ))    
                }
                <div className="flex gap-2 mt-5 justify-center">
                    <CTA text={'GET STARTED NOW'} />
                    <CTA text={'Contact'} variant='icon' icon={true} />
                </div>
            </div>
        </div>
    )
}
