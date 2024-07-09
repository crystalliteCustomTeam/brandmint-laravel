import process from "media/process.svg"
import Image from "next/image"
import twenty from "media/process/20.png"
import thirty from "media/process/30.png"
import eleven from "media/process/11.png"
import threePointNine from "media/process/3.9.png"

export default function AboutProcess() {
  return (
    <div className="xs:py-[50px] py-[90px] bg-[url('/bg-gradient.png')] bg-cover bg-center bg-no-repeat">
      <div className="container">
          <h2 className="text-center text-[24px] sm:text-[32px] lg:text-[32px] xl:text-[40px] 2xl:text-[50px] mb-[22px] font-semibold">
            Digits That Define Our Credibility
          </h2>
          <div className="pt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 items-center text-center">
              <div className="">
                <Image src={twenty} className="h-[210px] sm:h-[212px] md:h-[300px] lg:h-[198px] xl:h-[236px] 2xl:h-[280px] mx-auto w-[254px] md:w-full" alt="idea" />
                <h3 className="text-[20px] md:text-[24px] xl:text-[30px] font-medium mt-[25px] text-[#4E81EC]">Years In<br className='hidden sm:block' />
                Business</h3>
              </div>
              <div className="">
                <Image src={thirty} className="h-[210px] sm:h-[212px] md:h-[300px] lg:h-[198px] xl:h-[236px] 2xl:h-[280px] mx-auto w-[254px] md:w-full" alt="plan" />
                <h3 className="text-[20px] md:text-[24px] xl:text-[30px] font-medium mt-[25px] text-[#24BF5A]">Team<br className='hidden sm:block' />
                Members</h3>
              </div>
              <div className="">
                <Image src={eleven} className="h-[210px] sm:h-[212px] md:h-[300px] lg:h-[198px] xl:h-[236px] 2xl:h-[280px] mx-auto w-[254px] md:w-full" alt="plan" />
                <h3 className="text-[20px] md:text-[24px] xl:text-[30px] font-medium mt-[25px] text-[#E1183A]">Team's Average<br className='hidden sm:block' />
                Experience</h3>
              </div>
              <div className="">
                <Image src={threePointNine} className="h-[210px] sm:h-[212px] md:h-[300px] lg:h-[198px] xl:h-[236px] 2xl:h-[280px] mx-auto w-[254px] md:w-full" alt="plan" />
                <h3 className="text-[20px] md:text-[24px] xl:text-[30px] font-medium mt-[25px] text-[#F8BF19]">Average Client<br className='hidden sm:block' />
                Retention In Years</h3>
              </div>
          </div>
      </div>
    </div>
  )
}
