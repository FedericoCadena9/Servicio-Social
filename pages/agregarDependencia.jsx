//Importaciones de Componentes
import { Input } from "../components/Input";
import { MainLayout } from "../components/Layouts/MainLayout";
import { TextBlock } from "../components/TextBlock";

const agregarDependencia = () => {

    return (
        <>
            <MainLayout>
                <div className="relative">

                    {/* Titulo y Botones */}
                    <div className="sticky top-0 bg-white">
                        <TextBlock title={'Nueva Dependencia'} subtitle={'Agrega la información proporcionada a partir del F1.'}>

                            {/* Boton Cancelar */}
                            <button className="btn btn-outline">
                                <span>Cancelar</span>
                            </button>

                            {/* Boton Guardar */}
                            <button className='btn btn-primary'>
                                <span>Guardar</span>
                            </button>
                        </TextBlock>
                    </div>

                    <div className="w-full mx-auto max-w-4xl mt-8">
                        <div className="border border-gray-300 rounded-md p-6">
                            <form>
                                {/* Clave del Programa */}
                                <Input id={'clave-programa'} label={'Clave del Programa'} placeholder={'Clave del Programa'} type={'text'} />

                                <div className="flex w-full gap-4">
                                    {/* Institución Prestadora de Servicios */}
                                    <Input id={'institucion'} label={'Institución prestataria'} placeholder={'Nombre de Institución Prestataria'} type={'text'} />

                                    {/* Domicilio */}
                                    <Input id={'domicilio'} label={'Domicilio'} placeholder={'Domicilio de Dependencia'} type={'text'} />
                                </div>

                                <div className="flex w-full gap-4">
                                    {/* Teléfono */}
                                    <Input id={'telefono'} label={'Teléfono'} placeholder={'123 456 7890'} type={'phone'} />

                                    {/* Correo Electrónico */}
                                    <Input id={'correo'} label={'Correo Electrónico'} placeholder={'Correo'} type={'email'} />
                                </div>

                                {/* Nombre del Programa */}
                                <Input id={'nombre-programa'} label={'Nombre del Programa'} placeholder={'Nombre del Programa'} type={'text'} />

                                {/* Objetivo */}
                                <div className="mb-6 w-full">
                                    <label for="objetivo" className="label-input">Objetivo</label>
                                    <textarea placeholder="Definir el Objetivo" className="input-form" name="objetivo" id="objetivo" cols="30" rows="10"></textarea>
                                </div>

                                {/* Perfil Profesional */}
                                {/* <Select closeMenuOnSelect={false} components={animatedComponents} isMulti options={options} /> */}

                                <div className="flex w-full gap-4">
                                    {/* Director General */}
                                    <Input id={'director-general'} label={'Director General'} placeholder={'Nombre del Director General'} type={'text'} />

                                    {/* Responsable del Area */}
                                    <Input id={'responsable-area'} label={'Responsable del Área'} placeholder={'Nombre del Responsable del Área'} type={'text'} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default agregarDependencia