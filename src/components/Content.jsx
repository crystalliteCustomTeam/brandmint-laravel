import Image from "next/image";
import React from "react";
import { CTA } from ".";

export default function Content({
  subTitle, 
  title, 
  desc, 
  classes = "", 
  direction = "", 
  img1}) {
  return (
    <section>
      <div className={` ${classes} bg-cover bg-center`}>
        <div className="container">
          <div className={`flex gap-x-20 gap-y-10 items-center justify-center flex-wrap lg:flex-nowrap ${direction}`}>
            <div className="basis-4/12">
              <Image src={img1} alt="Brandmint" className="lg:max-w-full max-w-[300px]" width={600} height={500} />
            </div>
            <div className="basis-7/12">
              <div>
                {subTitle && <span className="text-[12px]" dangerouslySetInnerHTML={{__html: subTitle}} />}
                {title && <h3 className="2xl:text-[55px] xl:text-[45px] md:text-[40px] text-[30px] font-medium leading-snug mb-3" dangerouslySetInnerHTML={{__html: title}} />}
                {desc && <p className="2xl:text-[18px] xl:text-[16px] text-[14px] font-light mb-5" dangerouslySetInnerHTML={{__html: desc}} />}
                <div className="flex gap-2 mt-5">
                  <CTA text={"GET STARTED NOW"} />
                  <CTA text={"Contact"} variant="icon" icon={true} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
