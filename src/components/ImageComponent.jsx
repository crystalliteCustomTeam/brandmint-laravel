// Next
import Image from 'next/image'
import React from 'react'

// Media
import Img1 from "media/img2.png"

export default function ImageComponent(){
    return (
      <section>
        <Image src={Img1} className='mx-auto md:max-w-[150px] max-w-[100px]' alt='SEO company' width={300} height={100} quality={95}/>        
      </section>
    )
  }
