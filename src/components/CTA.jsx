// Shadcn
import { ButtonVariants } from "@/components"

const CTA = ({
    variant = "default",
    href = "javascript:;",
    text,
    className = " ",
    icon = false
}) => {
    return (
        !icon ? (
            <div className={ButtonVariants({ variant: variant, className })} dangerouslySetInnerHTML={{
                __html: `
                <a tabIndex="0" href=${href} class="xs:text-[14px] sm:text-[15px] text-[16px]  mx-auto h-full  flex items-center justify-center">
                    <span>${text}</span>
                </a>
            ` }} />
        ) : (
            <div className={ButtonVariants({ variant: variant, className })} dangerouslySetInnerHTML={{
                __html: `
                <a tabIndex="0" href=${href} class="xs:text-[14px] sm:text-[15px] text-[16px]  mx-auto h-full gap-5 group flex items-center justify-center">
                    <span>${text}</span>
                    <img src="/ctaicon.svg" alt="icon" class="group-hover:rotate-45 transition-transform duration-500" />
                </a>
            ` }} />
        )
    )
}
export default CTA