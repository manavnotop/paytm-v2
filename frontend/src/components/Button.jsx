export function Button({label, onClick}){
    return <button onClick={onClick} className="btn btn-active w-full font-medium text-base text-white mt-6">{label}</button>
}