import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { Circle } from 'lucide-react'
import React from 'react'

const EventAccess = () => {
  return (
    <section className='event-access  py-10 md:py-20 px-8 md:px-20'>
        <div className="container px-4 md:px-12 ">
            <div className="content relative z-10">
                <h4>
                DRA Ticketing – Smart Event & Conference Management
                </h4>
                <p>
                Ticketing System streamlines the organization of trade shows, exhibitions, and conferences with innovative participant management solutions.
                <br />
                 <span className="flex items-center gap-2">
                 <Circle size={10} />
                 Fast Registration & Badge Generation
                 </span>
                 <span className="flex items-center gap-2">
                 <Circle size={10} />
                 Real-Time Access Control & Tracking
                 </span>
                 <span className="flex items-center gap-2">
                 <Circle size={10} />
                 Seamless Exhibitor & Visitor Management
                 </span>
                 
                
                Simplify logistics and enhance event efficiency with DRA System Ticketing.
                Contact us to power your next event!
                </p>
                <div className="mt-4">
                    <InteractiveHoverButton>Get Ticket</InteractiveHoverButton>
                </div>
            </div>
            <div className="event-img">
                <img src="/PHONE.png" alt="bg-event" />
            </div>
        </div>
    </section>
  )
}

export default EventAccess