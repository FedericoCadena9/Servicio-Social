// Importaciones de Componentes
import { DocumentCard } from "../components/DocumentCard";
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from "../components/TextBlock";

//Iconos
import { DocumentTextIcon } from '@heroicons/react/24/solid'

const Documentos = () => {
  return (
    <>
      <MainLayout>
        <div className="grid grid-cols-9 min-h-screen">
          <div className="col-span-6">

            {/* Titulo */}
            <TextBlock title={'Documentos'} subtitle={'5 documentos encontrados'} />


            {/* Documentos */}
            <div className="flex items-center justify-center gap-8 flex-wrap my-6">
              <DocumentCard />
              <DocumentCard />
              <DocumentCard />
              <DocumentCard />
            </div>
          </div>

          {/* Rightbar */}
          <div className="sticky max-h-screen p-8 pt-12 bg-white dark:bg-gray-900 w-[25rem] top-0 right-0 border-l dark:border-gray-700">
            <h2 className="text-lg text-gray-900 dark:text-gray-100 font-medium">Previsualización del Archivo</h2>

            <div className="flex flex-col items-center my-9 justify-center gap-2">
              <DocumentTextIcon className=" text-gray-300 dark:text-gray-700 w-40 h-40" />

              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Nombre_del_documento.pdf</h3>
            </div>

            <div>
              <p className="text-gray-900 dark:text-gray-100 font-medium">Descripción del Documento</p>
              <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed mt-1 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti a, mollitia praesentium quo recusandae molestiae, possimus, dolor corporis totam alias aperiam tempora aut unde placeat enim nostrum perferendis. Eius, cupiditate.</p>
            </div>

            <div className="mt-6 w-full">
              <button className="btn btn-primary w-full">Generar informe</button>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Documentos;
