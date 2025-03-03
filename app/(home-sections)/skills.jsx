import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Cog, Handshake, Headset, Lightbulb } from 'lucide-react'
  
const Skills = () => {
  return (
    <section className='py-10 md:py-20 px-8 md:px-20 skills-section'>
        <div className="container px-4 md:px-12 ">
            <div className="flex gap-5 flex-wrap">
                <Card className="w-[300px] p-6 flex items-center  gap-4 flex-grow skills-card border-[#acd147]">
                    <CardContent className="p-0">
                        <div className="icon w-20 h-20 rounded-full bg-[#acd147] flex items-center justify-center"> <Handshake color='white' size={40} /> </div>
                    </CardContent>
                    <CardHeader className="p-0">
                        <CardTitle className="text-[#143745] text-3xl">Friendly Team</CardTitle>
                    </CardHeader>
                </Card>
                <Card className="w-[300px] p-6 flex items-center  gap-4 flex-grow skills-card border-[#acd147]">
                    <CardContent className="p-0">
                        <div className="icon w-20 h-20 rounded-full bg-[#acd147] flex items-center justify-center"> <Headset color='white' size={40} /> </div>
                    </CardContent>
                    <CardHeader className="p-0">
                        <CardTitle className="text-[#143745] text-3xl">Support 24/7</CardTitle>
                    </CardHeader>
                </Card>
                <Card className="w-[300px] p-6 flex items-center  gap-4 flex-grow skills-card border-[#acd147]">
                    <CardContent className="p-0">
                        <div className="icon w-20 h-20 rounded-full bg-[#acd147] flex items-center justify-center"> <Cog color='white' size={40} /> </div>
                    </CardContent>
                    <CardHeader className="p-0">
                        <CardTitle className="text-[#143745] text-3xl">Perfect Work</CardTitle>
                    </CardHeader>
                </Card>
                <Card className="w-[300px] p-6 flex items-center  gap-4 flex-grow skills-card border-[#acd147]">
                    <CardContent className="p-0">
                        <div className="icon w-20 h-20 rounded-full bg-[#acd147] flex items-center justify-center"> <Lightbulb color='white' size={40} /> </div>
                    </CardContent>
                    <CardHeader className="p-0">
                        <CardTitle className="text-[#143745] text-3xl"> Brilliant Idea </CardTitle>
                    </CardHeader>
                </Card>

            </div>
        </div>
    </section>
  )
}

export default Skills