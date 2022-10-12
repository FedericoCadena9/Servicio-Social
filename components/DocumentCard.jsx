//Iconos
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { DocumentTextIcon } from '@heroicons/react/24/solid'

export const DocumentCard = () => {
    return (

        <div class="cursor-pointer w-full max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition hover:scale-95 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
                <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                    <EllipsisVerticalIcon className="w-6 h-6" />
                </button>
                <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                    <ul class="py-1" aria-labelledby="dropdownButton">
                        <li>
                            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="">
                <div className="flex items-center justify-center flex-col my-8">
                    <DocumentTextIcon className='w-24 h-24 text-gray-300 dark:text-gray-700' />
                    <h5 class="mt-3 font-medium text-gray-900 dark:text-white">Nombre_del_documento.pdf </h5>
                </div>

                <div className='border-t dark:border-gray-700 text-xs p-6'>
                    <p className='font-medium text-gray-800 dark:text-gray-200'>Tamaño del Archivo</p>
                    <p className='text-gray-500 dark:text-gray-600'>1.76 MB</p>
                </div>
            </div>
        </div>

    )
}
