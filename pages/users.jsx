// Importaciones
import { getSession } from 'next-auth/react'

// Importaciones de Componentes
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from '../components/TextBlock'

//Iconos
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { addUser, deleteUser, getUsers } from 'utils/strapi/users';
import { useRouter } from 'next/router';

import ModalDelete from 'components/usuarios/ModalDelete';

const Users = ({ session, users }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const router = useRouter();

    const refreshData = () => {
        router.replace(router.asPath);
    }

    // Función para Agregar Usuario
    async function onSubmit(values) {
        await addUser(values);
        onClose();
        refreshData()
    }

    console.log(users);

    return (
        <MainLayout title={'Usuarios'} name={session.user.name} img={session.user.image}>

            {/* Titulo y contenido */}
            <TextBlock title={'Usuarios'} subtitle={'Todos los usuarios registrados tendrán acceso al panel.'}>
                <Button onClick={onOpen} className="btn-primary btn !bg-emerald-600 !font-normal">Nuevo Usuario</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <ModalHeader>Invitar nuevo Usuario</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {/* Correo */}

                                <FormControl className='w-full' isInvalid={errors.correo}>
                                    <FormLabel htmlFor='correo'>Correo</FormLabel>
                                    <Input
                                        id='correo'
                                        placeholder='Ingresar correo electrónico'
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
                                </FormControl>

                            </ModalBody>

                            <ModalFooter>
                                <Button variant='ghost' mr={3} >
                                    Cerrar
                                </Button>
                                <Button className='btn btn-primary !bg-emerald-600' isLoading={isSubmitting} type="submit">Agregar Usuario</Button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </Modal>
            </TextBlock>

            <div className=" w-full px-8 mt-10 ">

                {/* Tabla */}
                <div className="">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto">
                            <div className="inline-block min-w-full py-2 align-middle px-1">
                                <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table className="min-w-full table-auto divide-y divide-gray-300 dark:divide-gray-500 text-gray-600 dark:text-gray-400 text-sm">
                                        <thead className="bg-gray-50 dark:bg-gray-700 dark:text-gray-300 text-gray-900 text-sm">
                                            <tr>
                                                <th scope="col" className="px-8 py-3.5 text-left font-semibold ">Correo Electrónico</th>
                                                <th scope="col" className="px-3 py-3.5 text-left font-semibold">Rol</th>
                                                <th scope="col" className="px-3 py-3.5 text-left font-semibold">Acción</th>

                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {users.map((user) => (
                                                <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100/80 dark:hover:bg-gray-600 cursor-pointer ">
                                                    <td className="whitespace-nowrap px-8 py-4 ">{user?.attributes.correo}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 ">
                                                        <span className="text-xs rounded-full px-2 py-1 bg-orange-200/75 text-orange-500 font-medium dark:bg-orange-900/40 dark:text-orange-400">
                                                            {user?.attributes.rol}
                                                        </span>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 ">
                                                        <ModalDelete deleteUser={() => deleteUser(user.id)} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout >
    )
}

// GetServerSideProps
export const getServerSideProps = async (context) => {

    const session = await getSession(context);

    const users = await getUsers();


    if (!session) return {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }

    return {
        props: {
            session,
            users
        }
    }
}
export default Users