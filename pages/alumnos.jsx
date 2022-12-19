// Importaciones
import { getSession } from 'next-auth/react'

//Importaciones de Componentes
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from "../components/TextBlock";
import Pagination from "../components/Pagination";
// import Filter from "../components/alumnos/Filter";

// Iconos
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import { deleteAlumno, getAlumnos } from 'utils/strapi/alumnos';
import Link from 'next/link';
import Modal from 'components/alumnos/Modal';
import { Badge, Button, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react';
import CorrectoAsignacionData from 'components/alumnos/CorrectoAsignacionData';

const Alumnos = ({ session, alumnos }) => {

  return (
    <div>
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
          <div className="flex justify-between pb-4 bg-white dark:bg-gray-900">

            {/* Exportar Datos */}
            <Popover placement='bottom-start'>
              <PopoverTrigger>
                <Button>Exportar Datos</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader fontWeight='semibold'>Exportar archivos</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <CorrectoAsignacionData data={alumnos.data} />
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* Filtros */}
            {/* <Filter /> */}

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
                        {alumnos.data.map((alumno) => (

                          <tr key={alumno.attributes.matricula} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                            <td className="whitespace-nowrap py-4 px-8 text-sm font-medium text-gray-900 dark:text-gray-100">{alumno.attributes.matricula}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.apellidoPaterno}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.apellidoMaterno}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.nombres}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{
                              alumno.attributes.genero === 'Masculino' ? (<Badge className="!bg-blue-100 !text-blue-500 !capitalize !font-semibold">{alumno.attributes.genero}</Badge>)
                                :
                                (<Badge className="!bg-pink-100 !text-pink-500 !capitalize !font-semibold">{alumno.attributes.genero}</Badge>)
                            }</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.edad}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.telefono}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.correo}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.comunidad}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.discapacidad}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.lenguaIndigena}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.modalidad}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.semestre}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{alumno.attributes.carrera}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">
                              {alumno.attributes.presentaVerano ? (
                                <Badge className="!bg-green-100 !text-green-500 !capitalize !font-semibold">Si</Badge>
                              ) : (
                                <Badge className="!bg-red-100 !text-red-500 !capitalize !font-semibold">No</Badge>
                              )}
                            </td>
                            <td className="whitespace-nowrap px-8 py-4 ">
                              {
                                ((alumno.attributes.creditos * 100) / 500) <= 70 ? (<Badge className="!bg-red-100 !text-red-500 !capitalize !font-semibold">{`${((alumno.attributes.creditos * 100) / 500)}%`}</Badge>)
                                  :
                                  (<Badge className="!bg-green-100 !text-green-500 !capitalize !font-semibold">{`${((alumno.attributes.creditos * 100) / 500)}%`}</Badge>)
                              }
                            </td>

                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex items-center space-x-5">
                              <Link href={`/alumnos/${alumno.attributes.matricula}`}  >
                                <PencilSquareIcon className="w-5 h-5 cursor-pointer" />
                              </Link>
                              <Modal deleteAlumno={() => deleteAlumno(alumno.id)} />
                            </td>
                          </tr>
                        ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <Pagination page={alumnos.meta.pagination.page} pageCount={alumnos.meta.pagination.pageCount} total={alumnos.meta.pagination.total} />
      </MainLayout>
    </div>
  );
};

// GetServerSideProps
export const getServerSideProps = async (context) => {

  const session = await getSession(context);

  const alumnos = await getAlumnos({ page: 1, pageCount: 10 });

  if (!session) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }

  return {
    props: {
      session,
      alumnos,
    }
  }
}

export default Alumnos;
