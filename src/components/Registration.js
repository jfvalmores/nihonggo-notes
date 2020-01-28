import React, { useState } from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';

const Registration2 = () => {
  const [keys, setKeys] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    address: '',
    bio: '',
  });

  const handleSubmit = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <Formik
      initialValues={keys}
      onSubmit={handleSubmit}
    // validationSchema={}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleSubmit,
          handleBlur,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" style={{ display: "block" }}>
                Username
              </label>
              <TextField
                id="username"
                placeholder="Enter your username"
                type="text"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label>
              <TextField
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="firstName" style={{ display: "block" }}>
                First Name
              </label>
              <TextField
                id="firstName"
                placeholder="Enter your firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="lastName" style={{ display: "block" }}>
                Last Name
              </label>
              <TextField
                id="lastName"
                placeholder="Enter your lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="password" style={{ display: "block" }}>
                Password
              </label>
              <TextField
                id="password"
                placeholder="Enter your password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" style={{ display: "block" }}>
                Confirm Password
              </label>
              <TextField
                id="confirmPassword"
                placeholder="Enter confirmed password"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="birthdate" style={{ display: "block" }}>
                Birthdate
              </label>
              <TextField
                id="birthdate"
                placeholder="Enter your birthdate"
                type="text"
                value={values.birthdate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="address" style={{ display: "block" }}>
                Address
              </label>
              <TextField
                id="address"
                placeholder="Enter your address"
                type="text"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="bio" style={{ display: "block" }}>
                Bio
              </label>
              <TextField
                id="bio"
                placeholder="Enter your bio"
                type="text"
                value={values.bio}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>


            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

const Registration3 = props => {
  const [values, setValues] = useState({
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      birthdate: '',
      address: '',
      bio: '',
    });

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    });
  }

  return (
    <form>
      <div>
              <label htmlFor="username" style={{ display: "block" }}>
                Username
              </label>
              <TextField
                id="username"
                placeholder="Enter your username"
                type="text"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label>
              <TextField
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="firstName" style={{ display: "block" }}>
                First Name
              </label>
              <TextField
                id="firstName"
                placeholder="Enter your firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" style={{ display: "block" }}>
                Last Name
              </label>
              <TextField
                id="lastName"
                placeholder="Enter your lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" style={{ display: "block" }}>
                Password
              </label>
              <TextField
                id="password"
                placeholder="Enter your password"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" style={{ display: "block" }}>
                Confirm Password
              </label>
              <TextField
                id="confirmPassword"
                placeholder="Enter confirmed password"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="birthdate" style={{ display: "block" }}>
                Birthdate
              </label>
              <TextField
                id="birthdate"
                placeholder="Enter your birthdate"
                type="text"
                value={values.birthdate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="address" style={{ display: "block" }}>
                Address
              </label>
              <TextField
                id="address"
                placeholder="Enter your address"
                type="text"
                value={values.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="bio" style={{ display: "block" }}>
                Bio
              </label>
              <TextField
                id="bio"
                placeholder="Enter your bio"
                type="text"
                value={values.bio}
                onChange={handleChange}
              />
            </div>
    </form>
  );
}

const Registration = props => {
  return (
    <>
    <Registration2 />
    <Registration3 />
    </>
  );
}

export default Registration;