import { add, format, startOfDay } from 'date-fns';
import { ru } from 'date-fns/locale';

const formatDate = (
  date: Date | number,
  _format = 'dd.MM.yyyy',
): string => format(date, _format, { locale: ru });

const parseDateInString = (time: string): [start: Date, end: Date] => {
  const today = new Date();

  const splitted = time.split('-');
  const startDay = startOfDay(today);
  const splittedStart = splitted[0].split(':');
  const splittedEnd = splitted[1].split(':');

  const startDate = add(
    startDay,
    {
      hours: parseInt(splittedStart[0], 10),
      minutes: parseInt(splittedStart[1], 10),
    },
  );

  const endDate = add(
    startDay,
    {
      hours: parseInt(splittedEnd[0], 10),
      minutes: parseInt(splittedEnd[1], 10),
    },
  );

  return [startDate, endDate];
};

export {
  formatDate,
  parseDateInString,
};
