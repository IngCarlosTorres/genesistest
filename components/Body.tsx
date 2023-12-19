'use client'
import React, { useState, useEffect } from 'react'
import '../css/Body.css'
import { OPTIONS_CARD_BODY } from '../constants/index'
import Link from 'next/link'
import Image from 'next/image'
import { ResponseApi } from '@/interfaces/api.interface';
import { getReviews } from '@/services/review.service'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"


export const Body = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

      const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
                                <div className='flex-row w-full'>
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
            <div className="bg-white p-4 mt-6">
                <div className='p-3 align-middle text-center'>
                    <div className="h2 text-5xl font-bold mt-16">
                        What <br className='block sm:hidden' />
                        Cients Say
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

                                ))
                                : null
                        }
                        </Slider> 
                    

                </div>
                <div className='p-3 align-middle text-center content-center block sm:hidden'>
                    
                    <Slider {...settings2}>                 
                        {

                            reviews.length > 0 ?
                                reviews.map((item) => (

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

                                ))
                                : null
                        }
                        </Slider> 
                    

                </div>
            </div>
        </>
    )
}
