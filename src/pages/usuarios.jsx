import { MainLayout } from '@/components/Layout/MainLayout'
import { TextBlock } from '@/components/TextBlock'
import { Badge, Button } from '@chakra-ui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { getSession } from 'next-auth/react'
import React from 'react'
import { useTable } from "react-table"
import { useEffect, useMemo, useRef, useState } from "react"
const Usuarios = ({ session }) => {
    return (
        <>
            <MainLayout title={'Usuarios'} name={session.user.name} img={session.user.image} email={session.user.email}>

                {/* Text Block */}
                <TextBlock title={'Usuarios'} subtitle={'Usuarios con permisos para edición de plataforma.'}>
                </TextBlock>


                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-medium text-left">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium text-left">
                                    Correo Electrónico
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium text-left">
                                    Permiso
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Héctor Federico Cadena López
                                </th>
                                <td className="px-6 py-4">
                                    a19021089@iteshu.edu.mx
                                </td>
                                <td className="px-6 py-4">
                                    <Badge colorScheme='purple'>Administrador</Badge>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Jair Emmanuel Lara Bravo
                                </th>
                                <td className="px-6 py-4">
                                    a18021100@iteshu.edu.mx
                                </td>
                                <td className="px-6 py-4">
                                    <Badge colorScheme='purple'>Administrador</Badge>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Servicio Social
                                </th>
                                <td className="px-6 py-4">
                                    serviciosocial@iteshu.edu.mx
                                </td>
                                <td className="px-6 py-4">
                                    <Badge colorScheme='red'>Editor</Badge>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </MainLayout>

        </>
    )
}

export async function getServerSideProps(context) {

    //Sesión de Google
    const session = await getSession(context);

    if (!session) return {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }
    return {
        props: {
            session,
        }
    }
}

export default Usuarios