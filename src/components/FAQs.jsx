import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components"

export default function FAQs({ items }) {
    return (
        <section>
            <div className="text-foreground">
                <div className="container">
                    <h2 tabIndex={0} className="mb-8 md:mb-14 text-center text-[30px] md:text-[40px] lg:text-[50px] font-semibold leading-normal">
                    FAQS
                    </h2>
                    <Accordion type="single" collapsible  className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                        { 
                            items?.map(({ title, content }, i) => (
                                <AccordionItem key={i} value={`item-${i + 1}`} className="h-auto">
                                    <AccordionTrigger>
                                        {title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p dangerouslySetInnerHTML={{ __html: content }} />
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}