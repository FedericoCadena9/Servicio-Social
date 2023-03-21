//Importaciones
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { signOut } from 'next-auth/react';

// Imagenes
import iteshuLogo from '@/assets/imgs/iteshuLogo.png'
import servicioSocialLogo from '@/assets/imgs/servicioSocialLogo.png'
import webLogo from '@/assets/imgs/webLogo.svg'

//Iconos
import { AcademicCapIcon, Bars3CenterLeftIcon, Squares2X2Icon, UsersIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'


//Componentes
import { Avatar, Badge, Dropdown, Navbar, Sidebar } from 'flowbite-react';
import { SidebarButton } from '@/components/SidebarButton';
import { DarkModeToggle } from '../DarkModeToggle';
import { TextBlock } from '../TextBlock';


export const MainLayout = ({ title, children, name, email, img }) => {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <Head>
                <title> {`${title} | Servicio Social ITESHU`} </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="favicon.ico" />
            </Head>

            <div className="h-screen bg-white dark:bg-slate-900">
                {/* Sidebar */}
                <div className={`fixed top-0 left-0 z-20 h-full transition origin-left transform md:translate-x-0 ${showSidebar ? "translate-x-0 " : "-translate-x-full"} `} >
                    <Sidebar className='w-72 border-r dark:border-slate-700 h-full ' aria-label="Sidebar">
                        {/* Botón Cerrar */}
                        <div className="pb-4 md:hidden">
                            <div className="inline-block">
                                <Badge
                                    color="failure"
                                    icon={XMarkIcon}
                                    onClick={() => setShowSidebar(!showSidebar)}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between flex-col h-full ">
                            <div>
                                {/* Logos */}
                                <div className="flex items-center justify-between p-2">
                                    <div className="relative w-24 h-10 ">
                                        <Image
                                            fill
                                            className='object-cover'
                                            alt="ITESHU Logo"
                                            src={iteshuLogo}
                                        />
                                    </div>
                                    <div className="relative w-24 h-8 ">
                                        <Image
                                            fill
                                            className='object-cover'
                                            alt="Servicio Social Logo"
                                            src={servicioSocialLogo}
                                        />
                                    </div>
                                </div>

                                {/* Menu de Navegación */}
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <nav className="mt-20 space-y-5" aria-label="Menú de Navgación">
                                            <SidebarButton href={'/'} text="Alumnos" icon={<AcademicCapIcon className="w-5 h-5" />} />
                                            <SidebarButton href={'/dependencias'} text="Dependencias" icon={<Squares2X2Icon className="w-5 h-5" />} />
                                            {/* <SidebarButton href={'/documentos'} text="Documentos" icon={<DocumentTextIcon className="w-5 h-5" />} /> */}
                                            <SidebarButton href={'/users'} text="Usuarios" icon={<UsersIcon className="w-5 h-5" />} />
                                        </nav>
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                            </div>

                            <Sidebar.CTA className='bg-emerald-100 dark:bg-emerald-900'>
                                <div className="inline-block">
                                    <Badge icon={QuestionMarkCircleIcon} className='mb-3 px-2' color="warning">
                                        Ayuda
                                    </Badge>
                                </div>
                                <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
                                    Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                                </p>
                                <a
                                    className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                    href="#"
                                >
                                    Turn new navigation off
                                </a>
                            </Sidebar.CTA>
                        </div>
                    </Sidebar>
                </div>

                <div className='md:ml-72'>
                    {/* Navbar */}
                    <Navbar fluid={true} className="border-b">
                        <div className="flex items-center gap-3">

                            {/* Hamburger Menu */}
                            <Bars3CenterLeftIcon className='w-6 h-6 md:hidden' onClick={() => setShowSidebar(!showSidebar)} />

                            {/* Logo */}
                            <Navbar.Brand className='space-x-2' href="/">
                                <div className="relative w-7 h-7">
                                    <Image
                                        src={webLogo}
                                        fill
                                        className='object-cover'
                                        alt="Web Logo"
                                    />
                                </div>
                                <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white hidden md:inline-block">
                                    Servicio Social
                                </span>
                            </Navbar.Brand>
                        </div>

                        <div className="flex items-center md:order-2 gap-8">
                            {/* Dark Toggle */}
                            <DarkModeToggle />

                            {/* Avatar Dropdwon */}
                            <Dropdown
                                arrowIcon={true}    
                                inline={true}
                                label={<Avatar alt="Avatar" img={img} rounded={true} />}
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {name}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item onClick={() => signOut()}    >
                                    Cerrar Sesión
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                    </Navbar>

                    <div className="p-8">
                        {children}
                    </div>
                    <div className={`${showSidebar ? 'fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25' : ''}`}></div>
                </div>
            </div>
        </>
    )
}