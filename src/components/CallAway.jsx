// Next
import Image from "next/image";

export default function CallAway({title, desc, CallAwayImage, bg, Banner }) {
  return (
    <section>
      <div className="pt-[80px]">
        <div className="container">
          <div className={`relative z-10 xl:py-[100px] lg:pt-[50px] md:pt-[0px] md:pb-0 py-[50px] px-5 ${bg}`}>
            {Banner && <Image src={Banner} alt="" className="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10" priority={true}/>}
            
            <div className="text-white grid md:grid-cols-12 gap-x-5 items-center">
              <div className="lg:col-span-8 md:col-span-6 md:pl-8">
                <h3 className="2xl:text-[60px] xl:text-[50px] lg:text-[40px] text-[30px] font-semibold mb-3" dangerouslySetInnerHTML={{__html: title}} />
                <p className="" dangerouslySetInnerHTML={{__html: desc}} />
              </div>
              <div className="lg:col-span-4 md:col-span-6">
                <Image src={CallAwayImage} alt="Call Away" className="md:block hidden xl:absolute xl:max-w-[380px] 2xl:max-w-[450px] lg:max-w-[300px] static 2xl:-top-[16%] xl:top-[-35px] top-[-110px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
