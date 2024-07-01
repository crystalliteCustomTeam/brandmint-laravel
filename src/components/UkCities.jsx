import Image from "next/image";

import seoUk from "media/seouk.png";






export default function UkCities() {
    let ulCount = 0;
    return (
        <section>
            <div>
                <div className="container">
                    <div className="grid grid-cols-12 items-end">
                        <div className="col-span-12 lg:col-span-9">
                            <div>
                                <h2 className="xs:text-[25px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-semibold leading-snug">Providing SEO services to multiple
                                    cities across United Kingdom</h2>
                            </div>
                            <div className=" ">

                                <ul className="xs:columns-2 xs:pb-5 sm:pb-5  sm:columns-3 h-[350px] custom-scrollbar overflow-x-scroll  md:h-full md:overflow-auto md:columns-5 mt-[50px] [&_li:first-child_span]:mt-0 [column-rule:solid] [column-rule-width:thin!important] [column-gap:30px]">
                                    {
                                        [
                                            {
                                                country: "England",
                                                cities: [
                                                    "Bath",
                                                    "Birmingham",
                                                    "Bradford",
                                                    "Brighton & Hove",
                                                    "Bristol",
                                                    "Cambridge",
                                                    "Canterbury",
                                                    "Carlisle",
                                                    "Chelmsford",
                                                    "Chester",
                                                    "Chichester",
                                                    "Colchester",
                                                    "Coventry",
                                                    "Derby",
                                                    "Doncaster",
                                                    "Durham",
                                                    "Ely",
                                                    "Exeter",
                                                    "Gloucester",
                                                    "Hereford",
                                                    "Kingston-upon-Hull",
                                                    "Lancaster",
                                                    "Leeds",
                                                    "Leicester",
                                                    "Lichfield",
                                                    "Lincoln",
                                                    "Liverpool",
                                                    "London",
                                                    "Manchester",
                                                    "Milton Keynes",
                                                    "Newcastle-upon-Tyne",
                                                    "Norwich",
                                                    "Nottingham",
                                                    "Oxford",
                                                    "Peterborough",
                                                    "Plymouth",
                                                    "Portsmouth",
                                                    "Preston",
                                                    "Ripon",
                                                    "Salford",
                                                    "Salisbury",
                                                    "Sheffield",
                                                    "Southampton",
                                                    "Southend-on-Sea",
                                                    "St Albans",
                                                    "Stoke on Trent",
                                                    "Sunderland",
                                                    "Truro",
                                                    "Wakefield",
                                                    "Wells",
                                                    "Westminster",
                                                    "Winchester",
                                                    "Wolverhampton",
                                                    "Worcester",
                                                    "York"
                                                ]
                                            },
                                            {
                                                country: "Northern Ireland",
                                                cities: [
                                                    "Armagh",
                                                    "Bangor",
                                                    "Belfast",
                                                    "Lisburn",
                                                    "Londonderry",
                                                    "Newry",
                                                    "Enniskillen"
                                                ]
                                            },
                                            {
                                                country: "Scotland",
                                                cities: [
                                                    "Aberdeen",
                                                    "Dundee",
                                                    "Dunfermline",
                                                    "Edinburgh",
                                                    "Glasgow",
                                                    "Inverness",
                                                    "Perth",
                                                    "Stirling"
                                                ]
                                            },
                                            {
                                                country: "Wales",
                                                cities: [
                                                    "Bangor",
                                                    "Cardiff",
                                                    "Newport",
                                                    "St Asaph",
                                                    "St Davids",
                                                    "Swansea",
                                                    "Wrexham"
                                                ]
                                            },
                                            {
                                                country: "Isle of Man",
                                                cities: [
                                                    "Douglas",
                                                ]
                                            }
                                        ].map(({ country, cities }, i) => (
                                          
                                            <li className="" key={i}>
                                                <span className="xs:text-[16px] sm:text-[14px]  xl:text-[18px]  2xl:text-[20px] font-semibold my-[15px] xl:my-[15px] 2xl:my-[20px] block "> {country}</span>
                                                <ul className="" >
                                                    {cities.map((e, i) => (
                                                        <li className="text-[14px] sm:text-[12px] 2xl:text-[16px] my-[10px] xl:my-[10px] 2xl:my-[15px] text-[#ACABAB]" key={i}>{e}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))
                                    }


                                </ul>
                            </div>
                        </div>
                        <div className="hidden lg:block col-span-3">
                            <Image src={seoUk} alt="SEO company" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
