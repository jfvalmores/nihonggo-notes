import React, { useState } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

function DatePicker(props) {
  const [value, setValue] = useState(new Date());
  const {
    id,
    label,
    format,
    setFormChanged,
  } = props;

  function handleChange(val) {
    setValue(val);
    setFormChanged(id, val);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id={id}
        label={label}
        format={format || 'MM/dd/yyyy'}
        value={value}
        onChange={handleChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;