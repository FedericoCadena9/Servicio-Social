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
        <div className='grid grid-cols-12 w-full h-screen bg-white dark:bg-gray-900'>
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
                <div className="w-full flex flex-col items-start mx-auto max-w-md mt-28 space-y-6 gap-4">
                    {/*Texto contenido*/}
                    <div className='space-y-6'>
                        <h1 className='text-primary-500 dark:text-primary-600 font-bold text-4xl'>Departamento de Convenios y Gestión de Proyectos</h1>
                        <p className=' text-gray-400 dark:text-gray-500 text-lg'>¡Bienvenido de vuelta! Inicia sesión con Google para continuar.</p>
                    </div>
                    {/*Boton Google*/}
                    <Link href={'/'}>
                        <button className='flex rounded shadow border-gray-200 border px-12 py-3 w-full font-medium text-gray-700 items-center gap-4 justify-center transition hover:shadow-md hover:bg-slate-50/60'>
                            <div className="relative w-6 h-6 ">
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Google Logo"
                                    src={logoGoogle}
                                />
                            </div>
                            <span> Inicia Sesión con Google </span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='col-span-6 bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative'>
                {/*Circulo*/}
                <div className='w-80 h-80 bg-primary-500 dark:bg-primary-600 rounded-full col-span-6'></div>

                {/* Cuadrado */}
                <div className='w-96 h-52 backdrop-blur-lg rounded bg-slate/40 dark:bg-slate-800/40 top-1/2 col-span-6 absolute'></div>
            </div>
        </div>
    )
}
export default Login