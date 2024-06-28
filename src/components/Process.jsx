import process from "media/process.svg"
import Image from "next/image"

export default function Process() {
  return (
    <div className="container">
        <h2 className="mt-[40px] text-[25px] text-center sm:text-[30px] lg:text-[45px] mb-[22px] font-medium">
            What Goes Into Our Art Of  Creating Affordable <br class='hidden sm:block' />
            Website Design For Your Brand?
        </h2>
        <div className="py-[40px] flex flex-wrap justify-center xl:justify-between items-center gap-12 xl:gap-5">
            <Image src={process} className="" alt="twitter" />
        </div>
    </div>
  )
}
