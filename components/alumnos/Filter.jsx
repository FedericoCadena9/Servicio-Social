import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    StackDivider,
    Stack,
    Box,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Textarea,
    useDisclosure,
    InputLeftElement,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Checkbox,
    CheckboxGroup,
    FormControl,
} from '@chakra-ui/react'
import { FunnelIcon } from '@heroicons/react/20/solid';


import { ChevronDownIcon, MagnifyingGlassIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

import { useForm, Controller } from "react-hook-form";


function Filter() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = useRef()

    const [checkedItems, setCheckedItems] = useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    const viewTable = [
        "genero",
        "edad",
        "telefono",
        "correo",
        "comunidad",
        "discapacidad",
        "lengua indigena",
        "modalidad",
        "presenta verano",
    ]

    const defaultValues = {
        "genero": true,
        "edad": false,
        "telefono": false,
        "correo": false,
        "comunidad": false,
        "discapacidad": false,
        "lengua indigena": false,
        "modalidad": false,
        "presenta verano": false,
    }

    const { handleSubmit, control } = useForm({ defaultValues });

    const [items, setItems] = useState({});

    const onSubmit = (data) => {
        console.log(data);
    }

    useEffect(() => {
        const filters = window.localStorage.getItem('viewTable');
        if (filters !== null) setItems(JSON.parse(filters));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('viewTable', JSON.stringify(items));
    }, [items]);

    console.log(items);

    return (
        <div >
            <Button onClick={onOpen} colorScheme="white" className="inline-flex items-center !font-normal !text-sm !text-gray-500  border border-gray-300 hover:bg-gray-100  dark:! text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                <FunnelIcon className="mr-2 w-4 h-4 text-gray-400" />
                Filtros
            </Button>
            <Drawer

                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader className='!font-primary' borderBottomWidth='1px'>
                                Filtros
                            </DrawerHeader>

                            <DrawerBody className='!font-primary'>
                                <Stack spacing={'24px'}>
                                    <Box className='mt-2 space-y-2'>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={<MagnifyingGlassIcon className='w-5 h-5 text-gray-400' />}
                                            />
                                            <Input className='!text-sm' type='text' placeholder='Buscar alumno' />
                                        </InputGroup>
                                        <Accordion allowToggle  >
                                            <AccordionItem className='!border-none'>
                                                <h2>
                                                    <AccordionButton className='rounded border flex justify-between !text-gray-500'>
                                                        <Box className='!text-sm !font-regular '>
                                                            Vista tabla
                                                        </Box>
                                                        <ChevronUpDownIcon className="w-5 h-5" />

                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <CheckboxGroup>
                                                        <Stack spacing={[1, 5]}>
                                                            {viewTable.map((item) => (
                                                                <Controller
                                                                    control={control}
                                                                    name={item}
                                                                    key={item}
                                                                    defaultValue={false}
                                                                    render={({ field: { onChange, value, ref } }) => (
                                                                        <Checkbox
                                                                            onChange={onChange}
                                                                            textTransform="capitalize"
                                                                            ref={ref}
                                                                            isChecked={value}
                                                                        >
                                                                            {item}
                                                                        </Checkbox>
                                                                    )}
                                                                />
                                                            ))}
                                                        </Stack>
                                                    </CheckboxGroup>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </Box>


                                    <Box>
                                        <Accordion defaultIndex={[0]} allowMultiple>
                                            <AccordionItem className='!border-none'>
                                                <h2>
                                                    <AccordionButton className='rounded'>
                                                        <AccordionIcon />
                                                        <Box className='!text-sm !font-regular pl-2'>
                                                            Género
                                                        </Box>

                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Checkbox
                                                        isChecked={allChecked}
                                                        isIndeterminate={isIndeterminate}
                                                        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                                                    >
                                                        Todos
                                                    </Checkbox>
                                                    <Stack pl={6} mt={1} spacing={1}>
                                                        <Checkbox
                                                            isChecked={checkedItems[0]}
                                                            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                                                        >
                                                            Masculino
                                                        </Checkbox>
                                                        <Checkbox
                                                            isChecked={checkedItems[1]}
                                                            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                                                        >
                                                            Femenino
                                                        </Checkbox>
                                                    </Stack>
                                                </AccordionPanel>
                                            </AccordionItem>

                                            <AccordionItem className='!border-none'>
                                                <h2>
                                                    <AccordionButton className='rounded'>
                                                        <AccordionIcon />
                                                        <Box className='!text-sm !font-regular pl-2'>
                                                            Modalidad
                                                        </Box>

                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Checkbox
                                                        isChecked={allChecked}
                                                        isIndeterminate={isIndeterminate}
                                                        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                                                    >
                                                        Todos
                                                    </Checkbox>
                                                    <Stack pl={6} mt={1} spacing={1}>
                                                        <Checkbox
                                                            isChecked={checkedItems[0]}
                                                            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                                                        >
                                                            Escolarizada
                                                        </Checkbox>
                                                        <Checkbox
                                                            isChecked={checkedItems[1]}
                                                            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                                                        >
                                                            Mixta
                                                        </Checkbox>
                                                    </Stack>
                                                </AccordionPanel>
                                            </AccordionItem>


                                        </Accordion>
                                    </Box>

                                </Stack>
                            </DrawerBody>

                            <DrawerFooter borderTopWidth='1px'>
                                <Button variant='outline' mr={3} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button onClick={onClose} colorScheme='blue' type="submit">Aplicar</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </FormControl>
                </form>
            </Drawer>
        </div>
    )
}
export default Filter;