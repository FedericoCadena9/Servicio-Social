//Importaciones
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import router from 'next/router'
import Head from 'next/head'

// Logos
import iteshuLogo from '../assets/img/iteshuLogo.png'
import servicioSocialLogo from '../assets/img/servicioSocialLogo.png'
import logoGoogle from '../assets/img/logoGoogle.png'

const Login = () => {

    const { data: session, status } = useSession()

    if (status !== 'loading' && status === 'authenticated') {
        router.push('/')
    }

    return (
        <>
            <Head>
                <title>Iniciar Sesión | Departamento de Convenios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="./assets/icon/IconIteshu.ico" />
            </Head>
            <div className='grid grid-cols-12 w-full h-screen bg-white dark:bg-slate-900'>
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
                            <h1 className='text-primary-500 dark:text-emerald-600 font-bold text-4xl'>Departamento de Convenios y Gestión de Proyectos</h1>
                            <p className=' text-gray-400 text-lg'>¡Bienvenido de vuelta! Inicia sesión con Google para continuar.</p>
                        </div>

                        {/*Boton Google*/}
                        <button onClick={() => signIn('google')} className='flex rounded shadow border-gray-200 dark:border-gray-600 border px-12 py-3 w-full font-medium text-gray-700 dark:text-gray-100 items-center gap-4 justify-center transition hover:shadow-md hover:bg-slate-50/60 dark:hover:bg-gray-700/40'>
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
                    </div>
                </div>
                <div className='col-span-6 bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative'>
                    {/*Circulo*/}
                    <div className='w-80 h-80 bg-primary-500 dark:bg-emerald-600 rounded-full col-span-6'></div>

                    {/* Cuadrado */}
                    <div className='w-96 h-52 backdrop-blur-lg rounded bg-slate/40 dark:bg-slate-800/40 top-1/2 col-span-6 absolute'></div>
                </div>
            </div>
        </>
    )
}
export default Login