import { useContext } from 'react';

import { DateState } from 'context';
import { DataStateType } from 'interfaces';

type UseDate = [DataStateType['date'], DataStateType['setDate']];

const useDate = (): UseDate => {
  const { date, setDate } = useContext(DateState);

  return [date, setDate];
};

export default useDate;
