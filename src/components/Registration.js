import React, { useState } from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

function TextInput(props) {
  const [inputValue, setInputValue] = useState('');
  const {
    id,
    type,
    label,
    onChange
  } = props;

  const handleChange = e => {
    setInputValue(e.target.value);
    onChange(e.target.id, e.target.value);
  }

  return (
    <TextField
      id={id}
      type={type}
      label={label}
      value={inputValue}
      onChange={handleChange}
      variant="outlined"
    />
  );
}

async function handleSubmit(values) {
  await new Promise(resolve => setTimeout(resolve, 500));
  alert(JSON.stringify(values, null, 2));
}

const Registration3 = props => {
  const mKeys = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    address: '',
    bio: '',
  }

  const classes = styles();

  const handleChange = (id, value) => {
    mKeys[id] = value;
    console.log(mKeys);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextInput
          id="username"
          label="username"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="email"
          label="email"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="firstName"
          label="firstName"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="lastName"
          label="lastName"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="password"
          label="password"
          type="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="confirmPassword"
          label="confirmPassword"
          type="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="birthdate"
          label="birthdate"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="address"
          label="address"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="bio"
          label="bio"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

const Registration = props => {
  return (
    <>
      <Registration3 />
    </>
  );
}

export default Registration;