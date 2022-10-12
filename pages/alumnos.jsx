//Importaciones de Componentes
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from "../components/TextBlock";

// Iconos
import { ChevronLeftIcon, ChevronDownIcon, ChevronRightIcon, PlusIcon, PencilSquareIcon, TrashIcon, FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Alumnos = () => {
  return (
    <>
      <MainLayout>

        {/* Título */}
        <TextBlock title={'Alumnos'} subtitle={'Visualiza los alumnos con porcentaje para realizar Servicio Social.'}>
          <button className='btn btn-primary'>
            <PlusIcon className='w-5 h-5 mr-2' />
            <span>Agregar Alumno</span>
          </button>
        </TextBlock>

        {/* Tabla */}

        <div className=" w-full px-8 mt-10 ">
          <div className="flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
            <div>
              <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <FunnelIcon className="mr-2 w-4 h-4 text-gray-400" />
                Filtros
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </button>
              <div id="dropdownAction" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
              </div>
            </div>
            <label htmlFor="table-search" className="sr-only">Buscar</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input type="search" id="table-search-users" className="block p-2.5 pl-10 w-80 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar..." />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle px-1">
                  <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full table-auto divide-y divide-gray-300 dark:divide-gray-500 text-gray-600 dark:text-gray-400 text-sm">
                      <thead className="bg-gray-50 dark:bg-gray-700 dark:text-gray-300 text-gray-900 text-sm">
                        <tr>
                          <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          </th>
                          <th scope="col" className="py-8 pr-3 text-left font-semibold">Matrícula</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold ">Apellido Paterno</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Apellido Materno</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Nombre(s)</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Correo Elctrónico</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Carrera</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Género</th>

                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100/80 dark:hover:bg-gray-600 cursor-pointer ">
                          <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          </td>
                          <td className="whitespace-nowrap py-4 pr-8 text-sm font-medium text-gray-900 dark:text-gray-100">19021089</td>
                          <td className="whitespace-nowrap px-8 py-4 ">Cadena</td>
                          <td className="whitespace-nowrap px-8 py-4 ">López</td>
                          <td className="whitespace-nowrap px-8 py-4 ">Héctor Federico</td>
                          <td className="whitespace-nowrap px-8 py-4 ">a19021089@iteshu.edu.mx</td>
                          <td className="whitespace-nowrap px-8 py-4 ">Sistemas Computacionales</td>
                          <td className="whitespace-nowrap px-8 py-4 ">Masculino</td>
                          
                          <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex items-center space-x-3">
                            <PencilSquareIcon className="w-5 h-5" />
                            <TrashIcon className="w-5 h-5" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="flex flex-col items-center mt-10">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Mostrando <span className="font-semibold text-gray-900 dark:text-white">1</span> de <span className="font-semibold text-gray-900 dark:text-white">10</span> de <span className="font-semibold text-gray-900 dark:text-white">100</span> entradas
          </span>
          <div className="inline-flex mt-2 xs:mt-0 space-x-2">
            <button className="btn-pagination">
              <ChevronLeftIcon className="w-5 h-5" />
              <span>Anterior</span>
            </button>
            <button className="btn-pagination">
              <span>Siguiente</span>
              <ChevronRightIcon className="w-5 h-5" />

            </button>
          </div>
        </div>


      </MainLayout>
    </>
  );
};

export default Alumnos;
