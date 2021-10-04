import React from 'react';
import TextField from '@mui/material/TextField';
import ruLocale from 'date-fns/locale/ru';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import './DatePicker.scss';

interface Props {
  value: Date

  onChange(newValue: Date | null): void
}

const _DatePicker: React.FC<Props> = ({ value, onChange }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
    <DatePicker
      className="date-picker"
      label="Дата"
      value={value}
      onChange={() => {}}
      onAccept={onChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);

export default _DatePicker;
