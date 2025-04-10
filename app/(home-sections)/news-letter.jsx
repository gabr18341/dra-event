"use client";
import React, { useRef, useState } from 'react'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import axios from 'axios'
import { Clock, Map, Phone } from 'lucide-react'
import Link from 'next/link'

const NewsLetter = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const refButton = useRef();
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
            // override: false,
        })
        const [error, setError] = useState("")
        function handelSetData(e) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    async function contact(e) {
      e.preventDefault();
        const btn = refButton.current;
        if (btn) {
            btn.disabled = true;
            try {
                await axios.post(
                    `${baseURL}/tickets/contact/`,
                    formData
                );
                setError("");
                btn.innerHTML = "Send Message";
                btn.disabled = false;
                setFormData({
                    name: "",
                    email: "",
                    message: "",  
                });
            } catch (err) {
                console.log(err.message);
                setError(err.message);
                btn.disabled = false; 
                btn.innerHTML = "Send Message";
            }
        }
        let emailValid = validateEmail(formData.email);
        if ( emailValid && formData.name.length >= 3 && formData.message.length >= 6) {
          btn.innerHTML = "Loading...";
          btn.disabled = true;
            try {
                await axios.post(
                    `${baseURL}/tickets/contact/`,
                    formData
                );
                setError("")
                btn.innerHTML = "Send Message";
                btn.disabled = false;
                setFormData({
                    name: "",
                    email: "",
                    message: "",  
                })
            } catch (err) {
                console.log(err.message);
                setError(err.message)
                btn.disabled = false; 
                btn.innerHTML = "Send Message";
            }
        } else if (emailValid === false) {
            setError("Please enter your email")
        } else if (formData.name.length < 3) {
            setError("Please enter your name")
        } else if (formData.message.length < 6) {
            setError("Please enter your message")
        }
    }

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }
  return (
    <div className="px-8 md:px-20 news-letter">
      <div className='container mx-4 md:mx-12 rounded-[30px] p-4 md:p-8'>
        <div className="flex">
          <div className="form-box w-full md:w-1/2">
            <h5 className="text-white text-sm md:text-lg font-bold">Leave a Message</h5>
            <p className="text-[#f4f3f8]   text-xs md:text-sm my-3">We’re Ready To Help You</p>
            <form onSubmit={contact} className="flex flex-col gap-4 mt-4">
              <input onChange={ handelSetData } name='name' value={formData.name} type="text" placeholder="Your Name" className="rounded-[8px] bg-transparent border border-white p-1 text-white outline-none" />
              <input onChange={ handelSetData } type="email" value={formData.email} name='email' placeholder="Your Email" className="rounded-[8px] bg-transparent border border-white p-1 text-white outline-none"  />
              <textarea onChange={ handelSetData } placeholder="Your Message" value={formData.message} name='message' className="rounded-[8px] min-h-[150px] bg-transparent border border-white p-2 text-white outline-none"></textarea>
              <div className="mt-4">
                  <InteractiveHoverButton ref={refButton} className="px-4 py-3 " type="submit" >Send Message</InteractiveHoverButton>
              </div>
            </form>
          </div>
          <div className="content-box w-full md:w-1/2 md:pl-4">
            <h5 className="text-white text-sm md:text-lg font-bold">Let's create something unforgettable together with DRA Agency</h5>
            {/* <p className="text-[#f4f3f8]   text-xs md:text-sm my-3">Let's create something unforgettable together with DRA Agency</p> */}
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