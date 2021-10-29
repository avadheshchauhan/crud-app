import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { addUser } from "../Service/api";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
  conatiner: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: "20px",
    },
  },
});

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const { first_name, last_name, email } = user;
  const classes = useStyle();
  const history = useHistory();

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    history.push("./all");
  };

  return (
    <FormGroup className={classes.conatiner}>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>First Name</InputLabel>
        <Input
          name="first_name"
          onChange={(e) => changeHandler(e)}
          value={first_name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Last Name</InputLabel>
        <Input
          name="last_name"
          onChange={(e) => changeHandler(e)}
          value={last_name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="email" onChange={(e) => changeHandler(e)} value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Image</InputLabel>
        <Input
          name="avatar"
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={(e) => changeHandler(e)}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addUserDetails()}
      >
        Add User
      </Button>
    </FormGroup>
  );
};

export default AddUser;
