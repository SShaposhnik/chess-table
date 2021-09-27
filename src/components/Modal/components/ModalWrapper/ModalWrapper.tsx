import React, { useRef, useEffect } from 'react';

import { ModalModifiers } from 'interfaces';

interface IModalWrapperProps {
  children: React.ReactNode
  modifier: ModalModifiers
  isOpen: boolean,
  onClose: () => void
  position: 'center' | 'top-right' | 'center-right'
  maxWidth: string
}
const ModalWrapper: React.FC<IModalWrapperProps> = (props) => {
  const {
    children,
    modifier,
    isOpen,
    onClose,
    position,
    maxWidth,
  } = props;

  const modalRef = useRef<HTMLDivElement | null>(null);

  const modalOpen = () => {
    const { current } = modalRef;

    if (!current) {
      return;
    }

    current.classList.add('custom-modal-show');
  };

  const modalClose = () => {
    const { current } = modalRef;

    if (!current) {
      return;
    }

    current.classList.remove('custom-modal-show');
  };

  const checkClickOutContent = (event: MouseEvent) => {
    const { target } = event;
    const { current } = modalRef;

    if (target === current) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        modalOpen();
      }, 10);
    } else {
      modalClose();
    }
  }, [isOpen]);

  useEffect(() => {
    const { current } = modalRef;

    if (current) {
      current.addEventListener('click', checkClickOutContent);
    }

    return () => current?.removeEventListener('click', checkClickOutContent);
  }, [modalRef]);

  return (
    <div
      className={`custom-modal ${modifier} position-${position}`}
      ref={modalRef}
    >
      <div className="custom-modal__content" style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
