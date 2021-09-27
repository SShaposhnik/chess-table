import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ruLocale from 'date-fns/locale/ru';

interface Props {
  date: Date
}

const DatePickerWrapper: React.FC<Props> = ({ date }) => {
  const [value, setValue] = React.useState<Date | null>(date);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <DatePicker
          label="Дата"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePickerWrapper;
