//Importaciones
import Head from 'next/head'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import router from 'next/router'

// Logos
import iteshuLogo from '../assets/imgs/iteshuLogo.png'
import servicioSocialLogo from '../assets/imgs/servicioSocialLogo.png'

const Login = () => {

    // Obtener la sesion
    const { data: session, status } = useSession()

    // Redireccionar si ya esta autenticado
    if (status !== 'loading' && status === 'authenticated') {
        router.push('/')
    }

    return (
        <>
            <Head>
                <title> {`Inciar Sesión | Servicio Social ITESHU`} </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            
            <div className="grid grid-cols-12 w-full lg:min-h-screen">
                <div className="col-span-12 lg:col-span-6">
                    <div className="flex items-center justify-between px-7 py-8">
                        {/* Logos */}
                        <div className="relative w-24 h-10 ">
                            <Image
                                fill
                                alt="ITESHU Logo"
                                src={iteshuLogo}
                            />
                        </div>
                        <div className="relative w-24 h-8 ">
                            <Image
                                fill
                                alt="Servicio Social Logo"
                                src={servicioSocialLogo}
                            />
                        </div>
                    </div>

                    {/*Circulo*/}
                    <div className="flex items-center justify-center md:hidden my-4">
                        <div className='lg:w-80 lg:h-80 w-12 h-12 bg-emerald-500 dark:bg-emerald-600 rounded-full col-span-6'></div>
                    </div>

                    <div className="w-full flex flex-col items-start mx-auto max-w-md lg:mt-28 space-y-6 gap-4 text-center lg:text-left p-4 lg:p-0">
                        {/*Texto contenido*/}
                        <div className='space-y-6'>
                            <h1 className='text-emerald-600 dark:text-emerald-600 font-bold text-3xl lg:text-4xl'>Departamento de Convenios y Gestión de Proyectos</h1>
                            <p className=' text-gray-400 text-lg'>¡Bienvenido de vuelta! Inicia sesión con Google para continuar.</p>
                        </div>

                        {/*Boton Google*/}
                        <button onClick={() => signIn('google')} className='flex rounded-md border-gray-300 dark:border-gray-600 border px-12 py-3 w-full font-medium text-gray-700 dark:text-gray-100 items-center gap-4 justify-center transition hover:shadow-md hover:bg-slate-50/60 dark:hover:bg-gray-700/40'>

                            <div className="relative w-6 h-6 ">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    <path d="M1 1h22v22H1z" fill="none" />
                                </svg>
                            </div>
                            <span> Inicia Sesión con Google </span>
                        </button>
                    </div>
                </div>
                <div className="hidden col-span-12 lg:col-span-6 md:flex items-center md:my-8 lg:my-0 justify-center relative lg:bg-slate-50">
                    {/*Circulo*/}
                    <div className='lg:w-80 lg:h-80 md:w-56 md:h-56 bg-emerald-500 dark:bg-emerald-600 rounded-full col-span-6'></div>

                    {/* Cuadrado con Blur */}
                    <div className='w-96 max-h-full md:h-40 lg:h-56 backdrop-blur-lg rounded md:bg-transparent lg:bg-slate-50/0 top-1/2 col-span-6 absolute'></div>
                </div>
            </div>
        </>
    )
}

export default Login