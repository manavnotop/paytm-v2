export function InputBox({label, placeholder}){
    return <label className="form-control w-full max-w-sm px-3">
        <div className="label">
            <span className="label-text text-black font-semibold text-base">{label}</span>
        </div>
        <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-sm bg-white text-black font-semibold" />
    </label>
}