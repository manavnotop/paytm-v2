import { SubHeading } from "../components/SubHeading";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottonWarning } from "../components/BottonWarning";

export const Signup = () => {
  return (
    <div className="bg-white h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-xl bg-white w-96 text-center p-2 h-max px-4 border">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox label={"First Name"} placeholder={"Manav"} />
        <InputBox label={"Last Name"} placeholder={"Agarwal"} />
        <InputBox label={"Email"} placeholder={"manavagarwal@gmail.com"} />
        <InputBox label={"Password"} placeholder={"123456"} />
        <Button label={"Sign Up"} />
        <BottonWarning label={"Already have an account?"} buttonText={"Login"} to={"/signin"} />
        </div>
      </div>
    </div>
  );
};
