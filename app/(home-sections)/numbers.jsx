import { NumberTicker } from '@/components/magicui/number-ticker'
import React from 'react'

const Numbers = () => {
    const items = [
        {
            number: 80,
            title: 'Successful Projects',
            img: '/icons/badge.gif',
        },
        {
            number: 130,
            title: 'Media Activities',
            img: '/icons/checklist.gif',
        },
        {
            number: 15,
            title: 'Skilled Experts',
            img: '/icons/personal-branding.gif',
        },
        {
            number: 30,
            title: 'Happy Clients',
            img: '/icons/medal.gif',
        },
    ]
  return (
    <section className='numbers-section px-8 md:px-20 relative'>
        <div className="container p-12 rounded-3xl bg-[#143745] gap-4 flex justify-between items-center">
            {items.map((item, index) => (
                <div key={index} className="box flex gap-4 items-center justify-center">
                    <div className="icon w-20 h-20 rounded-2xl bg-white flex items-center justify-center">
                        <img  src={item.img} alt="badge" />
                    </div>
                    <div className="content">
                        <h6 className=" text-4xl font-bold text-white"> 
                            <NumberTicker
                                value={item.number}
                                className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-white "
                                />+
                            </h6>
                        <p className="text-white font-semibold text-xl text-center">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Numbers