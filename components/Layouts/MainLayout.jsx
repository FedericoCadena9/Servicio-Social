// Importaciones
import Image from 'next/image'
import Head from 'next/head'
import { signOut } from 'next-auth/react';

//Importaciones de Componentes
import { ButtonMenu } from '../../components/ButtonMenu';

// Imagenes
import iteshuLogo from '../../assets/img/iteshuLogo.png'
import servicioSocialLogo from '../../assets/img/servicioSocialLogo.png'

//Iconos
import { Squares2X2Icon } from '@heroicons/react/24/outline'
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import { UsersIcon } from '@heroicons/react/24/outline'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { DarkModeToggle } from '../DarkModeToggle';

export const MainLayout = ({ children, img, name, title }) => {

    const tabTitle = `${title} | Servicio Social ITESHU`
    return (
        <>
            <Head>
                <title>{tabTitle}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="favicon.ico" />
            </Head>

            <div className='font-primary transition-all'>
                <div className="min-h-screen bg-white dark:bg-gray-900">

                    {/* Siderbar */}
                    <nav className="fixed top-0 left-0 z-20 h-full bg-slate-50 dark:bg-slate-800 dark:border-slate-700 pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform border-r w-72 md:translate-x-0">
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

                        {/* Menu de Navegación */}
                        <nav className="mt-20 px-8 space-y-5" aria-label="Menú de Navgación">
                            <ButtonMenu href={'/'} text="Dependencias" icon={<Squares2X2Icon className="w-5 h-5" />} />
                            {/* <ButtonMenu href={'/documentos'} text="Documentos" icon={<DocumentTextIcon className="w-5 h-5" />} /> */}
                            <ButtonMenu href={'/alumnos'} text="Alumnos" icon={<AcademicCapIcon className="w-5 h-5" />} />
                            <ButtonMenu href={'/users'} text="Usuarios" icon={<UsersIcon className="w-5 h-5" />} />
                        </nav>

                        {/* Botón de Ayuda */}
                        <div className="absolute bottom-0 left-0 w-full px-8 py-4">
                            <button className="text-slate-400 dark:text-gray-500 text-sm hover:underline flex items-center gap-2">
                                <QuestionMarkCircleIcon className='w-5 h-5' />
                                <span>Ayuda</span>
                            </button>
                        </div>

                    </nav>

                    {/* Header */}
                    <div className="ml-0 transition md:ml-72">
                        <header className="flex items-center justify-end w-full px-8 bg-white dark:bg-slate-900 dark:border-gray-700 border-b h-16">

                            {/* Botón de Menu Responsive */}
                            <button className="block btn btn-light md:hidden">
                                <span className="sr-only">Menu</span>
                                <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div className="flex items-center gap-6 text-gray-800 dark:text-slate-100">

                                {/* Toggle Dark Mode */}
                                <DarkModeToggle />

                                {/* Foto y Nombre del Usuario */}
                                <div className="flex items-center gap-4">
                                    <div className="avatar order-2">

                                        {/* Foto del Usuario */}
                                        <div className="w-8">
                                            <Image
                                                className='rounded-full'
                                                layout="fill"
                                                objectFit="cover"
                                                alt="Foto de Perfil"
                                                src={img}
                                            />
                                        </div>
                                    </div>

                                    {/* Nombre del Usuario */}
                                    <span className="text-sm font-medium order-1">{name}</span>
                                    <div className="dropdown dropdown-hover dropdown-end order-3">

                                        {/* Botón de Dropdown */}
                                        <button tabIndex={0} className='btn btn-ghost p-3'>
                                            <ChevronDownIcon className="w-5 h-5 order-3 cursor-pointer" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white dark:bg-slate-700 rounded-box w-52">
                                            <li>
                                                <button className='btn btn-ghost' onClick={() => signOut()} >
                                                    <ArrowLeftOnRectangleIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                                                    <span className="ml-2 text-gray-900 dark:text-slate-100">Cerrar Sesión</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </header>

                        {/* Contenido */}
                        <div className="p-5">
                            {children}
                        </div>
                    </div>
                    <div className="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 md:hidden"></div>
                </div>
            </div></>
    );
};
