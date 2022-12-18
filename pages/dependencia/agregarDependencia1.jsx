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

    // Hook para redireccionar a otra página
    const { query, push } = useRouter();


    //Hook para manejar el valor del Toggle de Vigencia
    const [vigencia, setVigencia] = useState(false);

    // Hook para los checkbox de las Carreras
    const [checked, setChecked] = useState([]);
    // Nombre de las Carreras
    const perfiles = ['Ingeniería en Administración', 'Ingeniería en Gestión Empresarial', 'Ingeniería en Sistemas Computacionales', 'Ingeniería en Mecatrónica', 'Ingeniería Industrial', 'Ingeniería en Energías Renovables', 'Ingeniería en Innovación Agrícola', 'Arquitectura', 'Gastronomía'];

    //Función que guardará en el Hook de los checkbox los valores de las carreras seleccionadas
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };


    console.log(checked);

    // Hook para enviar los datos del formulario
    const [dependencia, setDependencia] = useState({
        nombrePrograma: '',
        clavePrograma: '',
        institucion: '',
        objetivo: '',
        actividades: '',
        perfiles: checked,
        directorGeneral: '',
        responsableArea: '',
        telefono: '',
        correo: '',
        domicilio: '',
        isVigente: false
    });

    console.log(dependencia);

    // Hook para el manejo de los errores
    const [errors, setErrors] = useState({});

    // Función para validar los datos de los inputs
    const validarDatos = () => {
        const errors = {};
        if (!dependencia.nombrePrograma) errors.nombrePrograma = 'El nombre del programa es obligatorio';
        if (!dependencia.clavePrograma) errors.clavePrograma = 'La clave del programa es obligatoria';
        if (!dependencia.institucion) errors.institucion = 'La institución es obligatoria';
        if (!dependencia.objetivo) errors.objetivo = 'El objetivo es obligatorio';
        if (!dependencia.actividades) errors.actividades = 'Las actividades son obligatorias';
        if (!dependencia.directorGeneral) errors.directorGeneral = 'El director general es obligatorio';
        if (!dependencia.responsableArea) errors.responsableArea = 'El responsable de área es obligatorio';
        if (!dependencia.telefono) errors.telefono = 'El teléfono es obligatorio';
        if (!dependencia.correo) errors.correo = 'El correo es obligatorio';
        if (!dependencia.domicilio) errors.domicilio = 'El domicilio es obligatorio';
        return errors;
    }

    const handleSubmit = async (e) => {
        //Previene que se recargue la página al enviar el formulario
        e.preventDefault();
        //Valida los datos del formulario
        const errors = validarDatos();

        //Si no hay errores, envía los datos del formulario
        if (Object.keys(errors).length) return setErrors(errors);

        console.log(dependencia);
        await createDependencia();
        await push('/')
    }

    //Función para mandar los datos del formulario a la API
    const createDependencia = async () => {
        try {
            await fetch(`http://localhost:3000/api/dependencias`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dependencia)
            })
        }
        catch (error) {
            console.log(error);
        }
    }


    // Función para controlar la entrada y los valores de los inputs, se ejecuta cada vez que se escribe en un input y se guarda en el Hook
    const handleChange = (e) => setDependencia({ ...dependencia, [e.target.name]: e.target.value });


    return (
        <>
            <MainLayout title={'Agregar Dependencia'} name={session.user.name} img={session.user.image}>
                <div className="relative">
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
                                <button className='btn btn-primary'>
                                    <span>Guardar</span>
                                </button>
                            </TextBlock>
                        </div>

                        <div className="w-full mx-auto max-w-4xl mt-8">
                            <div className="border border-gray-300 rounded-md p-6 space-y-8">

                                {/* Clave del Programa */}
                                <Input error={errors.clavePrograma ? true : false} errorText={errors.clavePrograma} onChange={handleChange} id={'clavePrograma'} label={'Clave del Programa'} placeholder={'Clave del Programa'} type={'text'} />

                                <div className="flex w-full gap-4">
                                    {/* Institución Prestadora de Servicios */}
                                    <Input error={errors.institucion ? true : false} errorText={errors.institucion} onChange={handleChange} id={'institucion'} label={'Institución prestataria'} placeholder={'Nombre de Institución Prestataria'} type={'text'} />

                                    {/* Domicilio */}
                                    <Input error={errors.domicilio ? true : false} errorText={errors.domicilio} onChange={handleChange} id={'domicilio'} label={'Domicilio'} placeholder={'Domicilio de Dependencia'} type={'text'} />
                                </div>

                                <div className="flex w-full gap-4">
                                    {/* Teléfono */}
                                    <Input error={errors.telefono ? true : false} errorText={errors.telefono} onChange={handleChange} id={'telefono'} label={'Teléfono'} placeholder={'123 456 7890'} type={'phone'} />

                                    {/* Correo Electrónico */}
                                    <Input error={errors.correo ? true : false} errorText={errors.correo} onChange={handleChange} id={'correo'} label={'Correo Electrónico'} placeholder={'Correo'} type={'email'} />
                                </div>

                                {/* Nombre del Programa */}
                                <Input error={errors.nombrePrograma ? true : false} errorText={errors.nombrePrograma} onChange={handleChange} id={'nombrePrograma'} label={'Nombre del Programa'} placeholder={'Nombre del Programa'} type={'text'} />

                                {/* Objetivo */}
                                <div className="mb-6 w-full">
                                    <label htmlFor="objetivo" className="label-input">Objetivo</label>
                                    <textarea onChange={handleChange} placeholder="Definir el Objetivo" className={`input-form ${errors.objetivo ? 'ring-2 !ring-red-600 dark:!ring-red-500 ' : ''}`} name="objetivo" id="objetivo" cols="30" rows="10"></textarea>
                                    {errors.objetivo && <p className="text-red-600 text-xs font-medium mt-1 dark:text-red-400">{errors.objetivo}</p>}
                                </div>

                                {/* Actividades */}
                                <div className="mb-6 w-full">
                                    <label htmlFor="actividades" className="label-input">Actividades</label>
                                    <textarea onChange={handleChange} placeholder="Numerar las actividades a realziar" className={`input-form ${errors.actividades ? 'ring-2 !ring-red-600 dark:!ring-red-500 ' : ''}`} name="actividades" id="actividades" cols="30" rows="10"></textarea>
                                    {errors.actividades && <p className="text-red-600 text-xs font-medium mt-1 dark:text-red-400">{errors.actividades}</p>}
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
                                    <Input error={errors.directorGeneral ? true : false} errorText={errors.directorGeneral} onChange={handleChange} id={'directorGeneral'} label={'Director General'} placeholder={'Nombre del Director General'} type={'text'} />

                                    {/* Responsable del Area */}
                                    <Input error={errors.responsableArea ? true : false} errorText={errors.responsableArea} onChange={handleChange} id={'responsableArea'} label={'Responsable del Área'} placeholder={'Nombre del Responsable del Área'} type={'text'} />
                                </div>

                                {/* Vigencia de Dependencia */}
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-input">¿La Dependencia está Vigente?</span>
                                        <input onChange={handleChange} onClick={(e) => setVigencia(e.target.checked)} value={!vigencia} name="isVigente" type="checkbox" className="!toggle !bg-gray-100" />
                                    </label>
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