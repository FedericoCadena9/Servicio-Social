import Link from 'next/link'

//Iconos
import { Squares2X2Icon } from '@heroicons/react/24/outline'
// Icon Plus
import { PlusIcon } from '@heroicons/react/24/outline'  

export const TextBlock = () => {
  return (
    <div className='px-8 py-4 flex items-center justify-between'>
        <div>
            <h1 className='text-gray-900 font-bold text-4xl font-secondary'>Dependencias</h1>
            <p className='text-gray-500 mt-2'>123 resultados encontrados </p>
        </div>
        <div className="">
            <Link href={'/'}>
                <a className='btn btn-primary flex items-center gap-2'>

                    <span>Agregar Dependencia</span>
                </a>
            </Link>
        </div>
    </div>
  )
}
