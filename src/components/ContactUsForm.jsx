"use client"
// Next
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import location from "media/location-icon.png"
import phone from "media/phone-icon.png"
import email from "media/email-icon.png"
import { Checkbox } from "./ui/checkbox"
import Link from "next/link"
// React Hook Form
import { useForm } from "react-hook-form"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Components
import { Input, Label, Button } from "@/components"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name cannot be empty",
  }),
  phone: z
    .string({
      required_error: "phone is required",
      invalid_type_error: "phone must be a string",
    })
    .min(7, {
      message: "phone must be at least 7 characters.",
    })
    .max(14, {
      message: "phone must be at most 14 characters.",
    })
    .regex(/^\d+$/, {
      message: "phone number can only contain digits.",
    }),
  email: z.string().email({
    message: "please use a valid email",
  }),
  company: z.string().min(1, {
    message: "company cannot be empty",
  }),
  website: z.string().url({
    message: "please use a valid url",
  }),
  message: z.string().min(1, {
    message: "message cannot be empty",
  }),
  service: z.array(z.string()).min(1, {
    message: "please select at least one service",
  }),
})

const detailData = [
  {
    imgIcon: location,
    text: "305 Madison Ave S, Bainbridge Island, WA 98110",
    URL: "https://maps.app.goo.gl/MMb7ZSqyo1oDnJVL9",
  },
  {
    imgIcon: location,
    text: "Operations: 7 Coronation Road, Dephna House, Launchese, London, United Kingdom, NW10 7PQ",
    URL: "javascript:;",
  },
  {
    imgIcon: phone,
    text: "(717)-908-1211",
    URL: "tel:717-908-1211",
  },
  {
    imgIcon: phone,
    text: "833-666-6684",
    URL: "tel:833-666-6684",
  },
  {
    imgIcon: email,
    text: "hello@seo-company.us",
    URL: "mailto:hello@seo-company.us",
  },
]

export default function ContactUsForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const formControl = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      website: "",
      message: "",
      service: "",
    },
  })
  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      router.push("/thank-you")
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <section>
      <div>
        <div className="container">
          <div>
            <h2 className="text-[24px] sm:text-[32px] lg:text6+-[40px] xl:text-[50px] text-center font-semibold leading-snug">
              We've Driven Over 5,590 Leads For Clients{" "}
              <br className="xl:block hidden" /> Through Search Engine
              Optimization.
            </h2>
            <p className="mt-5 font-light text-[16px] text-center">
              Fill in the form below to instantly schedule a call with us.
            </p>
          </div>
          <div className="grid grid-cols-12 mt-10 gap-8">
            <div className="lg:col-span-8 col-span-12">
              <Form {...formControl}>
                <form onSubmit={formControl.handleSubmit(handleSubmit)}>
                  <div className="grid md:grid-cols-2 lg:gap-5 gap-x-2 gap-y-4">
                    <div>
                      <FormField
                        control={formControl.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Full Name"
                                className="xl:!py-4 !py-3 !border-[1px] rounded-full border-[#707070] px-5 text-black"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <FormField
                        control={formControl.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Email"
                                className="xl:!py-4 !py-3 !border-[1px] rounded-full border-[#707070] px-5 text-black"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <FormField
                        control={formControl.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Phone"
                                className="xl:!py-4 !py-3 !border-[1px] rounded-full border-[#707070] px-5 text-black"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <FormField
                        control={formControl.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Company/Organizations"
                                className="xl:!py-4 !py-3 !border-[1px] rounded-full border-[#707070] px-5 text-black"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <FormField
                        control={formControl.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Website (Optional)"
                                className="xl:!py-4 !py-3 !border-[1px] rounded-full border-[#707070] px-5 text-black"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <FormField
                    control={formControl.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <textarea
                            {...field}
                            rows={10}
                            id="name"
                            placeholder="Message"
                            className="!border-[1px] rounded-[20px] border-[#707070] px-5 pt-5 text-black block w-full mt-5"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <h2 className="xl:text-[35px] lg:text-[30px] md:text-[25px] font-bold mt-5 text-black mb-5">
                    What Services Can We Provide You?*
                  </h2>
                  <div className="grid lg:grid-cols-3 grid-cols-2 xl:gap-3 lg:gap-2 gap-4">
                    {[
                      [
                        "Optimization (SEO)",
                        "Web Design",
                        "Reputation / Reviews Management",
                        "Web Hosting / Maintenance",
                        "ADA Compliance",
                        "Pay Per Click (PPC)",
                      ],
                      [
                        "eCommerce Optimization",
                        "Content Writing",
                        "Amazon Marketing",
                        "Link Building",
                        "Amazon Marketing",
                        "Link Building",
                      ],
                      [
                        "Social Media",
                        "Conversion Rate Optimization",
                        "Video / Animation",
                        "Email Marketing",
                        "Search Engine Marketing",
                      ],
                    ].map((columnItems, columnIndex) => (
                      <div
                        key={`column-${columnIndex}`}
                        className="flex flex-col gap-y-5"
                      >
                        {columnItems.map((text, itemIndex) => (
                          <div
                            key={`item-${columnIndex}-${itemIndex}`}
                            className="flex items-center gap-2 group"
                          >
                            <FormField
                              control={formControl.control}
                              name="service"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      id={`service-${columnIndex}-${itemIndex}`}
                                      checked={field.value?.includes(text)}
                                      onCheckedChange={(checked) => {
                                        const newValue = checked
                                          ? [...(field.value || []), text]
                                          : (field.value || []).filter((item) => item !== text);
                                        field.onChange(newValue);
                                      }}
                                      className="w-5 h-5 rounded-none border-[3px] group-hover:border-primary"
                                    />
                                  </FormControl>
                                  <Label
                                    htmlFor={`service-${columnIndex}-${itemIndex}`}
                                    className="text-xs lg:text-xs xl:text-sm font-normal text-foreground group-hover:text-primary leading-normal cursor-pointer"
                                  >
                                    {text}
                                  </Label>
                                </FormItem>
                              )}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <Button variant="black" className="mt-8">
                    <span className="xs:text-[14px] text-[18px]">
                      {loading ? "Submitting..." : "Submit Now"}
                    </span>
                  </Button>
                </form>
              </Form>
            </div>

            <div className="lg:col-span-4 col-span-12 md:pl-4">
              <h3 className="xl:text-[45px] font-medium text-[35px] leading-snug mb-5">
                Contact Us
              </h3>
              <ul className="flex flex-col gap-y-5">
                {detailData?.map((e, i) => (
                  <li key={i} className="">
                    <Link
                      href={e.URL}
                      className=" flex items-center justify-start gap-4 group "
                    >
                      <Image
                        src={e.imgIcon}
                        className="w-[20px]"
                        alt="Seo Company US"
                      />
                      <span
                        className="xl:text-[16px] text-[14px] font-light leading-normal group-hover:text-[#EC4139]"
                        dangerouslySetInnerHTML={{ __html: e.text }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
