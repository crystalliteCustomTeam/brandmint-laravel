// Shadcn
import { Button, ButtonVariants } from "@/components"

const CTA = ({
    variant = "default",
    href = "javascript:parent.LC_API.open_chat_window();",
    text,
    className = " ",
    icon = false
}) => {
    return (
        !icon ? (
            <Button className={ButtonVariants({ variant: variant, className })} dangerouslySetInnerHTML={{
                __html: `
                <a tabIndex="0" href=${href} class="  mx-auto h-full  flex items-center justify-center">
                    <span>${text}</span>
                </a>
            ` }} />
        ) : (
            <Button className={ButtonVariants({ variant: variant, className })} dangerouslySetInnerHTML={{
                __html: `
                <a tabIndex="0" href=${href} class="  mx-auto h-full gap-5 group flex items-center justify-center">
                    <span>${text}</span>
                    <img src="/ctaicon.svg" alt="icon" class="group-hover:rotate-45 transition-transform duration-500" />
                </a>
            ` }} />
        )
    )
}
export default CTA