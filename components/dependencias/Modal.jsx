import { useRef } from "react"
import { useRouter } from 'next/router';
const { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } = require("@chakra-ui/react")

import { TrashIcon } from "@heroicons/react/20/solid";

const ModalUI = ({deleteDependencia}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef(null)

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  }

  const deleteModal = async ()  => {
    await deleteDependencia();
    refreshData();
    onClose();
  }

  return (
    <>
      <Button onClick={onOpen} variant='ghost' className="!m-0 !p-0">
        <TrashIcon className="w-5 h-5" />
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar Dependencia</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            ¿Seguro que deseas eliminar este programa? Esta acción no se puede deshacer.
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost'  mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={deleteModal} colorScheme='red'>Eliminar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalUI