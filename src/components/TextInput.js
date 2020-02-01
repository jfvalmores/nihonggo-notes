import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function TextInput(props) {
  const [inputValue, setInputValue] = useState('');
  const {
    id,
    type,
    label,
    setFormChanged,
    multiline,
    rows,
    variant,
  } = props;

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleBlur(e) {
    setFormChanged(e.target.id, e.target.value);
  }

  return (
    <TextField
      id={id}
      type={type}
      label={label}
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      multiline={multiline}
      rows={rows}
      variant={variant || 'standard'}
    />
  );
}

export default TextInput;