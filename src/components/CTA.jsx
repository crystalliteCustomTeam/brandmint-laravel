// Shadcn
import { ButtonVariants } from "@/components"

const CTA = ({
    variant = "default",
    href = "javascript:;",
    text,
    className = " "
}) => {
    return (
        <div className={ButtonVariants({ variant: variant, size: "default", className })} dangerouslySetInnerHTML={{
            __html: `
            <a tabIndex="0" href=${href} class="xs:text-[14px] sm:text-[15px] text-[16px]  mx-auto h-full flex items-center justify-center">
                <span>${text}</span>
            </a>
        ` }} />
    )
}
export default CTA