import React from 'react'
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from '../components/TextBlock'
import { TrashIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Modal } from '../components/Modal';

const Users = () => {
  return (
    <MainLayout>
        {/* Titulo y contenido */}
        <TextBlock title={'Usuarios'} subtitle={'Todos los usuarios registrados tendrán acceso al panel.'}>
            <Modal></Modal>
        </TextBlock>
        {/* Tabla de usuarios */}
        <div className="overflow-x-auto relative mt-8 justify-center">
            {/* Diseño del contenido de la tabla */}
            <table className="w-full text-sm text-left text-gray-800 dark:text-gray-600 dark:bg-gray-100">
                {/* Cabecera de la tabla */}
                <thead className="text-sm uppercase bg-gray-200 dark:bg-gray-700 text-black border dark:text-white border-gray-200 dark:border-gray-600">
                    <tr>
                        <th scope='col' className="py-4 px-2">
                            <div className="flex items-center pl-2 rounded">
                                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 ring-offset-gray-600 focus:ring-2"/>
                            </div>
                        </th>
                        <th scope="col" className="py-4 px-6">
                            Nombre
                        </th>
                        <th scope="col" className="py-4 px-6">
                            Correo
                        </th>
                        <th scope="col" className="py-4 px-6">
                            Rol
                        </th>
                        <th scope="col" className="py-4 px-6">
                            Acción
                        </th>
                    </tr>
                </thead>
                {/* Cuerpo de la tabla */}
                <tbody>
                    {/* Diseño de fondo y borde */}
                    <tr className="border bg-gray-100 dark:bg-gray-300 border-gray-400 dark:border-gray-400">
                        {/* 1ra fila */}
                        <th scope="row" className="py-3 px-2">
                            <div className="flex items-center pl-2 rounded">
                                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"/>
                            </div>
                        </th>
                        <td className="py-3 px-6" type="text">
                            Federico Cadena
                        </td>
                        <td className="py-3 px-6" type="email">
                            a19021089@iteshu.edu.mx
                        </td>
                        <td className="py-3 px-6">
                            Editor
                        </td>
                        <th scope='row' className="py-3 px-6 dark:text-gray-800">
                            <TrashIcon className='w-5 h-5 mx-3'/>
                        </th>
                    </tr>
                    {/* Diseño de fondo y borde */}
                    <tr className="border bg-gray-100 dark:bg-gray-300 border-gray-400 dark:border-gray-400">
                        {/* 2da fila */}
                        <th scope="row" className="py-3 px-2">
                            <div className="flex items-center pl-2 rounded">
                                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"/>
                            </div>
                        </th>
                        <td className="py-3 px-6" type="text">
                            Guadalupe Contador
                        </td>
                        <td className="py-3 px-6" type="email">
                            a19021029@iteshu.edu.mx
                        </td>
                        <td className="py-3 px-6">
                            Editor
                        </td>
                        <th scope="row" className="py-3 px-6 dark:text-gray-800">
                            <TrashIcon className='w-5 h-5 mx-3'/>
                        </th>
                    </tr>
                    {/* Diseño de fondo y borde */}
                    <tr className="border bg-gray-100 dark:bg-gray-300 border-gray-400 dark:border-gray-400">
                        {/* 3ra fila */}
                        <th scope="row" className="py-3 px-2">
                            <div className="flex items-center pl-2 rounded">
                                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"/>
                            </div>
                        </th>
                        <td className="py-3 px-6" type="text">
                            Alba Mendoza
                        </td>
                        <td className="py-3 px-6" type='email'>
                            amendoza@iteshu.edu.mx
                        </td>
                        <td className="py-3 px-6">
                            Editor
                        </td>
                        <th scope="row" className="py-3 px-6 dark:text-gray-800">
                            <TrashIcon className='w-5 h-5 mx-3'/>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* Texto de cantidad de registros */}
        <div className='w-400 h-12 text-sm ml-20 mr-48 mt-6 items-center justify-center flex'>
            <div className=' text-gray-600 dark:text-gray-300'>Mostrando 
                <span className='text-black dark:text-white font-bold'> 3 </span>
                de 
                <span className='text-black dark:text-white font-bold'> 10 </span>
                de 
                <span className='text-black dark:text-white font-bold'> 100 </span>
            </div>
        </div>
        {/* Botones */}
        <div className='ml-80 flex'>
            {/* Boton anterior */}
            <button className='w-36 h-10 flex mt-6 text-gray-800 dark:text-gray-300 text-sm border border-gray-400 rounded-lg justify-center items-center'>
                <ChevronLeftIcon className="w-6 h-6" />
                Anterior
            </button>
            {/* Boton siguiente */}
            <button className='w-36 h-10 flex ml-5 mt-6 text-gray-800 dark:text-gray-300 text-sm border border-gray-400 rounded-lg justify-center items-center'>
                Siguiente
                <ChevronRightIcon className="w-6 h-6"/>
            </button>
        </div>
    </MainLayout>
  )
}

export default Users