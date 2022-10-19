import React from 'react'
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { UserIcon } from '@heroicons/react/24/outline';
import {XMarkIcon} from '@heroicons/react/24/outline'; 
import {Input} from './Input';

export const Modal = () => {
  return (
    <div>
        {/* Boton Invitar Usuario*/}
        <label htmlFor="my-modal" className="btn btn-primary">
          <EnvelopeIcon className='w-5 h-5 mr-2'/>
          <span>Invitar Usuario</span>
        </label>
        {/* Ventana modal */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
        <div className="!p-0 modal-box relative max-w-5xl h-full bg-white">
          {/* Cabecera */}
        <header className='absolute top-0 px-6 py-5 flex items-center justify-between w-full bg-white border-gray-400 border h-20 text-gray-800'>
          <div className='flex items-center gap-4'>
            <UserIcon className='w-6 h-6 font-normal'/>
            <div className='text-lg font-medium'>Añadir Nuevo Usuario</div>
          </div>
            <button className='w-7 h-7 border flex items-center justify-center border-gray-400 rounded'>
              <XMarkIcon className='w-5 h-5'/>
            </button>
        </header>
        <div className='w-full mx-auto h-full flex items-center justify-center   '>
          <div className="w-96">
          <Input id='correo' label='correo electronico' type='email' placeholder={'Ingresa correo electrónico'}/>
          </div>
        </div>
            <div className="modal-action items-center justify-between absolute bottom-0 flex h-20 w-full px-6 py-5 bg-gray-50">
              <label htmlFor="my-modal" className="btn btn-primary justify-end">Invitar</label>
              <label htmlFor="my-modal" className="btn btn-outline justify-end">Cancelar</label>
            </div>
        </div>
        </div>
    </div>
  )
}
