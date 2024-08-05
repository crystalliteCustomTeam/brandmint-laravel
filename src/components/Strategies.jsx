// Components
import { CTA } from "@/components"

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
          <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] font-semibold leading-snug text-[#202124]">
          How Our SEO Strategy Powers <br className="md:block hidden" />
          Your Business
          </h2>
          <p className="max-w-[970px] mx-auto py-3 text-[14px] md:text-[16px]">
          At SEO Company, we take the time to learn about your business in depth. Being one of the leading SEO service providers, here's how we draft the perfect formula to increase your website ranks:
          </p>
        </div>
      </div>
      <div className="container mt-10">
        {/* <div className="grid grid-cols-12 group text-[#CBCBCB] py-8"> */}
        {
          data?.map(({ title, desc }, i) => (
            <div className="grid grid-cols-12 group text-[#CBCBCB] py-8 gap-x-5" key={i}>
              <span className="number col-span-1 md:col-span-1 group-hover:text-[#E1183A] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold">
                0{i + 1}
              </span>
              <h3 className="title col-span-11 me-10 xl:me-24 md:col-span-5 mb-5 group-hover:text-[#E1183A] text-[17px] sm:text-[20px] xl:text-[30px] font-semibold">
                {title}
              </h3>
              <p className="content col-span-12 md:col-span-6 text-[14px] md:text-[16px] text-justify md:text-left group-hover:text-[#202124]">
                {desc}
              </p>
            </div>
          ))
        }
        {/* </div> */}
        {/* <div className="grid grid-cols-12 group text-[#CBCBCB] py-8">
          <div className="number col-span-2 md:col-span-1 group-hover:text-[#24BF5A] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold">
            02
          </div>
          <div className="title col-span-9 me-10 xl:me-24 md:col-span-5 mb-5 group-hover:text-[#24BF5A] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold">
            Crafting Your Custom Plan
          </div>
          <div className="content col-span-12 md:col-span-6 text-[14px] md:text-[16px] text-justify md:text-left group-hover:text-[#202124]">
            Based on our findings, we develop an initial plan tailored just for you, covering the next 3-6 months. This isn’t just about SEO; we integrate various digital marketing strategies that align with your specific needs, ensuring a comprehensive approach.
          </div>
        </div>
        <div className="grid grid-cols-12 group text-[#CBCBCB] py-8">
          <div className="number col-span-2 md:col-span-1 group-hover:text-[#4E81EC] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold">
            03
          </div>
          <div className="title col-span-9 me-10 xl:me-24 md:col-span-5 mb-5 max-w-[560px] group-hover:text-[#4E81EC] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold">
            Setting the Partnership in
            Motion
          </div>
          <div className="content col-span-12 md:col-span-6 text-[14px] md:text-[16px] text-justify md:text-left group-hover:text-[#202124]">
            Once you’re happy with the plan and the pricing, we’ll send over a contract for you to sign. After the upfront fee is sorted, our team rolls up their sleeves and gets down to business. It’s time to turn plans into action.
          </div>
        </div>
        <div className="grid grid-cols-12 group text-[#CBCBCB] py-8">
          <div className="number col-span-2 md:col-span-1 group-hover:text-[#F5C228] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold">
            04
          </div>
          <div className="title col-span-9 me-10 xl:me-24 md:col-span-5 mb-5 group-hover:text-[#F5C228] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold">
            Regular Updates and Reviews
          </div>
          <div className="content col-span-12 md:col-span-6 text-[14px] md:text-[16px] text-justify md:text-left group-hover:text-[#202124]">
            We believe in keeping you in the loop. That’s why we schedule monthly meetings to review progress, discuss results, and make any necessary tweaks. This keeps our strategies fresh and your business on the path to success.ght notes.
          </div>
        </div>
        <div className="grid grid-cols-12 group text-[#CBCBCB] py-8">
          <div className="number col-span-2 md:col-span-1 group-hover:text-[#E1183A] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold">
            05
          </div>
          <div className="title col-span-9 me-10 xl:me-24 md:col-span-5 mb-5 group-hover:text-[#E1183A] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold">
            Flexible and Responsive
          </div>
          <div className="content col-span-12 md:col-span-6 text-[14px] md:text-[16px] text-justify md:text-left group-hover:text-[#202124]">
            We understand that business is dynamic. Should anything change in your situation or you need to adjust your marketing plans, you can pause or cancel our services anytime. We’re here to support your growth, however it evolves.
          </div>
        </div> */}
        <div className="flex gap-2 mt-5 justify-center">
          <CTA text={'GET STARTED NOW'} />
          <CTA text={'Contact'} variant='icon' icon={true} />
        </div>
      </div>
    </section>
  )
}
