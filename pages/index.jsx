// Importaciones
import { getSession } from 'next-auth/react'
import Link from "next/link";

//Importaciones de Componentes
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from "../components/TextBlock";
import Pagination from "../components/Pagination";

// Iconos
import { ChevronDownIcon, PlusIcon, PencilSquareIcon, TrashIcon, FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Dependencias = ({ session }) => {

  return (
    <>
      {
        session ? (
          <MainLayout name={session.user.name} img={session.user.image}>

            {/* Título */}
            <TextBlock title={'Dependencias'} subtitle={'123 resultados encontrados'}>
              <Link href={'/agregarDependencia'}>
                <button className='btn btn-primary'>
                  <PlusIcon className='w-5 h-5 mr-2' />
                  <span>Agregar Dependencia</span>
                </button></Link>
            </TextBlock>

            <div className=" w-full px-8 mt-10 ">
              <div className="flex justify-between items-center pb-4 bg-white dark:bg-gray-900">

                {/* Filtros */}
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

                {/* Buscador */}
                <label htmlFor="table-search" className="sr-only">Buscar</label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input type="search" id="table-search-users" className="block p-2.5 pl-10 w-80 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar..." />
                </div>
              </div>

              {/* Tabla */}
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
                              <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left font-semibold">Clave</th>
                              <th scope="col" className="px-3 py-3.5 text-left font-semibold ">Nombre</th>
                              <th scope="col" className="px-3 py-3.5 text-left font-semibold">Insitución</th>
                              <th scope="col" className="px-3 py-3.5 text-left font-semibold">Perfil Profesional</th>
                              <th scope="col" className="px-3 py-3.5 text-left font-semibold">Estado</th>
                              <th scope="col" className="px-3 py-3.5 text-left font-semibold">Acción</th>

                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100/80 dark:hover:bg-gray-600 cursor-pointer ">
                              <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              </td>
                              <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100">14P21-6UNF021-SSA</td>
                              <td className="whitespace-nowrap px-3 py-4 ">Seguimiento de actividades de la Academia...</td>
                              <td className="whitespace-nowrap px-3 py-4 ">Instituto Tecnológico Superior de Huichapan</td>
                              <td className="whitespace-nowrap px-3 py-4 ">
                                <span className="text-xs rounded-full px-2 py-1 bg-orange-200/75 text-orange-500 font-medium dark:bg-orange-900/40 dark:text-orange-400">
                                  Arquitectura
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4">
                                <div className="gap-2 flex items-center text-xs rounded-full px-2 py-1 bg-green-100 text-green-500 font-medium dark:bg-green-900/40 dark:text-green-400">
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                  <span>Vigente</span>
                                </div>
                              </td>
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


            <Pagination />


          </MainLayout>
        ) : (
          <p>Skeleton</p>
        )
      }
    </>
  );
};

// GetServerSideProps
export const getServerSideProps = async (context) => {

  const session = await getSession(context);

  if (!session) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }

  return {
    props: {
      session
    }
  }
}

export default Dependencias;
