import React, { useRef } from 'react';
import { BottomSheet as RootBottomSheet } from 'react-spring-bottom-sheet';

import 'react-spring-bottom-sheet/dist/style.css';

interface IBottomSheetProps {
  isOpen: boolean,
  children: React.ReactNode,
  onClose?: () => void,
  blocking?: boolean
  header?: React.ReactNode
  footer?: React.ReactNode
  snapPoints?: {
    max?: number
    min?: number
  }
}

const initState = {
  max: window.innerHeight * 0.95,
  min: window.innerHeight * 0.4,
};

/**
 * default snapPoints = [window.innerHeight * 0.4, window.innerHeight * 0.95]
 */
const BottomSheet: React.FC<IBottomSheetProps> = (props) => {
  const {
    isOpen,
    onClose = undefined,
    children,
    blocking = true,
    snapPoints = initState,
    header,
    footer,
  } = props;

  const ref = useRef(null);
  const _snapPoints = {
    min: snapPoints.min || initState.min,
    max: snapPoints.max || initState.max,
  };

  return (
    <RootBottomSheet
      open={isOpen}
      onDismiss={onClose}
      blocking={blocking}
      snapPoints={() => [_snapPoints.min, _snapPoints.max]}
      initialFocusRef={ref}
      header={header}
      footer={footer}
      contentEditable="true"
    >
      {children}
    </RootBottomSheet>

  );
};

export default BottomSheet;
