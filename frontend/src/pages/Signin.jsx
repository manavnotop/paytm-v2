import { BottonWarning } from "../components/BottonWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {
    return <div className="bg-white h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-xl bg-white w-96 text-center p-2 h-max px-4 border">
                <Heading label={"Sign In"} />
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox label={"Email"} placeholder={"manavagarwal@gmail.com"} />
                <InputBox label={"Password"} placeholder={"123456"} />
                <Button label={"Sign In"} />
                <BottonWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
            </div>
        </div>
    </div>
}