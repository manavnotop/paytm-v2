export function AppBar(){
    return <div className="h-20 shadow-lg flex justify-between mx-4 rounded-xl border">
        <div className="flex flex-col justify-center h-full ml-9 font-bold text-black text-3xl">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center mr-5 text-black font-semibold text-3xl">
                Hello
            </div>
            <div className="rounded-full h-14 w-14 bg-slate-200 flex justify-center mt-3 mr-9 text-black"> 
                <div className="flex flex-col justify-center h-full font-semibold text-2xl">
                    U
                </div>
            </div>
        </div>
    </div>
}