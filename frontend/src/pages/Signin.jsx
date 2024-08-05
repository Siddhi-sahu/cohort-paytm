import React, { useState } from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import ButtonWarning from "../Components/ButtonWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          username,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log("error sigining in :", error);
    }
  };
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="abc@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123455"
            label={"Password"}
          />
          <div className="pt-4">
            <Button onClick={handleSignIn} label={"Sign In "} />
          </div>
          <ButtonWarning
            label={"Don't have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
