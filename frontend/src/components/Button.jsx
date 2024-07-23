export function Button({label, onClick}){
    return <button onClick={onClick} className="btn btn-active w-full font-medium text-base text-white my-6">{label}</button>
}