import React from 'react'
{/*Libreria para agregar imagen*/ }
import Image from 'next/image'
{/*Librerias de logos*/ }
import iteshuLogo from '../assets/img/iteshuLogo.png'
import servicioSocialLogo from '../assets/img/servicioSocialLogo.png'
import logoGoogle from '../assets/img/logoGoogle.png'
import Link from 'next/link'

const Login = () => {
    return (
        <div className='grid grid-cols-12 w-full h-screen bg-white '>
            <div className='col-span-6'>
                <div className="flex items-center justify-between px-7 py-8">
                    {/* Logos */}
                    <div className="relative w-24 h-10 ">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            alt="ITESHU Logo"
                            src={iteshuLogo}
                        />
                    </div>
                    <div className="relative w-24 h-8 ">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            alt="Servicio Social Logo"
                            src={servicioSocialLogo}
                        />
                    </div>
                </div>
                <div className="w-full  mx-auto max-w-2xl mt-28 space-y-6">
                    {/*Texto contenido*/}
                    <div className="">
                        <h1 className='text-primary-500 font-bold text-4xl ml-20 mr-40 mt-16'>Departamento de Convenios y Gestión de Proyectos</h1>
                        <p className=' text-gray-400 text-lg ml-20 mr-48 mt-5'>¡Bienvenido de vuelta! Inicia sesión con Google para continuar.</p>
                    </div>
                    {/*Boton Google*/}
                    <Link href={'/'}>
                        <button className='w-96 h-12 font-Poppins gap-10 flex ml-20 mt-0 border border-gray-300 items-center justify-center'>
                            {/*Logo de Google*/}
                            <div className='flex px-18 py-18'>
                                <div className="relative w-8 h-8 ">
                                    <Image
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Google Logo"
                                        src={logoGoogle}
                                    />
                                </div>
                            </div>
                            {/* Texto */}
                            Inicia Sesión con Google
                        </button>
                    </Link>
                </div>
            </div>
            <div className='col-span-6 bg-slate-100 flex items-center justify-center relative'>
                {/*Circulo*/}
                <div className='w-80 h-80 bg-primary-500 rounded-full col-span-6'></div>

                {/* Cuadrado */}
                <div className='w-96 h-52 backdrop-blur-lg rounded bg-white/40 top-1/2 col-span-6 absolute'></div>
            </div>
        </div>
    )
}
export default Login