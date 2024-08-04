import React from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import ButtonWarning from "../Components/ButtonWarning";

const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your Information to create an account"} />
          <InputBox placeholder={"John"} label={"First Name"} />
          <InputBox placeholder={"Doe"} label={"last Name"} />
          <InputBox placeholder={"abc@gmail.com"} label={"Email"} />
          <InputBox placeholder={"12345"} label={"password"} />
          <div className="pt-4">
            <Button label={"Sign up"} />
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
