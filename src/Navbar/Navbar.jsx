// @ts-nocheck
import React, { useState } from 'react'
import {Menu, X} from "lucide-react"
import logo from "../assets/logo.png"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    const navItems = [
        {title: "Features", path: "/"},
        {title: "Workflow", path: "/workflow"},
        {title: "Pricing", path: "/pricing"},
        {title: "Testimonials", path: "/testimonials"},
    ]
  return (
    
    <header>
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className='container px-4 mx-auto relative text-sm'>
                <div className='flex items-center justify-between'>
                    {/* Loog */}
                    <div className='flex items-center flex-shrink-0'>
                        <img className='w-10' src={logo} alt="" />
                        <span className='text-xl tracking-tight'>Virtualr</span>
                    </div>
                    {/* Navbar Items  */}
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {
                            navItems.map((title, index) => (
                                <li key={index}> 
                                    <a href={title.path}>{title.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='hidden lg:flex justify-center space-x-12 items-center'>
                        <a href="#" className='py-2 px-3 border rounded-md' >Sing In</a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white font-semibold' >Create an account</a>
                    </div>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X/> : <Menu/>}</button>
                    </div>
                </div>
                {
                    mobileDrawerOpen && (
                        <div className='flxed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                            <ul>
                                {
                                    navItems.map((title, index) => (
                                        <li key={index} className='py-4'>
                                            <a href={title.path}>{title.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='flex space-x-6'>
                                <a className='py-2 px-3 border rounded-md' href="#">Sign In</a>
                                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white font-semibold' >Create an account</a>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
      </header>
  )
}

export default Navbar