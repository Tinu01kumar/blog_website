import React, { useState, useEffect, useContext } from "react";

import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  width: 400px;
  margin: auto;

  box-shadow: 0px 0px 1px 1px rgba(12, 12, 12, 0.2);
`;

const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "auto",
  padding: "45px 0 0",
  height: "100%",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState("");
  const [account, toggleAccount] = useState("login");

  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const imageURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEo8-W552-DuOtwdy03GyE5sv6KkZArJRoVPWntbqQWXYVcjJhTbNqKcs6wlysBmlPlM&usqp=CAU";

  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      showError("");

      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );
      setAccount({
        name: response.data.name,
        username: response.data.username,
      });

      isUserAuthenticated(true);
      setLogin(loginInitialValues);
      navigate("/");
    } else {
      showError("Something went wrong! please try again later");
    }
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      showError("");
      setSignup(signupInitialValues);
      toggleAccount("login");
    } else {
      showError("Something went wrong! please try again later");
    }
  };

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };
 let x=" ";
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="blog" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              value={login.username}
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              value={login.password}
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter Password"
            />

            {error && <Error>{error}</Error>}

            <LoginButton
              variant="contained"
              style={{
                backgroundColor: "#F7EC09",
                color: "black",
                fontSize: "16px",
              }}
              onClick={() => loginUser()}
            >
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton
              onClick={() => toggleSignup()}
              style={{ backgroundColor: "aqua", color: "black" }}
            >
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (

          <Wrapper>
          
           
            <TextField
            id="filled-basic"
            variant="standard"
            onChange={(e) => onInputChange(e)}
             
              name="name"
              label="Enter Name"
            />
            <TextField
            id="filled-basic"
            variant="standard"
            onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
            id="filled-basic"
            variant="standard"
            onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />

            <SignupButton
              style={{ backgroundColor: "#FFFF00", color: "black" }}
              onClick={() => signupUser()}
            >
              Signup
            </SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton
              style={{ backgroundColor: "aqua", color: "black" }}
              variant="contained"
              onClick={() => toggleSignup()}
            >
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;








