import React from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import ButtonWarning from "../Components/ButtonWarning";

const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox placeholder="abc@gmail.com" label={"Email"} />
          <InputBox placeholder="123455" label={"Password"} />
          <div className="pt-4">
            <Button label={"Sign In "} />
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
