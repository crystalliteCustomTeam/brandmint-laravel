import check from "media/home/check-mark.svg"
import { CTA, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/index";
import data from "./package-web.json"
import Image from "next/image";

const PackageWeb = ({ 
    id,
    title =`Break Your Competition Without <br class='hidden md:block' />
                        <span class="text-[#E1183A]">Breaking Your Bank!</span>`,
    desc,
    btnText='Call Us'
 }) => {
    return (
        <section className="packages">
            <div className="container">
                <div className="text-center font-medium">
                    <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] font-semibold"
                    dangerouslySetInnerHTML={{ __html: title }}/>

                    <p className="max-w-[892px] mx-auto py-3 text-[16px] font-light">
                        {desc}
                    </p>
                </div>
                <div defaultValue="Annually" className="mt-16 text-center">
                    <div className="xl:col-span-8 col-span-12 text-left">
                        {(data.id === id) && data.package.map(({ name, list,duration }, i) => (
                            <div key={i} value={name} className="grid grid-cols-1 items-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 md:gap-5">
                                    {
                                        list && list?.map((item, i) => (
                                            <div className="bg-[#F2F2F2] even:bg-[#0085F8] even:text-white rounded-[26px] px-[25px]  xl:px-[30px] py-[30px] even:py-[30px] relative" key={i}>
                                                <p className="text-[18px] sm:text-[20px]">{item.name} Plan</p>
                                                <p className="text-[30px] xl:text-[40px] 2xl:text-[50px]">${item.price} <span className="text-[16px] xl:text-[20px] 2xl:text-[23px]">{duration}</span></p>
                                                <p className="text-[14px]">{item.desc}</p>
                                                <div className="bg-white !text-black rounded-[26px] p-[27px] mt-[25px]">
                                                    <div className="h-[328px] overflow-y-scroll custom-scrollbar">
                                                        {Object.keys(item.items[0]).map((categories, index) => (
                                                            <div key={index}>
                                                                <h5 className="text-[16px] sm:text-[18px] font-bold mb-[8px]">{categories}</h5>
                                                                <ul>
                                                                    {item.items[0][categories].map((details, index) => (
                                                                        <li key={index} className="flex items-center text-[14px] font-light">
                                                                            <span className="me-[10px]"><Image src={check} alt="check icon" /></span>
                                                                            <span>{details}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* <div className="inline-flex mt-5 justify-center group relative h-[45px] items-center group">
                                                    <CTA text={'Order Now'} className="!w-[50%] absolute left-0 group-hover:!w-[60%] transition-all duration-500 group-hover:!bg-[#E2E2E2] group-hover:!text-black" />
                                                    <CTA text={'Call Us'} variant='icon' icon={true} className="!w-[60%] group-hover:!w-[50%] absolute  right-0 transition-all duration-500 group-hover:!bg-[#EC4139]" />
                                                </div> */}
                                                <div className="flex justify-center">
                                                    <div className="inline-flex mt-5 justify-center group w-full">
                                                        <CTA text={'Order Now'} className="xl:!w-full md:!w-max !w-full z-10 transition-all duration-300 ease-in-out !px-6 !xl:px-10 group-hover:bg-[rgb(255,255,255)] group-hover:opacity-[5px] group-hover:!pr-[60px] group-hover:text-[#000]" />
                                                        <CTA text={btnText} variant='icon' icon={true} className="xl:!w-full md:!w-max !w-full ml-[-40px] transition-all duration-300 ease-in-out 2xl:!pl-[60px] !pl-[50px] group-hover:!pl-[30px] group-hover:z-50" />
                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                    }

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PackageWeb;