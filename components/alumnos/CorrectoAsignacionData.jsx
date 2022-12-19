import * as XLSX from 'xlsx';
import * as XlsxPopulate from 'xlsx-populate/browser/xlsx-populate';

import { Button } from "@chakra-ui/react"

const CorrectoAsignacionData = ({ data }) => {

  const createDownloadData = () => {
    handleExport().then((url) => {
      console.log(url);

      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'CORRECTO ASIGNACION ENERO A JULIO 2022.xlsx');
      link.click();
      link.remove();
    })
  }

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);

    const view = new Uint8Array(buf);

    for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;

    return buf;
  }

  const workbook2Blob = (workbook) => {
    const wopts = { bookType: 'xlsx', type: 'binary' };

    const wbout = XLSX.write(workbook, wopts);

    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });

    return blob;
  }

  const handleExport = () => {

    // Crear colunas de la tabla
    let table = [
      {
        A: 'NOMBRE',
        B: 'CARRERA',
        C: 'LUGAR',
        D: 'SECTOR',
        E: 'HOMBRE O MUJER',
        F: 'MATRICULA',
        G: 'CLAVE DEL PROGRAMA',
        H: 'NOMBRE DEL PROGRAMA',
        I: 'DIRECTOR GENERAL',
        J: 'RESPONSABLE DE AREA',
        K: 'CALLE',
        L: 'COLONIA',
        M: 'CIUDAD O MUNICIPIO',
      }
    ]


    // Agregar datos de la base de datos
    data.forEach(({ attributes }) => {

      table.push({
        A: `${attributes.apellidoPaterno} ${attributes.apellidoMaterno} ${attributes.nombres}`,
        B: attributes.carrera,
        C: attributes.dependencia?.data?.attributes.institucion || '',
        D: attributes.dependencia?.data?.attributes.sector || '',
        E: attributes.genero,
        F: attributes.matricula,
        G: attributes.dependencia?.data?.attributes.clavePrograma || '',
        H: attributes.dependencia?.data?.attributes.nombrePrograma || '',
        I: attributes.dependencia?.data?.attributes.directorGeneral || '',
        J: attributes.dependencia?.data?.attributes.responsableArea || '',
        K: attributes.dependencia?.data?.attributes.calle || '',
        L: attributes.dependencia?.data?.attributes.colonia || '',
        M: attributes.dependencia?.data?.attributes.ciudad || '',
      })
    });

    // Crear libro de excel
    const workbook = XLSX.utils.book_new();

    // Crear hoja de excel
    const worksheet = XLSX.utils.json_to_sheet(table, { skipHeader: true });

    // Agregar hoja de excel al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Periodo');

    const workbookBlob = workbook2Blob(workbook);

    const dataInfo = {
      titles: "A1:M1",
      tbody: "A2:M" + (table.length),
    }

    return addStyles(workbookBlob, dataInfo);
  }

  const addStyles = (workbookBlob, dataInfo) => {
    return XlsxPopulate.fromDataAsync(workbookBlob).then(workbook => {
      workbook.sheets().forEach(sheet => {
        // sheet.usedRange().style(
        //   {
        //     fontFamily: 'Arial', verticalAlignment: 'center',
        //   }
        // );

        sheet.column('A').width(30);
        sheet.column('B').width(15);
        sheet.column('C').width(30);
        sheet.column('D').width(15);
        sheet.column('E').width(15);
        sheet.column('F').width(15);
        sheet.column('G').width(30);
        sheet.column('H').width(30);
        sheet.column('I').width(30);
        sheet.column('J').width(30);
        sheet.column('K').width(15);
        sheet.column('L').width(15);
        sheet.column('M').width(15);


        // Headers
        sheet.range(dataInfo.titles).style({
          fontColor: '#000',
          bold: true,
          fontSize: 12,
          horizontalAlignment: 'center',
          verticalAlignment: 'center',
          wrapText: true,
          fill: '0070C0',
        });

        // Body
        sheet.range(dataInfo.tbody).style({
          fontSize: 12,
          horizontalAlignment: 'center',
          verticalAlignment: 'center',
          wrapText: true,
        });
      });

      return workbook.outputAsync().then(workbookBlob => URL.createObjectURL(workbookBlob));
    });
  }

  return (
    <Button onClick={() => createDownloadData()}>Exportar Correcto Asignación</Button>
  )
}

export default CorrectoAsignacionData