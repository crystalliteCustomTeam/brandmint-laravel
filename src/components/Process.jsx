import process from "media/process.svg"
import Image from "next/image"
import idea from "media/process/idea.png"
import plan from "media/process/plan.png"
import development from "media/process/development.png"
import success from "media/process/success.png"

export default function Process() {
  return (
    <div className="xs:py-[50px] py-[90px] bg-[url('/bg-gradient.png')] bg-cover bg-center bg-no-repeat">
      <div className="container">
          <h2 className="text-center text-[24px] sm:text-[32px] lg:text-[32px] xl:text-[40px] 2xl:text-[50px] mb-[22px] font-semibold"> 
                 The Art of Creating Custom Web Design <br className='hidden lg:block' />
                 Services for Your Brand
          </h2>
          <div className="pt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 items-center text-center">
              <div className="">
                <Image src={idea} className="h-[210px] sm:h-[212px] md:h-[300px] lg:h-[198px] xl:h-[236px] 2xl:h-[280px] mx-auto w-[254px] md:w-full" alt="Concept" />
                <h3 className="text-[25px] md:text-[32px] xl:text-[40px] font-medium mt-[15px] mb-0 md:mb-[15px] text-[#4E81EC]">Concept</h3>
                <p className="text-[15px]">We First  Communicate!</p>
              </div>
              <div className="">
                <Image src={plan} className="h-[210px] sm:h-[212px] md:h-[300px] lg:h-[198px] xl:h-[236px] 2xl:h-[280px] mx-auto w-[254px] md:w-full" alt="Planning" />
                <h3 className="text-[25px] md:text-[32px] xl:text-[40px] font-medium mt-[15px] mb-0 md:mb-[15px] text-[#24BF5A]">Planning</h3>
                <p className="text-[15px]">Strategizing</p>
              </div>
              <div className="">
                <Image src={development} className="h-[210px] sm:h-[212px] md:h-[300px] lg:h-[198px] xl:h-[236px] 2xl:h-[280px] mx-auto w-[254px] md:w-full" alt="Development" />
                <h3 className="text-[25px] md:text-[32px] xl:text-[40px] font-medium mt-[15px] mb-0 md:mb-[15px] text-[#E1183A]">Development</h3>
                <p className="text-[15px]">Project Goes Into Execution</p>
              </div>
              <div className="">
                <Image src={success} className="h-[210px] sm:h-[212px] md:h-[300px] lg:h-[198px] xl:h-[236px] 2xl:h-[280px] mx-auto w-[254px] md:w-full" alt="Launch" />
                <h3 className="text-[25px] md:text-[32px] xl:text-[40px] font-medium mt-[15px] mb-0 md:mb-[15px] text-[#F8BF19]">Launch</h3>
                <p className="text-[15px]">Project Becomes Product!</p>
              </div>
          </div>
      </div>
    </div>
  )
}
