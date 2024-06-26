import check from "media/home/check-mark.svg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/index";
import data from "./package.json"
import Image from "next/image";

const Package = ({ id = 1 }) => {
    return (
        <section className="packages">
            <div className="container text-center">
                <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[60px]">
                    Break Your Competition Without
                </h2>
                <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[60px] text-[#E1183A]">
                    Breaking Your Bank!
                </h2>

                <p className="max-w-[892px] mx-auto py-3">
                    We praises its outcomes-oriented SEO services at the most sensible rates ever. We purpose multiple pricing SEO packages to best suit your varying budgets and business goals.
                </p>
            </div>
            <div className="container">
                <Tabs defaultValue="Annually" className="mt-16 text-center">
                    <TabsList className="bg-[#000000] rounded-[50px] inline-flex mb-[50px]">
                        {(data.id === id) && data.package.map(({ name, upto }, i) => (
                            <TabsTrigger key={i} value={name} className="data-[state=active]:bg-[#EC4139] data-[state=active]:text-white  bg-transparent rounded-[50px]
                  border-[#F3F3F3] text-[14px] md:text-[16px] lg:text-[18px] text-[#CBCBCB] px-[15px] sm:px-[22px] md:px-[55px] lg:px-[85px] py-[2px] sm:py-[4px] md:py-[8px] lg:py-[10px] ">
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
                                <div className="inline-flex flex-col md:flex-row items-center gap-3 lg:gap-5">
                                    {
                                        list && list?.map((item, i) => (
                                            <div className="bg-[#F2F2F2] even:bg-[#0085F8] even:text-white rounded-[26px] px-[10px] lg:px-[25px] xl:px-[45px] py-[8px] lg:py-[18px] xl:py-[35px] even:py-[18px] even:lg:py-[30px] even:xl:py-[55px]" key={i}>
                                                <p className="text-[20px] ">{item.name} Plan</p>
                                                <p className="text-[35px] lg:text-[50px]">${item.price} <span className="text-[23px]">Per Month</span></p>
                                                <p className="text-[14px]">{item.desc}</p>
                                                <div className="bg-white !text-black rounded-[26px] p-[12px] lg:p-[27px] mt-[25px]">
                                                    <div className="h-[328px] overflow-y-scroll custom-scrollbar">
                                                        {Object.keys(item.items[0]).map((categories, index) => (
                                                            <div key={index}>
                                                                <h5 className="text-[18px] font-bold mb-[8px]">{categories}</h5>
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