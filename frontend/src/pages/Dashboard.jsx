import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"

export const Dashboard = () => {
    return <div className="bg-white h-screen pt-4">
        <AppBar />
        <div className="m-10">
            <Balance value={"10,000"} /> 
        </div>
    </div>
}