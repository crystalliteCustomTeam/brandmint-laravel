// Components
import { CTA, FadeText, WordFadeIn } from "@/components"

let data = [
  {
    title: "A Brief Introduction",
    desc: "First, we fully comprehend your company, objectives, target market, and past marketing initiatives. This aids in developing a custom SEO plan and national SEO packages that precisely fit your requirements."
  },
  {
    title: "Creating Your Own Plan",
    desc: "Our observations help us create a three—to six-month plan. When paired with other digital marketing tactics, our SEO services provide a well-rounded plan for your company."
  },
  {
    title: "Initiating the Partnership",
    desc: "We seal the deal once you accept the layout and cost. After settling the initial payment, our staff begins implementing the action plan to deliver results."
  },
  {
    title: "Continual Revisions and Updates",
    desc: "We hold monthly meetings to review progress, discuss outcomes, and make necessary adjustments. This keeps your company running smoothly and our methods effective."
  },
  {
    title: "Adaptable and Quick",
    desc: "We recognize that business needs are dynamic. You have the freedom to adjust at any time by pausing or terminating our services. As the best SEO company, we assist with your development at every stage."
  }
]

export default function Strategies() {
  return (
    <section >
      <div className="container">
        <div className="text-center">
          <WordFadeIn words="  How Our SEO Strategy Powers Your Business" className="text-[32px] md:text-[30px] lg:text-[42px] xl:text-[50px] font-semibold text-[#202124] leading-tight mb-4" />
          <FadeText text="<p> At SEO Company, we take the time to learn about your business in depth. Being one of the leading SEO service providers, here's how we draft the perfect formula to increase your website ranks.</p>" className="max-w-[970px] mx-auto py-3 text-[14px] md:text-[16px]"
            direction="left"
          />

        </div>
      </div>
      <div className="container mt-10">
        {/* <div className="grid grid-cols-12 group text-[#CBCBCB] py-8"> */}
        {
          data?.map(({ title, desc }, i) => (
            <div className="grid grid-cols-12 group text-[#8d8d8d] py-8 gap-x-5" key={i}>
              <div className="col-span-1 md:col-span-1">
                <FadeText text={`<span>0${i + 1}</span>`} className="number group-hover:text-[#E1183A] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold" />
              </div>
              <div className="col-span-11 me-10 xl:me-24 md:col-span-5">
                <FadeText text={`<h3>${title}</h3>`} className="title mb-5 group-hover:text-[#E1183A] text-[17px] sm:text-[20px] xl:text-[30px] font-semibold" />
              </div>
              <div className="col-span-12 md:col-span-6">
                <FadeText text={`<p>${desc}</p>`} className="content text-[14px] md:text-[16px] text-justify md:text-left group-hover:text-[#1e1f20]" />
              </div>

            </div>
          ))
        }

        <div className="flex gap-2 mt-5 justify-center">
          <CTA text={'GET STARTED NOW'} />
          <CTA text={'Contact'} variant='icon' icon={true} />
        </div>
      </div>
    </section>
  )
}
