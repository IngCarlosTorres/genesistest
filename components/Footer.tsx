'use client'
import React from 'react'
import '../css/Footer.css'
import Image from 'next/image'
import { TITLE_PAGE, OPTIONS_FOTER } from '../constants/index'
import Link from 'next/link'
import { Formik, Form, Field } from 'formik'

export const Footer = () => {
    return (
        <>
            <div className='backgroundFooter p-3'>
                <div className='p-4 sm:p-8'>
                    <div className='flex flex-col sm:flex-row'>
                        <h3 className="text-wrapper font-extrabold sm:text-4xl text-2xl w-1/2">
                            {TITLE_PAGE}
                        </h3>
                        <div className='flex sm:items-center sm:content-end content-center sm:mt-0 mt-10 w-1/2 flex-col'>
                            <div className='flex content-center items-center sm:content-end'>
                                <div className='p-4 w-8 h-4 mr-5 relative'>
                                    <Image className='w-full h-full sm:cursor-pointer' alt='facebookIcon' src="/assets/img/facebookIcon.svg" fill={true} />
                                </div>
                                <div className='p-4 w-8 h-4 mr-5 relative'>
                                    <Image className='w-full h-full sm:cursor-pointer' alt='instagramIcon' src="/assets/img/instagramIcon.svg" fill={true} />
                                </div>
                                <div className='p-4 w-8 h-4 mr-5 relative sm:cursor-pointer'>
                                    <Image className='w-full h-full ' alt='twitterIcon' src="/assets/img/twitterIcon.svg" fill={true} />
                                </div>
                                <div className='p-4 w-8 h-4 mr-5 relative sm:cursor-pointer'>
                                    <Image className='w-full h-full ' alt='youtubeIcon' src="/assets/img/youtubeIcon.svg" fill={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-10 sm:border-t'>
                        <div className='flex sm:mt-10 sm:flex-row flex-col sm:items-start sm:content-center sm:justify-between '>
                            {OPTIONS_FOTER.map((item, index) => (
                                <ul key={item.key} className=''>
                                    <Link href={item.href} key={item.key} className='titleOption sm:text-2xl text-lg font-bold block sm:mt-0 mt-8 sm:cursor-pointer'>
                                        {item.label}
                                    </Link>
                                    {item.options.map((options) => (
                                        <Link href={options.href} key={options.key} className='subtitleOption font-normal text-base block mt-4 sm:cursor-pointer'>
                                            {options.label}
                                        </Link>
                                    ))}
                                    {
                                        index === OPTIONS_FOTER.length - 1 ?
                                            <Formik
                                                initialValues={{
                                                    email: '',
                                                }}
                                                onSubmit={async (values, { resetForm }) => {
                                                    await new Promise((r) => setTimeout(r, 500));
                                                }}
                                            >
                                                <Form >
                                                    <div className='flex w-full justify-between'>
                                                        <Field
                                                            id="email"
                                                            name="email"
                                                            placeholder="Your Email"
                                                            type="email"
                                                            className="input-form-control-make-touch  w-1/2 h-14"
                                                        />
                                                        <button type="submit" className='btntouch w-1/2 h-14'>
                                                            <div className="input-group-text-touch w-full ">Subscribe</div>
                                                        </button>
                                                    </div>
                                                    <div className=' text-center align-middle justify-center'>
                                                        <p className="subtitleOption font-medium text-xs text-start">
                                                            Lorem impsum dolor amit
                                                        </p>
                                                    </div>
                                                </Form>
                                            </Formik>
                                            : null
                                    }
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='background-with-love p-3 mb-12'>
                <div className='p-4 text-center align-middle justify-center'>
                    <p className="labelmade-with-love-by text-base font-bold">
                        Made With Love By <br />
                        Figmaland All Right Reserved
                    </p>
                </div>

            </div>
        </>

    )
}
