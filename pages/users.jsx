import React from 'react'
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from '../components/TextBlock'
import { PlusIcon } from "@heroicons/react/20/solid";

const Users = () => {
  return (
    <MainLayout>
        {/* Titulo y contenido */}
        <TextBlock title={'Usuarios'} subtitle={'Todos los usuarios registrados tendrán acceso al panel.'}>
            {/* Boton Agregar dependencia */}
            <button className='btn btn-primary'>
                <PlusIcon className='w-5 h-5 mr-2' />
                <span>Agregar Dependencia</span>
            </button>
        </TextBlock>
        {/* Tabla de usuarios */}
        <div class="overflow-x-auto relative mt-8 justify-center">
            {/* Diseño del contenido de la tabla */}
            <table class="w-full text-sm text-left text-gray-800 ">
                {/* Cabecera de la tabla */}
                <thead class="text-sm uppercase bg-gray-200 text-black border border-gray-400">
                    <tr>
                        <th scope='col' class="py-4 px-2">
                            <div class="flex items-center pl-2 rounded">
                                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"/>
                            </div>
                        </th>
                        <th scope="col" class="py-4 px-6">
                            Nombre
                        </th>
                        <th scope="col" class="py-4 px-6">
                            Correo
                        </th>
                        <th scope="col" class="py-4 px-6">
                            Rol
                        </th>
                        <th scope="col" class="py-4 px-6">
                            Acción
                        </th>
                    </tr>
                </thead>
                {/* Cuerpo de la tabla */}
                <tbody>
                    {/* Diseño de fondo y borde */}
                    <tr class="border bg-gray-100 border-gray-400">
                        {/* 1ra fila */}
                        <th scope="row" class="py-3 px-2">
                            <div class="flex items-center pl-2 rounded">
                                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"/>
                            </div>
                        </th>
                        <td class="py-3 px-6" type="text">
                            Federico Cadena
                        </td>
                        <td class="py-3 px-6" type="email">
                            a19021089@iteshu.edu.mx
                        </td>
                        <td class="py-3 px-6">
                            Editor
                        </td>
                        <th scope='row' class="py-3 px-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mx-3">
                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                            </svg>
                        </th>
                    </tr>
                    {/* Diseño de fondo y borde */}
                    <tr class="border bg-gray-100 border-gray-400">
                        {/* 2da fila */}
                        <th scope="row" class="py-3 px-2">
                            <div class="flex items-center pl-2 rounded">
                                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"/>
                            </div>
                        </th>
                        <td class="py-3 px-6" type="text">
                            Guadalupe Contador
                        </td>
                        <td class="py-3 px-6" type="email">
                            a19021029@iteshu.edu.mx
                        </td>
                        <td class="py-3 px-6">
                            Editor
                        </td>
                        <th scope="row" class="py-3 px-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mx-3">
                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                            </svg>
                        </th>
                    </tr>
                    {/* Diseño de fondo y borde */}
                    <tr class="border bg-gray-100 border-gray-400">
                        {/* 3ra fila */}
                        <th scope="row" class="py-3 px-2">
                            <div class="flex items-center pl-2 rounded">
                                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"/>
                            </div>
                        </th>
                        <td class="py-3 px-6" type="text">
                            Alba Mendoza
                        </td>
                        <td class="py-3 px-6" type='email'>
                            amendoza@iteshu.edu.mx
                        </td>
                        <td class="py-3 px-6">
                            Editor
                        </td>
                        <th scope="row" class="py-3 px-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mx-3">
                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                            </svg>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* Texto de cantidad de registros */}
        <div className='w-400 h-12 text-sm ml-20 mr-48 mt-6 items-center justify-center flex'>
            <div className=' text-gray-600'>Mostrando 
                <span className='text-black font-bold'> 3 </span>
                de 
                <span className='text-black font-bold'> 10 </span>
                de 
                <span className='text-black font-bold'> 100 </span>
            </div>
        </div>
        {/* Botones */}
        <div className='ml-80 flex'>
            {/* Boton anterior */}
            <button className='w-36 h-10 flex mt-6 text-gray-800 text-sm border border-gray-400 rounded-lg justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Anterior
            </button>
            {/* Boton siguiente */}
            <button className='w-36 h-10 flex ml-5 mt-6 text-gray-800 text-sm border border-gray-400 rounded-lg justify-center items-center'>
                Siguiente
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    </MainLayout>
  )
}

export default Users