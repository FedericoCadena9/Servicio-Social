import { MainLayout } from '@/components/Layout/MainLayout'
import { TextBlock } from '@/components/TextBlock'
import { Button } from '@chakra-ui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { getSession } from 'next-auth/react'
import React from 'react'
import { useTable } from "react-table"
import { useEffect, useMemo, useRef, useState } from "react"

import { GoogleSpreadsheet } from "google-spreadsheet";
import { dependenciasColumns } from "@/utils/dependenciasColumns"
import creds from "../../aa.json"


//Exportar del archivo .env las variables de entorno
const SPREADSHEET_ID = `${process.env.NEXT_PUBLIC_SPREADSHEET_ID}`;
const SHEET_ID = `${process.env.NEXT_PUBLIC_SHEET_DEP_ID}`;

//Inicializar el documento de Google Sheets con el ID de la hoja de cálculo
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const Dependencias = ({ session, dependencias }) => {


    console.log(dependencias);

    const deleteRow = async (id) => {
        //Autenticar el cliente con las credenciales de servicio
        await doc.useServiceAccountAuth(creds);
        //Cargar la información de la hoja de cálculo
        await doc.loadInfo();

        //Obtener la hoja de cálculo por ID
        const sheet = doc.sheetsById[SHEET_ID];

        //Obtener las filas de la hoja de cálculo
        const rows = await sheet.getRows();

        //Eliminar la fila de la hoja de cálculo
        await rows[id].delete();
    }

    //Header Columns que tendrá la tabla
    const columns = useMemo(() => dependenciasColumns, []);
    //Data dinámica que tendrá la tabla
    const data = useMemo(() => dependencias, []);

    const dependenciasTable = useTable({
        columns,
        data,
        showActions: true,
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = dependenciasTable
    return (
        <>
            <MainLayout title={'Dependencias'} name={session.user.name} img={session.user.image} email={session.user.email}>

                {/* Text Block */}
                <TextBlock title={'Dependencias'} subtitle={'Visualiza las dependencias que tienen para realizar Servicio Social.'}>
                    {/* <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 hover:dark:bg-emerald-700">
                        <PlusIcon className="mr-2 h-5 w-5" />
                        Nueva Dependencia
                    </Button> */}
                </TextBlock>

                <div className="relative overflow-x-auto border  sm:rounded-lg">
                    <table {...getTableProps()} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            {headerGroups.map((headerGroup) => (
                                <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th key={headerGroup} {...column.getHeaderProps()} className="px-6 py-3 font-medium text-left">
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                    {
                                        // Renderizar el encabezado de la columna de eliminación si la propiedad "delete" es verdadera
                                        <th className="px-6 py-3 font-medium text-left">Acciones</th>

                                    }
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr key={row.id} {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td
                                                    key={cell.getCellProps().key}
                                                    {...cell.getCellProps()}
                                                    className="px-6 py-4"
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            );
                                        })}
                                        {( // Renderizar el botón de eliminación si la propiedad "delete" es verdadera
                                            <td className="px-6 py-4">
                                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:bg-red-50 hover:text-red-600 p-2 rounded-md">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
                                                    </svg>
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </MainLayout>

        </>
    )
}

export async function getServerSideProps(context) {

    //Sesión de Google
    const session = await getSession(context);

    if (!session) return {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }

    //Autenticar el cliente con las credenciales de servicio
    await doc.useServiceAccountAuth(creds);
    //Cargar la información de la hoja de cálculo
    await doc.loadInfo();

    //Obtener la hoja de cálculo por ID
    const sheet = doc.sheetsById[SHEET_ID];

    //Obtener las filas de la hoja de cálculo
    const rows = await sheet.getRows();

    //Array donde se guardará los datos de las Rows de Excel
    const data = [];

    //Ciclo que accederá a cada Row y mediante su atributo guardará en un objeto para ser consultado en el Client Side
    for (let i = 0; i < rows.length; i++) {
        const dataObj = {
            i: i,
            programa: rows[i].programa,
            dependencia: rows[i].dependencia,
            correo: rows[i].correo,
        }

        // Guardar el objeto en el array
        data.push(dataObj);
    }

    return {
        props: {
            session,
            dependencias: data
        }
    }
}


export default Dependencias