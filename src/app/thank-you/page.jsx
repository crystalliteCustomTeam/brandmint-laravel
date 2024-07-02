import {Hero, ServicesTabs, Testimonial } from '@/components'
import React from 'react'

export default function thankYou() {
    return (
      <main>
        <Hero
        title="Thank You"
        desc="Get your free 30 minutes strategy session with an experienced digital marketer valued at $300USD."
        />
        <div className="xs:py-[50px] py-[90px]">
        <ServicesTabs />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial />
      </div>
      </main>
    )
  }
