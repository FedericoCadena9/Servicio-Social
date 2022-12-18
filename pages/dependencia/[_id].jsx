// Importaciones
import { getSession } from 'next-auth/react'

import AgregarDependencia from "./agregarDependencia";

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

export default AgregarDependencia;