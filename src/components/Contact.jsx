"use client"
// Next
import { useRouter } from "next/navigation"
import Image from "next/image"

import Contactbg from "media/contactBg.png"
import contactborder from "media/contactborder.png"
import buttonImage from "media/buttonImage.png"
// React Hook Form
import { useForm } from "react-hook-form"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Components

import { useState } from "react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Button, Input } from "."

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
export default function Contact({
  title = `Get your <strong>free 30 minutes </strong>strategy
            session with an experienced
            digital marketer valued at
            <strong> $300 USD.</strong>`,
  btnText = "Get My Free 30 Minutes Strategy Session",
}) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm({
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
      <div>
        <div className="container">
          <div className="relative rounded-[25px] overflow-hidden z-10 ">
            <div className="py-[70px] px-[40px]">
              <h2
                className="capitalize text-white xs:text-[20px] text-[25px] md:text-[35px] lg:text-[40px] xl:text-[45px]"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <Image
                src={contactborder}
                alt="SEO company"
                className="max-w-[200px] md:max-w-[300px] my-5"
              />
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-20"
                >
                  <div className="lg:col-span-3 md:col-span-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Full Name <span className="text-red-700">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Type Full Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="lg:col-span-3 md:col-span-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Phone <span className="text-red-700">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Type Phone Number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="lg:col-span-3 md:col-span-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Email Address{" "}
                            <span className="text-red-700">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type Email Address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="lg:col-span-3 md:col-span-6">
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Website Link <span className="text-red-700">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Type Website Link" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button className="col-span-12 w-full flex items-center justify-between mt-10 !bg-[#E1183A] h-[55px] group">
                    <span className="xs:text-[14px] text-[18px]">
                      {loading ? "Loading..." : btnText}
                    </span>
                    <Image
                      src={buttonImage}
                      alt="SEO company"
                      className="hidden sm:block group-hover:rotate-45 transition-transform duration-500 "
                      width={41}
                      height={41}
                    />
                  </Button>
                </form>
              </Form>
            </div>
            <Image
              src={Contactbg}
              alt="SEO company"
              fill={true}
              className="-z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
