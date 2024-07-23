import { Link } from "react-router-dom";

export function BottonWarning({label, buttonText, to}){
    return <div className="py-2 text-sm text-black font-medium flex justify-center ">
        <div>
            {label}
        </div>
        <Link className="link link-hover pl-1" to={to}>
            {buttonText}
        </Link>
    </div>
}