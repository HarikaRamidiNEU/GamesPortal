import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import type React from "react";

import type { ModalDataProps } from "lib/types/components/common";

const ModalComponent: React.FC<ModalDataProps> = ({
  modalHeader,
  modalCotent,
  actionButtonText,
  buttonAction,
}) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const setActionButton = () => {
    buttonAction();
    onClose();
  };
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalHeader}</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>{modalCotent}</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={setActionButton}>
            {actionButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default ModalComponent;
