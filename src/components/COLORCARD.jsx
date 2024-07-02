import Image from "next/image";
import { CTA } from "@/components"
import Facebook from "media/facebookAdv.png";

export default function COLORCARD(
    {
        title = "Facebook Advertising",
        description = " ",
        image = Facebook,
        btnColor = "!bg-[#26ABFF]",
        extraClass = " ",
        btnText= "Add Your Text",
        ctaCSS = "mx-auto"
    }
) {
    
    
    return (

        <div className={`relative rounded-[20px] md:rounded-[40px] overflow-hidden z-10 py-[40px] md:py-[35px] lg:py-[50px]   xl:py-[70px] text-center ${extraClass} px-[20px] md:px-[15px] lg:px-[30px] xl:px-[40px] h-full flex flex-col justify-between  `}>
            <Image src={image} fill={true} className="-z-10 object-cover " alt="SEO company" />
                <h3 className="sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] text-white mb-5 "> {title}</h3>
                <p className="md:text-[13px]  lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-white font-light">{description}</p>
                <CTA text={btnText} className={`mt-[30px] ${ctaCSS} animate-bounce  !px-2 md:!px-5  xl:!px-10 md:!text-[12px] lg:!text-[14px]  2xl:!text-[18px] xs:!w-full  ${btnColor}`} />
        </div>
    )
}
