import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalModifiers } from 'interfaces';

import { ModalWrapper } from './components';
import './Modal.scss';

interface IModalProps {
  modifier?: ModalModifiers,
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  position?: 'center' | 'top-right' | 'center-right'
  maxWidth?: string
}

/**
 * @default modifier => 'slide-top'
 */
const Modal: React.FC<IModalProps> = (props) => {
  const {
    isOpen,
    modifier = 'slide-top',
    children,
    onClose,
    position = 'center',
    maxWidth = '550px',
  } = props;

  const body = document.querySelector('body');
  const customModal = document.createElement('modal');

  const [modalElement, setModalElement] = useState<HTMLElement | null>(null);

  const removeModal = () => {
    if (body?.contains(customModal)) {
      setTimeout(() => {
        body.removeChild(customModal);

        setModalElement(null);
      }, 300);
    }
  };

  useEffect(() => {
    if (isOpen && body) {
      body.appendChild(customModal);

      setModalElement(customModal);
    }

    return () => removeModal();
  }, [isOpen]);

  if (!customModal || !modalElement) {
    return null;
  }

  return createPortal(
    <ModalWrapper
      modifier={modifier}
      position={position}
      isOpen={isOpen}
      onClose={onClose}
      maxWidth={maxWidth}
    >
      {children}
    </ModalWrapper>,
    modalElement,
  );
};

export default Modal;
