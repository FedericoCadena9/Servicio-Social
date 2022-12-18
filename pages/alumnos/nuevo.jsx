// Importaciones
import { useReducer, useState, useEffect } from 'react';
import { getSession } from 'next-auth/react'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { baseUrl } from 'utils/dataApi';

//Importaciones de Componentes
import { Input } from "../../components/Input";
import { MainLayout } from "../../components/Layouts/MainLayout";
import { TextBlock } from "../../components/TextBlock";
import Link from 'next/link';
import axios from 'axios';



const AgregarDependencia = ({ session }) => {

    const [values, setValues] = useState({
        matricula: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        nombres: '',
        telefono: '',
        correo: '',
        genero: '',
        edad: '',
        creditos: '',
        presentaVerano: true,
    });

    const { matricula, apellidoPaterno, apellidoMaterno, nombres, telefono, correo, genero, edad, creditos } = values;


    const handleSubmit = async (e) => {
        e.preventDefault();

        const empty = Object.values(values).some((value) => value === '');

        if (empty) {
            console.log('Hay campos vacios');
        }

        const response = await fetch(`${baseUrl}/alumnos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"data": values}),
        });


        if (!response.ok) {
            console.log('Error al guardar');
        } else {
            console.log('Guardado');
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    return (
        <>
            <MainLayout title={'Nuevo Alumno'} name={session.user.name} img={session.user.image}>
                <div className="relative">
                    {/* <Toaster /> */}
                    <form onSubmit={handleSubmit}>

                        {/* Titulo y Botones */}
                        <div className="sticky top-0 bg-white dark:bg-gray-900">
                            <TextBlock title={'Nueva Alumno'} subtitle={'Agrega de manera individual información relevante de un alumno.'}>

                                {/* Boton Cancelar */}
                                <Link href={'/alumnos'} >
                                    <button className="btn btn-outline">
                                        <span>Cancelar</span>
                                    </button>
                                </Link>

                                {/* Boton Guardar */}
                                <input type="submit" value="Guardar" className='btn btn-primary' />
                            </TextBlock>
                        </div>

                        <div className="w-full mx-auto max-w-4xl mt-8">
                            <div className="border border-gray-300 rounded-md p-6 space-y-8">

                                {/* Matricula */}
                                <Input value={matricula} onChange={handleInputChange} id={'matricula'} label={'Matricula'} placeholder={'Ingresa Matricula'} type={'text'} />

                                {/* Apellido Paterno */}
                                <Input value={apellidoPaterno} onChange={handleInputChange} id={'apellidoPaterno'} label={'Apellido Paterno'} placeholder={'Ingresa Apellido Paterno'} type={'text'} />

                                {/* Apellido Materno */}
                                <Input value={apellidoMaterno} onChange={handleInputChange} id={'apellidoMaterno'} label={'Apellido Materno'} placeholder={'Ingresa Apellido Materno'} type={'text'} />

                                {/* Nombre */}
                                <Input value={nombres} onChange={handleInputChange} id={'nombres'} label={'Nombre'} placeholder={'Ingresa Nombre'} type={'text'} />

                                {/* Teléfono */}
                                <Input value={telefono} onChange={handleInputChange} id={'telefono'} label={'Teléfono'} placeholder={'Ingresa Teléfono'} type={'text'} />

                                {/* Correo */}
                                <Input value={correo} onChange={handleInputChange} id={'correo'} label={'Correo'} placeholder={'Ingresa Correo'} type={'text'} />

                                {/* Genero */}
                                <Input value={genero} onChange={handleInputChange} id={'genero'} label={'Genero'} placeholder={'Ingresa Genero'} type={'text'} />

                                {/* Edad */}
                                <Input value={edad} onChange={handleInputChange} id={'edad'} label={'Edad'} placeholder={'Ingresa Edad'} type={'number'} />

                                {/* Creditos */}
                                <Input value={creditos} onChange={handleInputChange} id={'creditos'} label={'Creditos'} placeholder={'Ingresa Creditos'} type={'number'} />
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