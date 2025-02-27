import { CheckCircle } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section className=' about-section py-10 md:py-20 px-8 md:px-20'>
        <div className="container px-4 md:px-12 min-h-[70vh] flex gap-8">
            <div className="left-box relative max-w-[50%]">
                <div className="flex gap-4 ">
                    <div className="big-image w-1/3 flex-grow h-full">
                        <img src="/events/1.jpg" alt="events" />
                    </div>
                    <div className="exp-box flex flex-col h-fit justify-center items-center gap-4">
                        <span className="years bg-white rounded-full p-4 text-4xl text-[#143745] w-20 h-20 font-bold ">+5</span>
                        <h6>Years of <br /> Experience</h6>
                    </div>
                </div>
                <div className="small-image">
                    <img src="/events/2.jpg" alt="events" />
                </div>
            </div>
            <div className="about-content">
                <div className="head">
                    <h6>About Us</h6>
                    <h4>
                        Your Trusted Partner in Exhibition & Conference Management
                    </h4>
                </div>
                <p>
                At DRA Agency, We specialize in organizing exhibitions and conferences, offering complete event management solutions. 
From planning and logistics to branding and execution, we ensure seamless and successful events tailored to your needs
                </p>
                <img src="/events/7.jpg" alt="events" />
                <div className="mt-8 flex items-center gap-4 ">
                    <div className="flex items-center gap-4">
                        <CheckCircle size={20} color='#acd147' />
                        <p
                            className="text-sm "
                        >
                            Excellence
                        </p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <CheckCircle size={20} color='#acd147' />
                        <p
                            className="text-sm "
                        >
                            Expert Team
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <CheckCircle size={20} color='#acd147' />
                        <p
                            className="text-sm "
                        >
                            Innovation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About