import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { editUser, getUsers } from "../Service/api";
import { useHistory, useParams } from "react-router-dom";
import AllUsers from "./AllUsers";

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
  avatar: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const { first_name, last_name, email, avatar } = user;
  const { id } = useParams();
  const classes = useStyle();
  const history = useHistory();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const editUserDetails = async () => {
    await editUser(id, user);
    history.push("./all");
  };

  return (
    <FormGroup className={classes.conatiner}>
      <Typography variant="h4">Edit User</Typography>
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
        onClick={() => editUserDetails()}
      >
        Edit User
      </Button>
    </FormGroup>
  );
};

export default EditUser;
