import React from 'react'
import { UserIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

export const AnadirUsuario = () => {
  return (
    <div className='grid grid-rows-12 w-full h-screen bg-white'>
      {/* Cabecera */}
      <div className='row-span-2'>
        <header className='flex items-center w-full bg-white border-gray-400 border h-20 text-gray-800'>
          <UserIcon className='w-8 h-8 ml-28'/>
          <div className=' ml-7 text-2xl'>Añadir Nuevo Usuario</div>
          <div className='ml-96 items-center'>
            <button className='w-12 h-12 ml-96 border border-gray-300 items-center'>
              <XMarkIcon className='w-10 h-10'/>
            </button>
          </div>
        </header>
      </div>
      
      <div className='row-span-3 ml-96 justify-center'>
        <div className='text-gray-600 text-lg font-bold justify-center ml-10'>Correo Electrónico</div>
      </div>
    </div>
  )
}
export default AnadirUsuario