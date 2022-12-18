// Importaciones
import { useReducer, useState, useEffect } from 'react';
import { getSession } from 'next-auth/react'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

//Importaciones de Componentes
import { Input } from "../../components/Input";
import { MainLayout } from "../../components/Layouts/MainLayout";
import { TextBlock } from "../../components/TextBlock";
import Link from 'next/link';



const AgregarDependencia = ({ session }) => {

    const [checked, setChecked] = useState([]);
    const perfiles = ['Ingeniería en Administración', 'Ingeniería en Gestión Empresarial', 'Ingeniería en Sistemas Computacionales', 'Ingeniería en Mecatrónica', 'Ingeniería Industrial', 'Ingeniería en Energías Renovables', 'Ingeniería en Innovación Agrícola', 'Arquitectura', 'Gastronomía'];
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    // Función pra leer los valores de los inputs e imprimirlos en un Objeto 
const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value,
    }
}

    // Hook donde se almacenan los valores de los inputs
    const [form, setForm] = useReducer(formReducer, {});


    // Notificación Toast
    const notify = () => toast;

    // Hook para redireccionar a otra página
    const { query, push } = useRouter();


    const validate = () => {
        if (!form.nombrePrograma) {
            return toast.error('Nombre de Programa Obligatorio')
        }

        if (!form.clavePrograma) {
            return toast.error('Clave de Programa Obligatorio')
        }
    }

    // Función para leer los datos del Formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (Object.keys(form).length == 0) {
        //     return toast.error('Por favor, rellena todos los campos')
        // }
        // else {
        //     return toast.success('Dependencia agregada correctamente')
        // }

        // let errors = validate()
        console.log(form);
        // await createDependencia()
        // await push('/')
    }



    //Función para mandar los Datos a la BD
    const createDependencia = async () => {
        try {
            await fetch(`http://localhost:3000/api/dependencias`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    const getDependencia = async () => {
        await fetch(`http://localhost:3000/api/dependencias/${query._id}`)
        const data = await res.json()
        console.log(data);
    }

    useEffect(() => {
        if (query.id) {
            console.log(query.id);
        }
    }, []);

    return (
        <>
            <MainLayout title={'Agregar Dependencia'} name={session.user.name} img={session.user.image}>
                <div className="relative">
                    <Toaster />
                    <form onSubmit={handleSubmit}>

                        {/* Titulo y Botones */}
                        <div className="sticky top-0 bg-white dark:bg-gray-900">
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
                            <div className="border border-gray-300 rounded-md p-6 space-y-8">

                                {/* Clave del Programa */}
                                <Input onChange={setForm} id={'clavePrograma'} label={'Clave del Programa'} placeholder={'Clave del Programa'} type={'text'} />

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
                                <Input onChange={setForm} id={'nombrePrograma'} label={'Nombre del Programa'} placeholder={'Nombre del Programa'} type={'text'} />

                                {/* Objetivo */}
                                <div className="mb-6 w-full">
                                    <label htmlFor="objetivo" className="label-input">Objetivo</label>
                                    <textarea onChange={setForm} placeholder="Definir el Objetivo" className="input-form" name="objetivo" id="objetivo" cols="30" rows="10"></textarea>
                                </div>

                                {/* Actividades */}
                                <div className="mb-6 w-full">
                                    <label htmlFor="actividades" className="label-input">Actividades</label>
                                    <textarea onChange={setForm} placeholder="Numerar las actividades a realziar" className="input-form" name="actividades" id="actividades" cols="30" rows="10"></textarea>
                                </div>

                                {/* Perfil Profesional  */}
                                <div>
                                    <p className="label-input">Perfiles Profesionales</p>
                                    <div className="grid grid-cols-2 gap-6 mt-6">
                                        {perfiles.map((data, index) => (
                                            <div key={index}>
                                                <div className="inline-flex items-center space-x-1.5">
                                                    <input id={index} value={data} onChange={handleCheck} type="checkbox" className="cursor-pointer rounded border-gray-300 text-blue-600 transition focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                                                    <label htmlFor={index} className="cursor-pointer truncate text-xs font-medium text-gray-500">{data}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex w-full gap-4">
                                    {/* Director General */}
                                    <Input onChange={setForm} id={'directorGeneral'} label={'Director General'} placeholder={'Nombre del Director General'} type={'text'} />

                                    {/* Responsable del Area */}
                                    <Input onChange={setForm} id={'responsableArea'} label={'Responsable del Área'} placeholder={'Nombre del Responsable del Área'} type={'text'} />
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