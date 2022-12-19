// Importaciones
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Box,
    NumberInput,
    NumberInputField,
    Select,
    Switch,
} from '@chakra-ui/react'

//Importacion de librerias internas
import { editAlumno, getAlumnoBySlug } from 'utils/strapi/alumnos';

//Importaciones de Componentes
import { MainLayout } from "../../components/Layouts/MainLayout";
import { TextBlock } from "../../components/TextBlock";
import Link from 'next/link';



const EditarAlumno = ({ session, alumno }) => {

    console.log(alumno);

    const router = useRouter();

    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            matricula: alumno.attributes.matricula,
            apellidoPaterno: alumno.attributes.apellidoPaterno,
            apellidoMaterno: alumno.attributes.apellidoMaterno,
            nombres: alumno.attributes.nombres,
            genero: alumno.attributes.genero,
            edad: alumno.attributes.edad,
            telefono: alumno.attributes.telefono,
            correo: alumno.attributes.correo,
            comunidad: alumno.attributes.comunidad,
            discapacidad: alumno.attributes.discapacidad,
            lenguaIndigena: alumno.attributes.lenguaIndigena,
            modalidad: alumno.attributes.modalidad,
            semestre: alumno.attributes.semestre,
            carrera: alumno.attributes.carrera,
            creditos: alumno.attributes.creditos,
            presentaVerano: alumno.attributes.presentaVerano,
        }
    })

    const alumnoId = alumno.id;
    // Función para Agregar Alumno
    async function onSubmit(values) {
        await editAlumno(alumnoId, values);
        router.push('/alumnos');
    }

    return (
        <>
            <MainLayout title={'Editar Alumno'} name={session.user.name} img={session.user.image}>
                <div className="relative">
                    {/* <Toaster /> */}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Titulo y Botones */}
                        <div className="sticky top-0 bg-white dark:bg-gray-900 z-50">
                            <TextBlock title={'Editar Alumno'} subtitle={'Editar información del Alumno.'}>

                                {/* Boton Cancelar */}
                                <Link href={'/alumnos'} >
                                    <button className="btn btn-outline">
                                        <span>Cancelar</span>
                                    </button>
                                </Link>

                                {/* Boton Guardar */}
                                <Button className='btn btn-primary !bg-emerald-600 !font-medium' isLoading={isSubmitting} type='submit'>
                                    Guardar
                                </Button>
                            </TextBlock>
                        </div>

                        <div className="w-full mx-auto max-w-4xl mt-8">
                            <FormControl isInvalid={errors}>
                                <div className="border border-gray-300 rounded-md p-6 space-y-6">

                                    {/* Matricula */}
                                    <Box>
                                        <FormLabel htmlFor='matricula'>Matricula</FormLabel>
                                        <NumberInput >
                                            <NumberInputField
                                                id='matricula'
                                                placeholder='Ingresar matricula'
                                                {...register('matricula', {
                                                    required: 'La matricula es obligatoria.',
                                                    minLength: { value: 8, message: 'La matricula consta de minimo 8 digitos' },
                                                })}
                                            />
                                        </NumberInput>

                                        <FormErrorMessage>
                                            {errors?.matricula?.message}
                                        </FormErrorMessage>
                                    </Box>

                                    {/* Apellido Paterno */}
                                    <div className="flex w-full gap-4">
                                        <Box className='w-full'>
                                            <FormLabel htmlFor='apellidoPaterno'>Apellido Paterno</FormLabel>
                                            <Input
                                                id='apellidoPaterno'
                                                placeholder='Ingresar Apellido Paterno'
                                                {...register('apellidoPaterno', {
                                                    required: 'Este campo es obligatorio',
                                                })}
                                            />
                                            <FormErrorMessage>
                                                {errors?.apellidoPaterno?.message}
                                            </FormErrorMessage>
                                        </Box>

                                        {/* Apellido Materno */}
                                        <Box className='w-full'>
                                            <FormLabel htmlFor='apellidoMaterno'>Apellido Materno</FormLabel>
                                            <Input
                                                id='apellidoMaterno'
                                                placeholder='Ingresar Apellido Materno'
                                                {...register('apellidoMaterno', {
                                                    required: 'Este campo es obligatorio',
                                                })}
                                            />
                                            <FormErrorMessage>
                                                {errors?.apellidoMaterno?.message}
                                            </FormErrorMessage>
                                        </Box>
                                    </div>

                                    {/* Nombres */}
                                    <Box>
                                        <FormLabel htmlFor='nombres'>Nombre(s)</FormLabel>
                                        <Input
                                            id='nombres'
                                            placeholder='Ingresar Nombres'
                                            {...register('nombres', {
                                                required: 'Este campo es obligatorio',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors?.nombres?.message}
                                        </FormErrorMessage>
                                    </Box>

                                    {/* Genero */}
                                    <Box>
                                        <FormLabel htmlFor='genero' >Género</FormLabel>
                                        <Select id='genero' placeholder='Elegir Género' {...register('genero', {
                                            required: 'Debe elegir un género',
                                        })}>
                                            <option>Masculino</option>
                                            <option>Femenino</option>
                                        </Select>
                                        <FormErrorMessage>
                                            {errors?.genero?.message}
                                        </FormErrorMessage>
                                    </Box>

                                    {/* Edad */}
                                    <Box>
                                        <FormLabel htmlFor='edad'>Edad</FormLabel>
                                        <NumberInput>
                                            <NumberInputField
                                                id='edad'
                                                placeholder='Ingresar Edad'
                                                {...register('edad', {
                                                    required: 'Este campo es obligatorio',
                                                    maxLength: { value: 2, message: 'No se pueden agregar más de dos digitos.' },
                                                    valueAsNumber: true,
                                                })}
                                            />
                                        </NumberInput>
                                        <FormErrorMessage>
                                            {errors?.edad?.message}
                                        </FormErrorMessage>
                                    </Box>

                                    <div className="flex w-full gap-4">
                                        {/* Teléfono */}
                                        <Box className='w-full'>
                                            <FormLabel htmlFor='telefono'>Teléfono</FormLabel>
                                            <Input
                                                id='telefono'
                                                placeholder='Ingresar Teléfono'
                                                {...register('telefono', {
                                                    required: 'Este campo es obligatorio',
                                                    maxLength: { value: 10, message: 'No se pueden agregar más de diez digitos.' },
                                                })}
                                            />
                                            <FormErrorMessage>
                                                {errors?.telefono?.message}
                                            </FormErrorMessage>
                                        </Box>

                                        {/* Correo */}
                                        <Box className='w-full'>
                                            <FormLabel htmlFor='correo'>Correo</FormLabel>
                                            <Input
                                                id='correo'
                                                placeholder='Ingresar Correo'
                                                {...register('correo', {
                                                    required: 'Este campo es obligatorio',
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: 'El correo no es válido'
                                                    }
                                                })}
                                            />
                                            <FormErrorMessage>
                                                {errors?.correo?.message}
                                            </FormErrorMessage>
                                        </Box>
                                    </div>

                                    {/* Comunidad */}
                                    <Box>
                                        <FormLabel htmlFor='comunidad'>Comunidad</FormLabel>
                                        <Select id='comunidad' placeholder='Elegir Comunidad' {...register('comunidad', {
                                            required: 'Debe elegir una comunidad',
                                        })}>
                                            <option>Comunidad 1</option>
                                            <option>Comunidad 2</option>
                                            <option>Comunidad 3</option>
                                        </Select>
                                        <FormErrorMessage>
                                            {errors?.comunidad?.message}
                                        </FormErrorMessage>
                                    </Box>

                                    <div className="flex w-full gap-4">
                                        {/* Discapacidad */}
                                        <Box className='w-full'>
                                            <FormLabel htmlFor='discapacidad'>Discapacidad</FormLabel>
                                            <Select id='discapacidad' placeholder='Elegir Discapacidad' {...register('discapacidad', {
                                                required: 'Debe elegir una discapacidad',
                                            })}>
                                                <option>Ninguna</option>
                                                <option>Visual</option>
                                                <option>Motriz</option>
                                            </Select>
                                            <FormErrorMessage>
                                                {errors?.discapacidad?.message}
                                            </FormErrorMessage>
                                        </Box>

                                        {/* Lengua Indigena */}
                                        <Box className='w-full'>
                                            <FormLabel htmlFor='lenguaIndigena'>Lengua Indígena</FormLabel>
                                            <Select id='lenguaIndigena' placeholder='Elegir Lengua Indígena' {...register('lenguaIndigena', {
                                                required: 'Debe elegir una lengua indígena',
                                            })}>
                                                <option>Si</option>
                                                <option>No</option>
                                            </Select>
                                            <FormErrorMessage>
                                                {errors?.lenguaIndigena?.message}
                                            </FormErrorMessage>
                                        </Box>
                                    </div>

                                    <div className="flex w-full gap-4">
                                        {/* Modalidad */}
                                        <Box className='w-full'>
                                            <FormLabel htmlFor='modalidad'>Modalidad</FormLabel>
                                            <Select id='modalidad' placeholder='Elegir
                                            Modalidad' {...register('modalidad', {
                                                required: 'Debe elegir una modalidad',
                                            })}>
                                                <option>Escolarizada</option>
                                                <option>Mixta</option>

                                            </Select>
                                            <FormErrorMessage>
                                                {errors?.modalidad?.message}
                                            </FormErrorMessage>
                                        </Box>

                                        {/* Semestre */}
                                        <Box className='w-full'>
                                            <FormLabel htmlFor='semestre'>Semestre</FormLabel>
                                            <Select id='semestre' placeholder='Elegir
                                            Semestre' {...register('semestre', {
                                                required: 'Debe elegir un semestre',
                                            })}>
                                                <option>Primero</option>
                                                <option>Segundo</option>
                                                <option>Tercero</option>
                                                <option>Cuarto</option>
                                                <option>Quinto</option>
                                                <option>Sexto</option>
                                                <option>Septimo</option>
                                                <option>Octavo</option>
                                                <option>Noveno</option>
                                                <option>Decimo</option>
                                                <option>Onceavo</option>
                                                <option>Doceavo</option>
                                            </Select>
                                            <FormErrorMessage>
                                                {errors?.semestre?.message}
                                            </FormErrorMessage>
                                        </Box>
                                    </div>

                                    {/* Carrera */}
                                    <Box>
                                        <FormLabel htmlFor='carrera'>Carrera</FormLabel>
                                        <Select id='carrera' placeholder='Elegir Carrera' {...register('carrera', {
                                            required: 'Debe elegir una carrera',
                                        })}>
                                            <option>Ingeniería en Sistemas Computacionales</option>
                                            <option>Ingeniería en Administración</option>
                                            <option>Ingeniería en Gestión de Empresas</option>
                                            <option>Ingeniería en Mecatronica</option>
                                            <option>Ingeniería Industrial</option>
                                            <option>Ingeniería en Innovación Agricola y Sustentable</option>
                                            <option>Ingeniería en Energías Renovables</option>
                                            <option>Arquitectura</option>
                                            <option>Gastronomia</option>
                                        </Select>
                                        <FormErrorMessage>
                                            {errors?.carrera?.message}
                                        </FormErrorMessage>
                                    </Box>

                                    <div className="w-full flex gap-10">
                                        {/* Creditos */}
                                        <Box className='w-full'>
                                            <FormLabel htmlFor='creditos'>Creditos</FormLabel>
                                            <Input id='creditos' type='number' placeholder='Creditos' {...register('creditos', {
                                                required: 'Debe ingresar los creditos',
                                                valueAsNumber: true,
                                            })} />
                                            <FormErrorMessage>
                                                {errors?.creditos?.message}
                                            </FormErrorMessage>
                                        </Box>

                                        {/* Presenta Verano */}
                                        <Box className='w-full'>
                                            <FormLabel htmlFor='presentaVerano'>¿Presenta Verano?</FormLabel>
                                            <Switch size='lg' id='presentaVerano' {...register('presentaVerano')} />

                                        </Box>
                                    </div>





                                </div>
                            </FormControl>
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
    const alumno = await getAlumnoBySlug(context.params.matricula);

    if (!session) return {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }

    return {
        props: {
            session,
            alumno
        }
    }
}

export default EditarAlumno