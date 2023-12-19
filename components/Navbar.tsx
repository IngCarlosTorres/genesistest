'use client'
import '../css/Navbar.css'
import axios from 'axios';
import { OPTIONS_NAV, TITLE_PAGE } from '../constants/index'
import Link from 'next/link'
import Image from 'next/image'
import { Formik, Form, Field } from 'formik'
import { Appointment } from '@/interfaces/appointment'
import { saveAppointment } from '@/services/appointment.service'
import { ResponseApi } from '@/interfaces/api.interface';

export const Navbar = () => {

    const setAppointment = async (appointment: Appointment) => {
        const response: ResponseApi = await saveAppointment(appointment);
        if (response.status === 200) {
            alert("Se ha registrado exitosamente")
        } else {
            alert("Ocurrio un problema, contacte a soporte técnico")
        }
        return response.status
    }

    return (
        <>
            <div className='coverMobile p-3'>
                <nav className="p-4 sm:bg-transparent bg-white">
                    <div className='sm:bg-transparent  p-3'>
                        <div className='flex justify-between content-center '>
                            <h3 className="titleNavMobile font-extrabold sm:text-4xl text-3xl w-1/3">
                                {TITLE_PAGE}
                            </h3>
                            <ul className='flex justify-between items-center content-center flex-col sm:flex-row w-1/3 sm:mt-0 mt-20 sm:mr-10'>
                                {OPTIONS_NAV.map((option) => (
                                    <Link href={option.href} key={option.key} className='labelMenu sm:font-bold sm:text-lg font-normal text-3xl block sm:p-0 pb-1.5 sm:mb-0 sm:pb-0 mb-3 p-3 '>
                                        {option.label}
                                    </Link>
                                ))}
                            </ul>
                            <div className='flex sm:items-center sm:content-end justify-between w-1/3'>
                                <div className='flex justify-between'>
                                    <div className='p-4 sm:w-12 w-8 h-4 relative'>
                                        <Image className='w-full h-full cursor-pointer' alt='icn-search' src="/assets/img/icn-search.svg" fill={true} />
                                    </div>
                                    <div className='p-4 sm:w-14 w-8 h-4 sm:ml-0 ml-1 relative'>
                                        <Image className='w-full h-full cursor-pointer' alt='icn-shopping-cart' src="/assets/img/icn-shopping-cart.svg" fill={true} />
                                    </div>
                                </div>
                                <div className='p-4 w-8 h-4 sm:ml-0 ml-3 relative cursor-pointer flex text-end'>
                                    <Image className='w-full h-full ' alt='navbar-toggler' src="/assets/img/navbar-toggler.svg" fill={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='sm:flex sm:justify-between sm:items-center sm:content-center p-3'>
                    <div className='sm:w-1/2 sm:h-full'>
                        <p className='label-h1Mobile text-center sm:text-justify sm:font-semibold sm:text-7xl font-bold text-4xl p-6'>
                            Help to reclaim  <br className='block sm:hidden' />
                            your life <br className='block sm:hidden' />
                            and freedom
                        </p>
                        <p className="label-pMobile text-center sm:text-justify font-normal sm:text-3xl text-xl sm:p-6 sm:mb-0 mb-3 sm:mt-0 mt-3">
                            We know how large objects will act, <br className='block sm:hidden' />
                            but things on a small scale.
                        </p>
                        <div className='flex items-center content-center sm:flex-row flex-col p-6'>
                            <div className="button-btn-primaryMobile sm:mb-0 mb-6 sm:mr-8">
                                <div className="btn-textMobile">Get Quote Now</div>
                            </div>
                            <div className="btn-text-wrapperMobile sm:mb-0 mb-3">
                                <button className="text-wrapperMobile">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center content-center flex-col sm:w-1/2'>
                        <div className='flex items-center content-center flex-col mt-16 mb-16'>
                            <div className="card-itemMobile sm:mb-0 mb-2 sm:mt-0 mt-2 p-14">
                                <div className="h">Book Appointment</div>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        departament: '',
                                        time: ''
                                    }}
                                    onSubmit={async (values, { resetForm }) => {
                                        await new Promise((r) => setTimeout(r, 500));
                                        if (values.name === '') { alert("El campo name es obligatorio"); return }
                                        if (values.email === '') { alert("El campo email es obligatorio"); return }
                                        if (values.departament === '') { alert("Debe seleccionar un departamento"); return }
                                        if (values.time === '') { alert("Debe seleccionar una hora"); return }
                                        if (await setAppointment(values) === 200) resetForm()
                                    }}
                                >
                                    <Form className='card-content'>
                                        <label htmlFor="laname" className='labelform-controlMobile'>
                                            Name *
                                        </label>
                                        <Field id="name" name="name" placeholder="Full Name" className="input-form-controlMobile" />
                                        <label htmlFor="laemail" className='labelform-controlMobile mt-4'>
                                            Email *
                                        </label>
                                        <Field
                                            id="email"
                                            name="email"
                                            placeholder="example@gmail.com"
                                            type="email"
                                            className="input-form-controlMobile"
                                        />
                                        <label htmlFor="ladepartament" className='labelform-controlMobile mt-4'>
                                            Departament *
                                        </label>
                                        <Field name="departament" as="select" className='input-form-controlMobile'>
                                            <option value="">Please Select</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Jalapa">Jalapa</option>
                                            <option value="Jutiapa">Jutiapa</option>
                                        </Field>
                                        <label htmlFor="latime" className='labelform-controlMobile mt-4'>
                                            Time *
                                        </label>
                                        <Field name="time" as="select" className='input-form-controlMobile'>
                                            <option value="">Please Select</option>
                                            <option value="4:00 Available">4:00 Available</option>
                                            <option value="5:00 Available">5:00 Available</option>
                                            <option value="6:00 Available">6:00 Available</option>
                                            <option value="7:00 Available">7:00 Available</option>
                                            <option value="8:00 Available">8:00 Available</option>
                                        </Field>
                                        <button type="submit" className='button-btn-primaryMobile mt-8'>
                                            <div className="btn-textMobile">Book Appointment</div>
                                        </button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}