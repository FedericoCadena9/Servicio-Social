// Importaciones
import { getSession } from 'next-auth/react'

//Importaciones de Componentes
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from "../components/TextBlock";
import Pagination from "../components/Pagination";
// import Filter from "../components/alumnos/Filter";

// Iconos
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import { deleteDependencia, getDependencias } from 'utils/strapi/dependencias';
import Link from 'next/link';
import Modal from 'components/dependencias/Modal';

const Dependencias = ({ session, dependencias }) => {

  return (
    <div>
      <MainLayout title={'Dependencias'} name={session.user.name} img={session.user.image}>

        {/* Título */}
        <TextBlock title={'Dependencias'} subtitle={`${dependencias.meta.pagination.total} ${dependencias.meta.pagination.total > 1 ? 'dependencias encontradas' : 'dependencia encontrada'}`}>
          <Link href={'/dependencia/nuevo'}>
            <button className='btn btn-primary'>
              <PlusIcon className='w-5 h-5 mr-2' />
              <span>Nueva dependencia</span>
            </button>
          </Link>
        </TextBlock>


        <div className=" w-full px-8 mt-10 ">
          <div className="flex justify-between pb-4 bg-white dark:bg-gray-900">

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
                          <th scope="col" className="py-8 px-8 text-left font-semibold">Clave</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold ">Nomre del Programa</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Institución</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Teléfono</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Correo</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Sector</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Calle</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Colonia</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Ciudad</th>
                          <th scope="col" className="px-8 py-3.5 text-left font-semibold">Acciones</th>

                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {dependencias.data.map((dependencia) => (

                          <tr key={dependencia.attributes.matricula} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                            <td className="whitespace-nowrap py-4 px-8 text-sm font-medium text-gray-900 dark:text-gray-100">{dependencia.attributes.clavePrograma}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{dependencia.attributes.nombrePrograma}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{dependencia.attributes.institucion}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{dependencia.attributes.telefono1}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{dependencia.attributes.correo1}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{dependencia.attributes.sector}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{dependencia.attributes.calle}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{dependencia.attributes.colonia}</td>
                            <td className="whitespace-nowrap px-8 py-4 ">{dependencia.attributes.ciudad}</td>

                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex items-center space-x-5">
                              <Link href={`/dependencia/${dependencia.attributes.clavePrograma}`}  >
                                <PencilSquareIcon className="w-5 h-5 cursor-pointer" />
                              </Link>
                              <Modal deleteDependencia={() => deleteDependencia(dependencia.id)} />
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


        <Pagination page={dependencias.meta.pagination.page} pageCount={dependencias.meta.pagination.pageCount} total={dependencias.meta.pagination.total} />
      </MainLayout>
    </div>
  );
};

// GetServerSideProps
export const getServerSideProps = async (context) => {

  const session = await getSession(context);

  const dependencias = await getDependencias({ page: 1, pageCount: 10 });

  if (!session) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }

  return {
    props: {
      session,
      dependencias,
    }
  }
}

export default Dependencias;
