//Importaciones de Componentes
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from "../components/TextBlock";

// Iconos
import { PlusIcon } from "@heroicons/react/20/solid";
const Dependencias = () => {
  return (
    <>
      <MainLayout>

        <TextBlock title={'Dependencias'} subtitle={'123 resultados encontrados'}>
          <button className='btn btn-primary'>
            <PlusIcon className='w-5 h-5 mr-2' />
            <span>Agregar Dependencia</span>
          </button>
        </TextBlock>
      </MainLayout>
    </>
  );
};

export default Dependencias;
