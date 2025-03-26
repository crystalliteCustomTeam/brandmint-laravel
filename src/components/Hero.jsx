"use client"
// Next
import { useRouter } from "next/navigation"
import Image from "next/image"
// Media
import usaflag from "media/usa_flag.png"
import ukflag from "media/uk_flag.png"
// Components
import { CTA, MarqueeBlock, Input, Label, Button } from "@/components"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
// React Hook Form
import { useForm } from "react-hook-form"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Components

import { useState } from "react"

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
  website: z.string().url({
    message: "please use a valid url",
  }),
})

export default function Hero({
  subTitle,
  title,
  desc,
  titleCss = "xs:text-[30px] text-[45px] md:text-[35px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]",
  theme = "light",
  marqueeTheme = "dark",
  flag = "usa",
  bg,
  spaceBottom = "pb-[70px] lg:pb-[130px]",
  img,
  imgCss = "",
  marqueeCss = "py-[80px]",
  gridleft = "col-span-12 lg:col-span-6",
  gridright = "col-span-12 md:col-span-6",
  form = false,
  ctaText = "Get in Touch!",
  // ctaText2 = "Contact"
}) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const formControl = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      website: "",
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
      <div className="overflow-hidden pt-[100px]">
        <div className="relative ">
          {bg && (
            <Image
              src={bg}
              alt="SEO company"
              fill
              className="-z-10 opacity-10 lg:opacity-100 object-cover lg:object-fill object-right-bottom"
            />
          )}
          <div className="container relative">
            <div
              className={`grid grid-cols-12 gap-5 items-center ${spaceBottom}`}
            >
              <div className={` ${gridleft} `}>
                <div className="flex gap-2 items-center">
                  <Image
                    src={flag === "usa" ? usaflag : ukflag}
                    alt="SEO company"
                    className="w-[40px] h-[40px]"
                  />
                  {subTitle && (
                    <p
                      className={`lg:text-[16px] xs:text-[12px] sm:text-[14px] ${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      {subTitle}
                    </p>
                  )}
                </div>
                <div
                  className={`mt-5 ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                >
                  {title && (
                    <h1
                      className={`leading-tight font-semibold  ${titleCss}`}
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                  )}
                  {desc && (
                    <p className="mt-5 font-light text-[14px] lg:text-[16px] xs:text-justify">
                      {desc}
                    </p>
                  )}
                  <div className="flex gap-2 mt-5">
                    <CTA text={ctaText} />
                    {/* <CTA text={ctaText2} variant='icon' icon={true} className={`${theme === "light" ? " " : "!bg-white/20"}`} /> */}
                  </div>
                </div>
              </div>
              {form ? (
                <>
                  <div className={`${gridright} relative py-[50px]`}>
                    <Image
                      src={img}
                      alt="SEO company"
                      className={`block mx-auto object-contain ${imgCss}`}
                      fill={true}
                    />
                    <div className="p-10 w-[80%] mx-auto backdrop-blur-sm bg-white/85 shadow-lg rounded-[20px]">
                      <Form {...formControl}>
                        <form
                          className="grid grid-cols-1 gap-5"
                          onSubmit={formControl.handleSubmit(handleSubmit)}
                        >
                          <div>
                            <FormField
                              control={formControl.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      placeholder="Name"
                                      className="border-b-black text-black"
                                      required
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
                                      className="border-b-black text-black"
                                      required
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
                                      className="border-b-black text-black"
                                      required
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
                                      placeholder="Type Your Website"
                                      className="border-b-black text-black"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <Button variant="black" className="mt-5">
                            <span className="xs:text-[14px] text-[18px]">
                              {loading ? "Loading..." : "Submit Now"}
                            </span>
                          </Button>
                        </form>
                      </Form>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className={`${gridright}`}>
                    {img && (
                      <Image
                        src={img}
                        alt="SEO company"
                        className={`block mx-auto ${imgCss}`}
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          <MarqueeBlock theme={marqueeTheme} css={marqueeCss} />
        </div>
      </div>
    </section>
  )
}
