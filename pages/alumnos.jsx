// Importaciones
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router';

//Importaciones de Componentes
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from "../components/TextBlock";
import Pagination from "../components/Pagination";

// Iconos
import { ChevronDownIcon, PlusIcon, PencilSquareIcon, TrashIcon, FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { baseUrl, dataApi } from 'utils/dataApi';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Alumnos = ({ session, alumnos }) => {

  console.log(alumnos);

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  }

  const deleteAlumno = async (id) => {
    const response = await fetch(`${baseUrl}/alumnos/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      console.log('Error al eliminar');
    } else {
      console.log('Eliminado');
      refreshData();
    }
  }

  console.log(alumnos);
  return (
    <>
      <MainLayout title={'Alumnos'} name={session.user.name} img={session.user.image}>

        {/* Título */}
        <TextBlock title={'Alumnos'} subtitle={'Visualiza los alumnos con porcentaje para realizar Servicio Social.'}>
          <Link href={'/alumnos/nuevo'}>
            <button className='btn btn-primary'>
              <PlusIcon className='w-5 h-5 mr-2' />
              <span>Agregar Alumno</span>
            </button>
          </Link>
        </TextBlock>


        <div className=" w-full px-8 mt-10 ">
          <div className="flex justify-end pb-4 bg-white dark:bg-gray-900">

            {/* Filtros */}
            <div>
              <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <FunnelIcon className="mr-2 w-4 h-4 text-gray-400" />
                Filtros
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </button>

              {/* Dropdown de Filtros */}
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
                          <th scope="col" className="py-8 px-8 text-left font-semibold">Matrícula</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold ">Apellido Paterno</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Apellido Materno</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Nombre(s)</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Género</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Edad</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Teléfono</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Correo Electrónico</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Comunidad</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Discapacidad</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Lengua Indigena</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Modalidad</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Semestre</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Carrera</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Verano</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Creditos</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Acciones</th>

                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {/* {alumnos.map((alumno) => (

                          <tr key={alumno.attributes.matricula} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">

                            <td className="whitespace-nowrap py-4 px-8 text-sm font-medium text-gray-900 dark:text-gray-100">{alumno.attributes.matricula}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.apellidoPaterno}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.apellidoMaterno}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.nombres}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.correo}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.telefono}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.genero}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{`${alumno.attributes.presentaVerano}`}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.creditos}</td>

                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex items-center space-x-3">
                              <Link href={`/alumnos/${alumno.attributes.matricula}`}  >
                                <PencilSquareIcon className="w-5 h-5 cursor-pointer" />
                              </Link>
                              <label htmlFor="deleteAlumnoModal">

                                <TrashIcon className="w-5 h-5 cursor-pointer" />
                              </label>

                              <input type="checkbox" id="deleteAlumnoModal" className="modal-toggle" />
                              <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                  <h3 className="font-bold text-lg">¿Estás seguro que deseas eliminar este elemento?</h3>
                                  <p className="py-4"> Esta acción no se puede deshacer.</p>
                                  <div className="modal-action">
                                    <label htmlFor="deleteAlumnoModal" className="btn">Cancelar</label>
                                    <label onClick={() => deleteAlumno(alumno.id)} htmlFor="deleteAlumnoModal" className="btn">Aceptar</label>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>




                        ))
                        } */}
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
    </>
  );
};

// GetServerSideProps
export const getServerSideProps = async (context) => {

  const session = await getSession(context);

  const alumnos = await dataApi(`${baseUrl}/alumnos`);

  if (!session) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }

  return {
    props: {
      session,
      alumnos: alumnos?.data
    }
  }
}

export default Alumnos;
