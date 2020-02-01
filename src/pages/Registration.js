import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextInput from '../components/TextInput.js';
import DatePicker from '../components/DatePicker.js';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

function Registration(props) {
  const defaultKeys = {
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
  const [keys, setKeys] = useState(defaultKeys);
  const classes = styles();

  const handleChange = (id, value) => {
    setKeys({
      ...keys,
      [id]: value
    });
  }

  async function handleSubmit(e) {
    await new Promise(resolve => setTimeout(resolve, 500));
    alert(JSON.stringify(keys, null, 2));
  }

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}>
      <div>
        <TextInput
          id="username"
          label="Username"
          type="text"
          setFormChanged={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="email"
          label="Email"
          type="email"
          setFormChanged={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="firstName"
          label="First Name"
          type="text"
          setFormChanged={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="lastName"
          label="Last Name"
          type="text"
          setFormChanged={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="password"
          label="Password"
          type="password"
          setFormChanged={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          setFormChanged={handleChange}
        />
      </div>
      <div>
        <DatePicker
          id="birthdate"
          label="Birthdate"
          setFormChanged={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="address"
          label="Address"
          type="text"
          setFormChanged={handleChange}
        />
      </div>
      <div>
        <TextInput
          id="bio"
          label="Bio"
          type="text"
          multiline
          rows="4"
          setFormChanged={handleChange}
        />
      </div>
      <Button type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Registration;