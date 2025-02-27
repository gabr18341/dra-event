import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import React from 'react'

const EventAccess = () => {
  return (
    <section className='event-access  py-10 md:py-20 px-8 md:px-20 my-5'>
        <div className="container px-4 md:px-12 ">
            <div className="content relative z-10">
                <h4>
                You can access us from mobile !
                </h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                 sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris 
                 Excepteur
                </p>
                <div className="mt-4">
                    <InteractiveHoverButton>Git Ticket</InteractiveHoverButton>
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