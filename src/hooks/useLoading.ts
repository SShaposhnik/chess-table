import { useContext } from 'react';

import { LoadingState } from 'context';
import { LoadingStateType } from 'interfaces';

type UseLoading = [loading: LoadingStateType['loading'], setLoading: LoadingStateType['setLoading']];

const useLoading = (): UseLoading => {
  const { loading, setLoading } = useContext(LoadingState);

  return [loading, setLoading];
};

export default useLoading;
