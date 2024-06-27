// Components
import { CTA} from '@/components'

export default function Strategies({theme = "light"}) {
  return (
    <section >
      <div className="container text-center">
        <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[60px] font-medium leading-snug">
          How Our SEO Strategy Powers<br className="md:block hidden" />
          Your Business
        </h2>
        <p className="max-w-[970px] mx-auto py-3 text-[14px] md:text-[16px]">
          At the heart of our approach is a commitment to truly understanding your business. Here’s how our tailored,  SEO strategy works to amplify your success:
        </p>
      </div>
      <div className="container ">
        <div className="grid grid-cols-12 group text-[#CBCBCB] py-8">
          <div className="number col-span-2 md:col-span-1 group-hover:text-[#E1183A] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold">
            01
          </div>
          <div className="title col-span-9 me-10 xl:me-24 md:col-span-5 mb-5 group-hover:text-[#E1183A] text-[18px] sm:text-[22px] xl:text-[30px] font-semibold">
            Getting to Know You
          </div>
          <div className="content col-span-12 md:col-span-6 text-[14px] md:text-[16px] text-justify md:text-left group-hover:text-[#202124]">
            First, we dive deep. We learn everything about your businessfrom your goals and target audience to reviewing your past marketing efforts. This thorough understanding allows us to craft a perfectly tailored strategy that hits all the right notes.
          </div>
        </div>
        <div className="grid grid-cols-12 group text-[#CBCBCB] py-8">
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
        </div>
        <div className="flex gap-2 mt-5 justify-center">
          <CTA text={'GET STARTED NOW'} />
          <CTA text={'Contact'} variant='black' className={`${theme === "light" ? " " : "!bg-white/20"}`} />
        </div>
      </div>
    </section>
  )
}
