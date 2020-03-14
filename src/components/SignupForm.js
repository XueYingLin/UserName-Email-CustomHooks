import React from 'react';
import TextField from '@material-ui/core/TextField';

import { useStyles } from '../hooks/useStyles';
import { useForm } from '../hooks/useForm';

import Button from '../theme/Button';

export default function SignupForm() {
  const classes = useStyles();
  const [values, handleChanges, clearForm] = useForm('newClient', {
    username: '',
    email: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    alert(values.username);
    clearForm(e);
  };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            label="Username"
            className={classes.textField}
            value={values.username}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="username"
          />
          <TextField
            label="Email"
            className={classes.textField}
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="email"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
