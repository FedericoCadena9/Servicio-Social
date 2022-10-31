// Importaciones
import { useReducer } from 'react';
import { getSession } from 'next-auth/react'
import toast, { Toaster } from 'react-hot-toast';

//Importaciones de Componentes
import { Input } from "../components/Input";
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from "../components/TextBlock";
import Link from 'next/link';

// Función pra leer los valores de los inputs e imprimirlos en un Objeto 
const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const AgregarDependencia = ({ session }) => {

    // Hook donde se almacenan los valores de los inputs
    const [form, setForm] = useReducer(formReducer, {})

    // Notificación Toast
    const notify = () => toast;

    // Función para leer los datos del Formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(form).length == 0) {
            return toast.error('Por favor, rellena todos los campos')
        }
        else {
            return toast.success('Dependencia agregada correctamente')
        }
    }
    console.log(form);

    return (
        <>
            <MainLayout title={'Agregar Dependencia'} name={session.user.name} img={session.user.image}>
                <div className="relative">
                    <Toaster />
                    <form onSubmit={handleSubmit}>

                        {/* Titulo y Botones */}
                        <div className="sticky top-0 bg-white dark:bg-slate-900">
                            <TextBlock title={'Nueva Dependencia'} subtitle={'Agrega la información proporcionada a partir del F1.'}>

                                {/* Boton Cancelar */}
                                <Link href={'/'} >
                                    <button className="btn btn-outline">
                                        <span>Cancelar</span>
                                    </button>
                                </Link>

                                {/* Boton Guardar */}
                                <button onClick={notify} className='btn btn-primary'>
                                    <span>Guardar</span>
                                </button>
                            </TextBlock>
                        </div>

                        <div className="w-full mx-auto max-w-4xl mt-8">
                            <div className="border border-gray-300 rounded-md p-6">

                                {/* Clave del Programa */}
                                <Input onChange={setForm} id={'clave-programa'} label={'Clave del Programa'} placeholder={'Clave del Programa'} type={'text'} />

                                <div className="flex w-full gap-4">
                                    {/* Institución Prestadora de Servicios */}
                                    <Input onChange={setForm} id={'institucion'} label={'Institución prestataria'} placeholder={'Nombre de Institución Prestataria'} type={'text'} />
        
                                    {/* Domicilio */}
                                    <Input onChange={setForm} id={'domicilio'} label={'Domicilio'} placeholder={'Domicilio de Dependencia'} type={'text'} />
                                </div>

                                <div className="flex w-full gap-4">
                                    {/* Teléfono */}
                                    <Input onChange={setForm} id={'telefono'} label={'Teléfono'} placeholder={'123 456 7890'} type={'phone'} />

                                    {/* Correo Electrónico */}
                                    <Input onChange={setForm} id={'correo'} label={'Correo Electrónico'} placeholder={'Correo'} type={'email'} />
                                </div>

                                {/* Nombre del Programa */}
                                <Input onChange={setForm} id={'nombre-programa'} label={'Nombre del Programa'} placeholder={'Nombre del Programa'} type={'text'} />

                                {/* Objetivo */}
                                <div className="mb-6 w-full">
                                    <label htmlFor="objetivo" className="label-input">Objetivo</label>
                                    <textarea onChange={setForm} placeholder="Definir el Objetivo" className="input-form" name="objetivo" id="objetivo" cols="30" rows="10"></textarea>
                                </div>

                                {/* Perfil Profesional */}
                                {/* <Select closeMenuOnSelect={false} components={animatedComponents} isMulti options={options} /> */}

                                <div className="flex w-full gap-4">
                                    {/* Director General */}
                                    <Input onChange={setForm} id={'director-general'} label={'Director General'} placeholder={'Nombre del Director General'} type={'text'} />

                                    {/* Responsable del Area */}
                                    <Input onChange={setForm} id={'responsable-area'} label={'Responsable del Área'} placeholder={'Nombre del Responsable del Área'} type={'text'} />
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </MainLayout>
        </>
    )
}

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

export default AgregarDependencia