import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const formatDate = (
  date: Date | number,
  _format: string,
): string => format(date, _format, { locale: ru });

export {
  formatDate,
};
