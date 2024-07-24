export function Balance({ value }){
    return <div className="flex text-black mx-4">
        <div className="font-bold text-2xl">
            Your Balance
        </div>
        <div className="font-semibold text-2xl ml-6">
            Rs {value}
        </div>
    </div>
}