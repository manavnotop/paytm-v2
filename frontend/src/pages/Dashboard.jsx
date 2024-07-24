import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    return <div className="bg-white h-screen pt-4 px-16">
        <AppBar />
        <div className="m-10 px-24">
            <Balance value={"10,000"} /> 
            <Users />
        </div>
    </div>
}