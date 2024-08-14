import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, BlurFade, WordFadeIn } from "@/components"

export default function FAQs({ items }) {
    return (
        <section>
            <div className="text-foreground">
                <div className="container">

                    <WordFadeIn words="Frequently Asked Questions" className="mb-8 md:mb-14 text-center text-[30px] md:text-[40px] lg:text-[50px] font-semibold leading-normal" />

                    <Accordion type="single" collapsible className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                        {
                            items?.map(({ title, content }, i) => (
                                <BlurFade delay={0.1 * i} duration={2} inView={true} key={i}>
                                    <AccordionItem value={`item-${i + 1}`} className="h-auto">
                                        <AccordionTrigger>
                                            {title}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p dangerouslySetInnerHTML={{ __html: content }} />
                                        </AccordionContent>
                                    </AccordionItem>
                                </BlurFade>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}