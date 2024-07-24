import { useState } from "react"
import { Button } from "../components/Button"

export function Users(){
    const [users, setUsers ] = useState([{
        firstName: "Manav",
        lastName: "Agarwal",
        _id: 1,
    },
    {
        firstName: "Test",
        lastName: "2",
        _id: 2,
    }])

    return <div className="text-black mt-7 mx-4">
        <div className="font-bold text-2xl">
            Users
        </div>
        <div className="my-4">
            <input type="text" placeholder="Search User..." className="input input-bordered w-full bg-white text-lg font-semibold" />
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </div>
}

function User({ user }){
    return <div className="flex justify-between px-10">
        <div className="flex justify-between font-semibold"> 
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-3 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full text-xl">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex justify-center h-full w-36">
            <Button label={"Send Money"}/> 
        </div>
    </div>
}