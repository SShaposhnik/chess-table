import { LoadingStateType } from 'interfaces';
import { createContext } from 'react';

const LoadingState = createContext({} as LoadingStateType);

export default LoadingState;
