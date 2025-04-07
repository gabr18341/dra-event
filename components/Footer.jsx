"use client";
import React, { useEffect, useState } from 'react'
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ChevronRight, Facebook, Instagram, Twitter, X, Youtube } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';

const Footer = () => {
     
        
  return (
    <footer className='pb-8 bg-[#163744]'>
        <div className="container px-8 md:px-20">
            <div className="flex justify-between sm:gap-4 flex-wrap">
                <div className="w-full lg:w-1/3 xl:w-1/4">
                    <div className="logo mb-4">
                        <img className='w-full h-auto' src="/DRA LOGO light.png" alt="" />
                    </div>
                    <p className='text-white'>
                    Where creativity meets innovation, and every event tells a story. Welcome to DRA Agency
                    </p>
                    <div className="mt-4">
                        <div className="relative social-icons">
                            <Dock className="border-0 m-0" iconMagnification={60} iconDistance={100}>
                                <DockIcon className="bg-black/10 dark:bg-white/10">
                                    <Facebook className="size-full" />
                                </DockIcon>
                                <DockIcon className="bg-black/10 dark:bg-white/10">
                                    <Instagram className="size-full" />
                                </DockIcon>
                                <DockIcon className="bg-black/10 dark:bg-white/10">
                                    <Youtube className="size-full" />
                                </DockIcon>
                                <DockIcon className="bg-black/10 dark:bg-white/10">
                                    <Icons.x className="size-full" />
                                </DockIcon>
                            </Dock>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 sm:w-1/4 mt-8 sm:mt-0">
                    <h6>Explore</h6>
                    <ul>
                        <li>
                            <ChevronRight /> <Link href='#'>Home</Link>
                        </li>
                        <li>
                            <ChevronRight /> <Link href='#about'>About</Link>
                        </li>
                        <li>
                            <ChevronRight /> <Link href='#services'>Our Services</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/2 sm:w-1/4 mt-8  sm:mt-0">
                    <h6>
                    Stay in touch with us
                    </h6>
                    <p>
                    Join our newsletter to stay up to date with the latest news and updates.
                    
                    </p>
                    
                    <div className="mt-4">
                        <Link href={'https://dra.sa/'} style={{padding: "10px 30px"}} className='main-btn '>Read More</Link>
                    </div>
                </div>
                
            </div>
            <div className="border-t mt-2 pt-8 flex justify-between items-center">
                <p className='text-sm'>
                Copyright 2025
                </p>
                <p className='text-sm'>
                All rights reserved <span className='text-[#B5CC34]'><Link href='https://dra.sa/'>DRA</Link></span>
                </p>
            </div>
        </div>
    </footer>
  )
}

const Icons = {
    x: (props) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>X</title>
          <path
            fill="currentColor"
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          />
        </svg>
      ),
  };

export default Footer