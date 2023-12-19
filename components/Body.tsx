'use client'
import React, { useState, useEffect } from 'react'
import '../css/Body.css'
import { OPTIONS_CARD_BODY, OPTIONS_ATTORNEYS } from '../constants/index'
import Link from 'next/link'
import Image from 'next/image'
import { ResponseApi } from '@/interfaces/api.interface';
import { getReviews } from '@/services/review.service'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { Formik, Form, Field } from 'formik'


export const Body = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const [reviews, setReviews] = useState<Array<any>>([]);

    useEffect(() => {
        getAllReviews()
    }, [])



    const getAllReviews = async () => {
        const response: ResponseApi = await getReviews();
        if (response.status === 200) {
            setReviews(response.data.data)
        } else {
            setReviews([])
        }
        return response.status
    }

    return (
        <>
            {/* MODULE ADVICE */}
            <div className="p-4  bg-white mt-10">
                <div className='p-3 align-middle text-center'>
                    <div className="h2 text-5xl font-bold">
                        Practice <br className='block sm:hidden' />
                        Advice
                    </div>
                    <div className='mt-4'>
                        <p className="paragraph text-sm">
                            Problems trying to resolve <br className='block sm:hidden' />
                            the conflict between the <br />
                            two major realms of Classical <br className='block sm:hidden' />
                            physics: Newtonian mechanics
                        </p>
                    </div>
                </div>
                <div className='p-3 align-middle text-center content-center'>
                    <div className='flex sm:mt-10 sm:flex-row flex-col sm:items-start sm:content-center sm:justify-center items-center '>
                        {OPTIONS_CARD_BODY.map((item) => (
                            <div key={item.key} className='content-center p-6'>
                                <div className='flex-row-p w-full'>
                                    <div className='icn-circle-circle-md mr-1 sm:mr-2'>
                                        <img className="icn-resize-icn-md" alt={item.icon} src={'/assets/img/' + item.icon} />
                                    </div>
                                    <div className="h5 font-bold text-base">{item.label}</div>
                                </div>

                                <div className="card-content-advice">
                                    {item.list.map((list, index) => (
                                        <p className="h6 text-left text-sm font-bold" key={index}>- {list.label}</p>
                                    ))}
                                    <Link href={item.href} key={item.key} className='link text-left font-normal sm:cursor-pointer'>
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MODULE WE ARE */}
            <div className="background-gray p-4 mt-6">
                <div className='p-3 align-middle text-center'>
                    <div className="h2 text-5xl font-bold mt-16">
                        Who We Are
                    </div>
                    <div className='mt-4 mb-6'>
                        <p className="paragraph text-sm">
                            Problems trying to resolve <br className='block sm:hidden' />
                            the conflict between the <br />
                            two major realms of Classical <br className='block sm:hidden' />
                            physics: Newtonian mechanics
                        </p>
                    </div>
                </div>
                <div className='p-3 align-middle text-center content-center mt-10'>
                    <div className='flex content-center justify-center items-center'>
                        <div className='sm:w-1/2 w-80 filterd'>
                            <div className='flex content-center items-center justify-center'>
                                <div className='w-full h-96 relative flex justify-center content-center items-center'>
                                    <Image className='w-full h-full object-fill sm:cursor-pointer ' alt='video2' src="/assets/img/video2.jpg" fill={true} />
                                    <div className="button-button-btn absolute ">
                                        <img className="icn-play-icn-sm sm:cursor-pointer" alt="iconplay" src="/assets/img/iconplay.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-3 align-middle text-center content-center sm:mt-40 mt-60'></div>
            </div>

            {/* MODULE SAY CLIENT */}
            <div className="background-gray2 p-4 h-1/2">
                <div className='p-3 align-middle text-center'>
                    <div className="h2 text-5xl font-bold mt-16">
                        What <br className='block sm:hidden' />
                        Clients Say
                    </div>
                    <div className='mt-4 mb-6'>
                        <p className="paragraph text-sm">
                            Problems trying to resolve <br className='block sm:hidden' />
                            the conflict between the <br />
                            two major realms of Classical <br className='block sm:hidden' />
                            physics: Newtonian mechanics
                        </p>
                    </div>
                </div>
                <div className='p-3 align-middle text-center content-center hidden sm:block'>
                    <Slider {...settings}>
                        {
                            reviews.length > 0 ?
                                reviews.map((item) => (

                                    item.state ?
                                        <div className="card-item-say align-middle text-center justify-center flex sm:mr-3 sm:mt-0 mt-3" key={item.id}>
                                            <div className="card-content" >
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                                <p className="h text-justify">
                                                    {item.description}
                                                </p>

                                                <div className="frame">
                                                    <div className="div">
                                                        <div className='p-6 w-8 h-6  relative cursor-pointer'>
                                                            <Image className='w-full h-full object-center sm:cursor-pointer rounded-full' alt={item.photo} src={item.photo} fill={true} />
                                                        </div>
                                                        <div className="div-2">
                                                            <div className="link">{item.name}</div>
                                                            <div className="text-wrapper">{item.profession}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : null

                                ))
                                : null
                        }
                    </Slider>
                </div>
                <div className='p-8  align-middle text-center content-center block sm:hidden'>
                    <Slider {...settings2} >
                        {
                            reviews.length > 0 ?
                                reviews.map((item) => (
                                    item.state ?
                                        <div className="card-item-say align-middle text-center justify-center flex sm:mr-3 sm:mt-0 mt-3 w-10" key={item.id} >
                                            <div className="card-content" >
                                                <div className="flex items-center ">
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                                <p className="h text-justify">
                                                    {item.description}
                                                </p>

                                                <div className="frame">
                                                    <div className="div">
                                                        <div className='flex content-center items-center sm:content-end'>
                                                            <div className='p-6 w-8 h-6  relative cursor-pointer'>
                                                                <Image className='w-full h-full object-center sm:cursor-pointer rounded-full' alt={item.photo} src={item.photo} fill={true} />
                                                            </div>
                                                        </div>
                                                        <div className="div-2">
                                                            <div className="link">{item.name}</div>
                                                            <div className="text-wrapper">{item.profession}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : null
                                ))
                                : null
                        }
                    </Slider>
                </div>
                <div className='p-3 align-middle text-center content-center mt-36'></div>
            </div>

            {/* MODULE ATTORNEYS */}
            <div className="p-4 bg-white mt-10">
                <div className='p-3 align-middle text-center'>
                    <div className="h2 text-5xl font-bold">
                        Meet Our <br className='block sm:hidden' />
                        Attorneys
                    </div>
                    <div className='mt-4'>
                        <p className="paragraph text-sm">
                            Problems trying to resolve <br className='block sm:hidden' />
                            the conflict between the <br />
                            two major realms of Classical <br className='block sm:hidden' />
                            physics: Newtonian mechanics
                        </p>
                    </div>
                </div>
                <div className='p-3 align-middle text-center content-center'>
                    <div className='flex sm:mt-10 sm:flex-row flex-col sm:items-start sm:content-center sm:justify-center items-center '>
                        {OPTIONS_ATTORNEYS.map((item) => (
                            <div key={item.key} className='card-item-attorney sm:mb-0 mb-4 sm:mr-8'>
                                <div className='coverAttorneys w-full relative'>
                                    <Image className='w-full h-full sm:cursor-pointer' alt={item.key} src={item.photo} fill={true} />
                                </div>

                                <div className='mt-4 flex-col justify-center items-center content-center flex mb-8'>
                                    <div className="font-bold text-base text-center items-center flex">{item.label}</div>
                                    <div className="h6-attorney text-sm font-bold">{item.profession}</div>
                                    <div className='sm:mt-0  w-1/2 flex-col'>
                                        <div className='content-center items-center justify-center flex'>
                                            <div className='p-4 w-8 h-4 relative'>
                                                <Image className='w-full h-full sm:cursor-pointer' alt='facebookBlue' src="/assets/img/facebookBlue.svg" fill={true} />
                                            </div>
                                            <div className='p-4 w-8 h-4 relative'>
                                                <Image className='w-full h-full sm:cursor-pointer' alt='instagramBlue' src="/assets/img/instagramBlue.svg" fill={true} />
                                            </div>
                                            <div className='p-4 w-8 h-4  relative sm:cursor-pointer'>
                                                <Image className='w-full h-full ' alt='twitterBlue' src="/assets/img/twitterBlue.svg" fill={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MODULE MAKE US */}
            <div className="p-4 cover-make w-full">
                <div className="p-4 mt-10 sm:w-1/2 w-full">
                    <div className='p-9 align-middle text-center'>
                        <div className="h2 text-base font-bold text-start -mb-5">
                            Contact Us
                        </div>
                        <div className="h2 text-5xl font-bold text-start mb-4">
                            Make an <br className='block sm:hidden' />
                            Appointment
                        </div>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                departament: '',
                                time: '',
                                message: '',
                            }}
                            onSubmit={async (values, { resetForm }) => {
                                await new Promise((r) => setTimeout(r, 500));
                            }}
                        >
                            <Form className='card-content'>
                                <div className='flex content-center justify-center items-center sm:flex-row flex-col'>
                                    <Field id="name" name="name" placeholder="Full Name" className="input-form-control-make-appointment w-full h-12 mb-4 sm:mr-4 mr-0" />
                                    <Field
                                        id="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        type="email"
                                        className="input-form-control-make-appointment w-full h-12 mb-4"
                                    />
                                </div>

                                <div className='flex content-center justify-center items-center sm:flex-row flex-col'>
                                    <Field name="departament" as="select" className='input-form-control-make-appointment w-full h-12 mb-4 sm:mr-4 mr-0'>
                                        <option value="">Please Select</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Jalapa">Jalapa</option>
                                        <option value="Jutiapa">Jutiapa</option>
                                    </Field>
                                    <Field name="time" as="select" className='input-form-control-make-appointment w-full h-12 mb-4'>
                                        <option value="">Please Select</option>
                                        <option value="4:00 Available">4:00 Available</option>
                                        <option value="5:00 Available">5:00 Available</option>
                                        <option value="6:00 Available">6:00 Available</option>
                                        <option value="7:00 Available">7:00 Available</option>
                                        <option value="8:00 Available">8:00 Available</option>
                                    </Field>
                                </div>


                                <Field
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    rows={5}
                                    className="input-form-control-make-appointment w-full h-36 mb-4 text-start items-start"
                                />
                                <button type="submit" className='button-btn-primary-make mt-8 sm:w-1/2 w-full'>
                                    <div className="btn-text-make w-full">Book Appointment</div>
                                </button>
                            </Form>
                        </Formik>
                    </div>

                </div>
            </div>

            {/* MODULE CONTACT US */}
            <div className="p-4 bg-white w-full">
                <div className="p-4 mt-10  w-full">
                    <div className='p-9 align-middle text-center sm:justify-between sm:flex sm:flex-row flex-col'>
                        <div>
                            <div className="h2 text-3xl font-bold text-start mb-4">
                                Request A Free <br className='block sm:hidden' />
                                Consultation
                            </div>
                            <div className='mt-4 mb-6'>
                                <p className="paragraph text-sm text-start">
                                    the quick fox jumps over <br className='block sm:hidden' />
                                    the lezy dog <br />
                                </p>
                            </div>
                        </div>

                        <button type="submit" className='button-btn-primary-make mt-8 sm:mt-0 sm:w-1/3 w-full sm:h-1/2'>
                            <div className="btn-text-make w-full">Contact Us</div>
                        </button>
                    </div>

                </div>
            </div>

        </>
    )
}
