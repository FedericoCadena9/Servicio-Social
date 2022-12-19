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
    Select,
    Textarea,
} from '@chakra-ui/react'

//Importacion de librerias internas
import { editDependencia, getDependenciaBySlug } from 'utils/strapi/dependencias';

//Importaciones de Componentes
import { MainLayout } from "../../components/Layouts/MainLayout";
import { TextBlock } from "../../components/TextBlock";
import Link from 'next/link';



const EditarDependencia = ({ session, dependencia }) => {

    console.log(dependencia);

    const router = useRouter();

    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            nombrePrograma: dependencia.attributes.nombrePrograma,
            clavePrograma: dependencia.attributes.clavePrograma,
            institucion: dependencia.attributes.institucion,
            objetivo: dependencia.attributes.objetivo,
            actividades: dependencia.attributes.actividades,
            directorGeneral: dependencia.attributes.directorGeneral,
            responsableArea: dependencia.attributes.responsableArea,
            telefono1: dependencia.attributes.telefono1,
            correo1: dependencia.attributes.correo1,
            sector: dependencia.attributes.sector,
            calle: dependencia.attributes.calle,
            colonia: dependencia.attributes.colonia,
            ciudad: dependencia.attributes.ciudad,
        }
    })

    const dependenciaId = dependencia.id;
    // Función para Agregar dependencia
    async function onSubmit(values) {
        await editDependencia(dependenciaId, values);
        router.push('/');
    }

    return (
        <>
            <MainLayout title={'Editar Dependencia'} name={session.user.name} img={session.user.image}>
                <div className="relative">
                    {/* <Toaster /> */}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Titulo y Botones */}
                        <div className="sticky top-0 bg-white dark:bg-gray-900 z-50">
                            <TextBlock title={'Editar Dependencia'} subtitle={'Edita información de la dependencia.'}>

                                {/* Boton Cancelar */}
                                <Link href={'/'} >
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
                            <div className="border border-gray-300 rounded-md p-6 space-y-6">

                                {/* Nombre del Programa */}
                                <FormControl isInvalid={errors.nombrePrograma}>
                                    <FormLabel htmlFor='nombrePrograma'>Nombre del Programa</FormLabel>
                                    <Input
                                        id='nombrePrograma'
                                        placeholder='Ingresar Nombre del Programa'
                                        {...register('nombrePrograma', {
                                            required: 'Este campo es obligatorio',
                                        })}
                                    />
                                    <FormErrorMessage>
                                        {errors?.nombrePrograma?.message}
                                    </FormErrorMessage>
                                </FormControl>

                                {/* Clave del Programa */}
                                <FormControl isInvalid={errors.clavePrograma}>
                                    <FormLabel htmlFor='clavePrograma'>Clave del Programa</FormLabel>
                                    <Input
                                        id='clavePrograma'
                                        placeholder='Ingresar Clave del Programa'
                                        {...register('clavePrograma', {
                                            required: 'Este campo es obligatorio',
                                        })}
                                    />
                                    <FormErrorMessage>
                                        {errors?.clavePrograma?.message}
                                    </FormErrorMessage>
                                </FormControl>

                                {/* Institución */}
                                <FormControl isInvalid={errors.institucion}>
                                    <FormLabel htmlFor='institucion'>Institución</FormLabel>
                                    <Input
                                        id='institucion'
                                        placeholder='Ingresar Institución'
                                        {...register('institucion', {
                                            required: 'Debe de asignar una institución al programa.',
                                        })}
                                    />
                                    <FormErrorMessage>
                                        {errors?.institucion?.message}
                                    </FormErrorMessage>
                                </FormControl>

                                {/* Objetivo */}
                                <FormControl isInvalid={errors.objetivo}>
                                    <FormLabel htmlFor='objetivo'>Objetivo</FormLabel>
                                    <Textarea
                                        id='objetivo'
                                        placeholder='Ingresar Objetivo'
                                        {...register('objetivo', {
                                            required: 'Este campo es obligatorio',
                                        })}
                                    />
                                    <FormErrorMessage>
                                        {errors?.objetivo?.message}
                                    </FormErrorMessage>
                                </FormControl>

                                {/* Actividades */}
                                <FormControl isInvalid={errors.actividades}>
                                    <FormLabel htmlFor='actividades'>Actividades</FormLabel>
                                    <Textarea className='!h-60' placeholder='Agregar las actividades del programa'
                                        {...register('actividades', {
                                            required: 'Este campo es obligatorio',
                                        })}
                                    />
                                    <FormErrorMessage>
                                        {errors?.actividades?.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <div className="flex w-full gap-4">
                                    {/* Director General */}
                                    <FormControl isInvalid={errors.directorGeneral}>
                                        <FormLabel htmlFor='directorGeneral'>Director General</FormLabel>
                                        <Input
                                            id='directorGeneral'
                                            placeholder='Ingresar Director General'
                                            {...register('directorGeneral', {
                                                required: 'Este campo es obligatorio',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors?.directorGeneral?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    {/* Responsable del Area */}
                                    <FormControl isInvalid={errors.responsableArea}>
                                        <FormLabel htmlFor='responsableArea'>Responsable del Area</FormLabel>
                                        <Input
                                            id='responsableArea'
                                            placeholder='Ingresar Responsable del Area'
                                            {...register('responsableArea', {
                                                required: 'Este campo es obligatorio',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors?.responsableArea?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </div>

                                <div className="flex w-full gap-4">
                                    {/* Telefono */}
                                    <FormControl isInvalid={errors.telefono1}>
                                        <FormLabel htmlFor='telefono1'>Teléfono</FormLabel>
                                        <Input
                                            id='telefono1'
                                            placeholder='Ingresar Teléfono'
                                            {...register('telefono1', {
                                                required: 'Este campo es obligatorio',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors?.telefono1?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    {/* Correo */}
                                    <FormControl isInvalid={errors.correo1}>
                                        <FormLabel htmlFor='correo1'>Correo</FormLabel>
                                        <Input
                                            id='correo1'
                                            placeholder='Ingresar Correo'
                                            {...register('correo1', {
                                                required: 'Este campo es obligatorio',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'El correo no es válido',
                                                },
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors?.correo1?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </div>



                                <div className="flex w-full gap-4">
                                    {/* Sector */}
                                    <FormControl isInvalid={errors.sector}>
                                        <FormLabel htmlFor='sector'>Sector</FormLabel>
                                        <Select id='comunidad' placeholder='Elegir Sector' {...register('sector', {
                                            required: 'Debe elegir un sector',
                                        })}>
                                            <option>Publico</option>
                                            <option>Privado</option>
                                            <option>Social</option>
                                            <option>Educativo</option>
                                        </Select>
                                        <FormErrorMessage>
                                            {errors?.sector?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    {/* Calle */}
                                    <FormControl isInvalid={errors.calle}>
                                        <FormLabel htmlFor='calle'>Calle</FormLabel>
                                        <Input
                                            id='calle'
                                            placeholder='Ingresar Calle'
                                            {...register('calle', {
                                                required: 'Este campo es obligatorio',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors?.calle?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </div>

                                <div className="flex w-full gap-4">
                                    {/* Colonia */}
                                    <FormControl isInvalid={errors.colonia}>
                                        <FormLabel htmlFor='colonia'>Colonia</FormLabel>
                                        <Input
                                            id='colonia'
                                            placeholder='Ingresar Colonia'
                                            {...register('colonia', {
                                                required: 'Este campo es obligatorio',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors?.colonia?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    {/* Ciudad */}
                                    <FormControl isInvalid={errors.ciudad}>
                                        <FormLabel htmlFor='ciudad'>Ciudad</FormLabel>
                                        <Input
                                            id='ciudad'
                                            placeholder='Ingresar Ciudad'
                                            {...register('ciudad', {
                                                required: 'Este campo es obligatorio',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors?.ciudad?.message}
                                        </FormErrorMessage>
                                    </FormControl>
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

    console.log(context.params);

    const session = await getSession(context);
    const dependencia = await getDependenciaBySlug(context.params.clavePrograma);

    if (!session) return {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }

    return {
        props: {
            session,
            dependencia
        }
    }
}

export default EditarDependencia