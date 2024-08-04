import React, { useState } from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import ButtonWarning from "../Components/ButtonWarning";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your Information to create an account"} />

          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder={"John"}
            label={"First Name"}
          />

          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder={"Doe"}
            label={"last Name"}
          />

          <InputBox
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder={"abc@gmail.com"}
            label={"Email"}
          />

          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={"12345"}
            label={"password"}
          />

          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
              }}
              label={"Sign up"}
            />
          </div>
          <ButtonWarning
            label={"Already have an account "}
            buttonText={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
