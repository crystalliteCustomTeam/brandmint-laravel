import check from "media/home/check-mark.svg"
import { CTA, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/index";
import data from "./package.json"
import Image from "next/image";

const Package = ({ id }) => {
    return (
        <section className="packages">
            <div className="container text-center font-medium">
                <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[60px]">
                    Break Your Competition Without <br className='hidden md:block' />
                    <span className="text-[#E1183A]">Breaking Your Bank!</span>
                </h2>

                <p className="max-w-[892px] mx-auto py-3 text-[16px] font-light">
                    We praises its outcomes-oriented SEO services at the most sensible rates ever. We purpose multiple pricing SEO packages to best suit your varying budgets and business goals.
                </p>
            </div>
            <div className="container">
                <Tabs defaultValue="Annually" className="mt-16 text-center">
                    <TabsList className="bg-[#000000] rounded-[50px] inline-flex mb-[50px]">
                        {(data.id === id) && data.package.map(({ name, upto }, i) => (
                            <TabsTrigger key={i} value={name} className="data-[state=active]:bg-[#EC4139] data-[state=active]:text-white  bg-transparent rounded-[50px]
                  border-[#F3F3F3] text-[14px] md:text-[16px] lg:text-[18px] text-[#CBCBCB] px-[22px] md:px-[55px] lg:px-[85px] py-[4px] md:py-[8px] lg:py-[10px] ">
                                <div className=" font-bold">
                                    {name}
                                </div>
                                <div>
                                    <span>Save {upto}</span>
                                </div>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="xl:col-span-8 col-span-12 text-left">
                        {(data.id === id) && data.package.map(({ name, list }, i) => (
                            <TabsContent key={i} value={name} className="grid grid-cols-1 items-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 md:gap-5">
                                    {
                                        list && list?.map((item, i) => (
                                            <div className="bg-[#F2F2F2] even:bg-[#0085F8] even:text-white rounded-[26px] px-[25px]  xl:px-[30px] py-[30px] even:py-[30px] relative" key={i}>
                                                <p className="text-[18px] sm:text-[20px]">{item.name} Plan</p>
                                                <p className="text-[35px] lg:text-[50px]">${item.price} <span className="text-[20px] sm:text-[23px]">Per Month</span></p>
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
                                                        <CTA text={'Order Now'} className="xl:!w-full md:!w-max !w-full z-10 transition-all duration-300 ease-in-out !px-6 !xl:px-10 group-hover:bg-[rgba(68,68,68,0.09)] group-hover:opacity-[9px] group-hover:!pr-[60px] group-hover:text-[#000]" />
                                                        <CTA text={'Call Us'} variant='icon' icon={true} className="xl:!w-full md:!w-max !w-full ml-[-40px] transition-all duration-300 ease-in-out 2xl:!pl-[60px] !pl-[50px] group-hover:!pl-[30px] group-hover:z-20" />
                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                    }

                                </div>

                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}
export default Package;