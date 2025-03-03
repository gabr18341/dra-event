import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { Clock, Map, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NewsLetter = () => {
  return (
    <div className="px-8 md:px-20 news-letter">
      <div className='container mx-4 md:mx-12 rounded-[30px] p-4 md:p-8'>
        <div className="flex">
          <div className="form-box w-full md:w-1/2">
            <h5 className="text-white text-sm md:text-lg font-bold">Leave a Message</h5>
            <p className="text-[#f4f3f8]   text-xs md:text-sm my-3">We’re Ready To Help You</p>
            <form className="flex flex-col gap-4 mt-4">
              <input type="text" placeholder="Your Name" className="rounded-[8px] bg-transparent border border-white p-1 text-white outline-none" />
              <input type="email" placeholder="Your Email" className="rounded-[8px] bg-transparent border border-white p-1 text-white outline-none"  />
              <textarea placeholder="Your Message" className="rounded-[8px] min-h-[150px] bg-transparent border border-white p-2 text-white outline-none"></textarea>
              <div className="mt-4">
                  <InteractiveHoverButton className="px-4 py-3 " type="submit" >Send Message</InteractiveHoverButton>
              </div>
            </form>
          </div>
          <div className="content-box w-full md:w-1/2 md:pl-4">
            <h5 className="text-white text-sm md:text-lg font-bold">USA Office Address</h5>
            <p className="text-[#f4f3f8]   text-xs md:text-sm my-3">Completely recapitalize 24/7 communities via standards compliant metrics whereas web-enabled content</p>
            <div className="mt-4">
              <div className="box-info">
                <div className="icon-box ">
                  <Phone size={25} color='white' />
                </div>
                <div className="">
                  <h6>Phone Number & Email</h6>
                  <p><Link href="mailto:event@dra.agency" >event@dra.agency</Link></p>
                  <p><Link href="tel:920012778" >920012778</Link></p>
                </div>
              </div>
              <div className="box-info">
                <div className="icon-box ">
                  <Map size={25} color='white' />
                </div>
                <div className="">
                  <h6>Our Office Address</h6>
                  <p>Alkawther, Riyadh 13338 Saudi Arabia</p>
                </div>
              </div>
              <div className="box-info">
                <div className="icon-box ">
                  <Clock size={25} color='white' />
                </div>
                <div className="">
                  <h6>Official Work Time</h6>
                  <p>8:00am - 5:00pm ( sun - Thu ) </p>
                  <p>Sat, Fri & Holiday Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default NewsLetter