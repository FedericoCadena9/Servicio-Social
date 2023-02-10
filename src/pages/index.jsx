import { MainLayout } from "@/components/Layout/MainLayout"
import { TextBlock } from "@/components/TextBlock"
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline"
import { Badge, Button, Table } from "flowbite-react"
import Link from "next/link"

import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from "../../aa.json"

import { useTable } from "react-table"
import { alumnosColumns } from "@/utils/alumnosColumns"
import { useEffect, useMemo, useState } from "react"

//Exportr del archivo .env las variables de entorno
const SPREADSHEET_ID = `${process.env.NEXT_PUBLIC_SPREADSHEET_ID}`;
const SHEET_ID = `${process.env.NEXT_PUBLIC_SHEET_ID}`;

//Inicializar el documento de Google Sheets con el ID de la hoja de cálculo
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);


const appendSpreadsheet = async () => {
  try {

    //Autenticar el cliente con las credenciales de servicio
    await doc.useServiceAccountAuth(creds);
    //Cargar la información de la hoja de cálculo
    await doc.loadInfo();

    //Obtener la hoja de cálculo por ID
    const sheet = doc.sheetsById[SHEET_ID];

    //Obtener las filas de la hoja de cálculo
    const rows = await sheet.getRows();
    return rows;
  } catch (e) {

    //Manejar el error
    console.error('Error: ', e);
  }
};


const Alumnos = () => {

  const [dataSheet, setDataSheets] = useState([]);

  const fetchData = async () => {
    const result = await appendSpreadsheet();
    // console.log(result);
    setDataSheets(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('dataSheet', dataSheet);

  const columns = useMemo(() => alumnosColumns, []);
  const data = useMemo(() => dataSheet, []);

  // console.log(data);

  const alumnosTable = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = alumnosTable

  return (
    <>
      <MainLayout title={'Alumnos'}>

        {/* Text Block */}
        <TextBlock title={'Alumnos'} subtitle={'Visualiza los alumnos con porcentaje para realizar Servicio Social.'}>
          <Link href={'/alumnos/nuevo'}>
            <div>
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 hover:dark:bg-emerald-700">
                <PlusIcon className="mr-2 h-5 w-5" />
                Nuevo Alumno
              </Button>
            </div>
          </Link>
        </TextBlock>

        <div>

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
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row)
                  return (
                    <tr key={row} {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      {row.cells.map((cell) => {
                        return (
                          <td key={cell} {...cell.getCellProps()} className="px-6 py-4">
                            {cell.render('Cell')}
                          </td>
                        )
                      })}
                    </tr>
                  )
                }
                )}
              </tbody>
            </table>
          </div>

        </div>
      </MainLayout>
    </>
  )
}

export default Alumnos