import process from "media/process.svg"
import Image from "next/image"

export default function Process() {
  return (
    <div className="container">
        <h2 className="mt-[40px] text-center text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] mb-[22px] font-medium">
            What Goes Into Our Art Of  Creating Affordable <br class='hidden lg:block' />
            Website Design For Your Brand?
        </h2>
        <div className="py-[40px] flex flex-wrap justify-center xl:justify-between items-center gap-12 xl:gap-5">
            <Image src={process} className="w-[100%]" alt="twitter" />
        </div>
    </div>
  )
}
