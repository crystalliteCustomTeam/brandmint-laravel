// Components
import {AutoScrollSlider} from "@/components";
// Media
import award1 from "media/awards/1.png";
import award2 from "media/awards/2.png";
import award3 from "media/awards/3.png";
import award4 from "media/awards/4.png";
import award5 from "media/awards/5.png";
import award6 from "media/awards/6.png";
import award7 from "media/awards/7.png";
// Next
import Image from "next/image";

const list = [
  {
    listTitle: "5,000 Fastest Growing Private Companies in America",
    listComapny: "Inc. Magazine 2018-2023",
  },
  {
    listTitle: "Best Places to Work in South Florida",
    listComapny: "SF Business Journal",
  },
  {
    listTitle: "Fastest Growing Companies in North America 2020-2024",
    listComapny: "Financial Times",
  },
  {
    listTitle: "Hype Entrepreneur of the Year",
    listComapny: "Greater Miami COC",
  },
  {
    listTitle: "50 Fastest Growing Companies in South Florida",
    listComapny: "SF Business Journal 2017-2021",
  },
];

export default function Awards() {
  return (
    <section>
      <div >
        <div className="container">
          <h3 className="xl:text-[50px] text-[40px] mb-3 font-medium">
            Awards <span className="text-[#E1183A]">&</span> Recognition
          </h3>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-y-10 items-center">
            <div className="hidden md:block">
              <ul className="space-y-[6px] list-none relative">
                <div className="before:lg:absolute before:lg:w-[1px] before:lg:h-[100%] before:lg:bg-[#707070] before:lg:right-0 before:lg:top-0 before:lg:bottom-0"></div>
                {list?.map((e, i) => (
                  <li key={i} className="hover:bg-[#f3f3f3de] p-2 hover:shadow-sm pl-6">
                    <div className="relative before:absolute before:w-[6px] before:h-[6px] before:rounded-[100%] before:bg-[#000] before:left-0 before:top-[8px] before:-ml-4"></div>
                    <p className="xs:text-[14px] sm:text-[16px] xl:text-[18px] mb-3">{e.listTitle}</p>
                    <span className="text-[14px] text-[#6B6B6B]">{e.listComapny}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <AutoScrollSlider>
                {[award1, award2, award3, award4, award5, award6, award7].map((e, i) => (
                  <div key={i} className="grow-0 group shrink-0 basis-auto min-w-0 pl-4">
                    <Image tabIndex={0} key={i} src={e} alt="awards" className=" w-[300px]" />
                  </div>
                ))}
              </AutoScrollSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
