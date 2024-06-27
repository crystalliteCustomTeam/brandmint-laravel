// Next
import Image from "next/image";
import {CTA} from ".";

export default function CallAway({title, desc, CallAwayImage, bg, Banner, btnClass, btnClass2}) {
  return (
    <section>
      <div >
        <div className="container">
          <div className={`relative z-10 xl:py-[60px] px-[20px] lg:pl-[40px] xl:pl-[60px] lg:py-[40px] pt-[50px] ${bg}`}>
            {Banner && <Image src={Banner} alt="banner" className="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10" priority={true} />}

            <div className="text-white grid md:grid-cols-12 gap-x-5 items-center text-center lg:text-left">
              <div className="lg:col-span-8 col-span-12">
                <h3
                  className="2xl:text-[60px] xl:text-[50px] lg:text-[40px] xs:text-[25px] sm:text-[30px] md:text-[40px] leading-normal font-semibold mb-4"
                  dangerouslySetInnerHTML={{__html: title}}
                />
                <p className="2xl:text-[16px] text-[14px] leading-normal font-light  lg:max-w-[85%] xl:max-w-full" dangerouslySetInnerHTML={{__html: desc}} />
                <div className="flex gap-4 mt-[20px] justify-center lg:justify-start">
                  <CTA text={"GET STARTED NOW"} className={`${btnClass}`} />
                  <CTA text={"Contact"} variant="icon" icon={true} className={`${btnClass2}`} />
                </div>
              </div>
            </div>
            <Image src={CallAwayImage} alt="Call Away" className="lg:absolute xl:max-w-[380px] 2xl:max-w-[450px] lg:max-w-[300px] lg:bottom-0 lg:right-[30px] xl:right-[40px] mx-auto mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
