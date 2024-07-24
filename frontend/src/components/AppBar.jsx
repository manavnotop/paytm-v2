export function AppBar(){
    return <div className="h-16 shadow-lg flex justify-between mx-4 rounded-xl border">
        <div className="flex flex-col justify-center h-full ml-9 font-bold text-black text-2xl">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center mr-4 text-black font-semibold text-2xl">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-2 mr-9 text-black"> 
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
    </div>
}