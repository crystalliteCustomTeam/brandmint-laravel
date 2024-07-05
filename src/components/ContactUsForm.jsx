import { Input, Label, Button } from '@/components'
export default function ContactUsForm() {
    return (
        <section>
            <div>
                <div className="container">
                    <div>
                        <h2 className="font-medium text-center text-[50px]">We've Driven Over 6,437,349 Leads For Clients
                            Through Digital Marketing.</h2>
                        <p className="mt-5 font-light text-[16px] text-center">Fill in the form below to instantly schedule a call with us.</p>
                    </div>
                    <div className="grid grid-cols-12 mt-10">
                        <div className="col-span-8">
                            <form >
                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <Input type="text" id="name" placeholder="Type Full Name" className="!border-2 rounded-full border-gray-500 px-5 text-black" />
                                    </div>
                                    <div>
                                        <Input type="text" id="phone" placeholder="(000) 0000-000" className="!border-2 rounded-full px-5 border-gray-500 text-black" />
                                    </div>
                                    <div>
                                        <Input type="text" id="name" placeholder="Type Full Name" className="!border-2 rounded-full border-gray-500 px-5 text-black" />
                                    </div>
                                    <div>
                                        <Input type="text" id="name" placeholder="Type Your Website" className="!border-2 rounded-full border-gray-500 px-5 text-black" />
                                    </div>
                                    <div>
                                        <Input type="text" id="name" placeholder="Type Your Website" className="!border-2 rounded-full border-gray-500 px-5 text-black" />
                                    </div>
                                    <div>
                                        <Input type="text" id="name" placeholder="Type Your Website" className="!border-2 rounded-full border-gray-500 px-5 text-black" />
                                    </div>
                                </div>
                                <h2 className='text-[35px] font-medium mt-5 text-black'>What Services Can We Provide You?*</h2>
                                <div className='grid grid-cols-3'>
                                    
                                </div>
                                <textarea rows={10} id="name" placeholder="Message" className="!border-2 rounded-[20px] border-gray-500 px-5 pt-5 text-black block w-full mt-5" />
                               

                                <Button variant="black" className="mt-5">
                                    <span className="xs:text-[14px] text-[18px]">Submit Now</span>

                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
