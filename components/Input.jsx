export const Input = ({ id, label, type, placeholder, onChange }) => {
    return (
        <div className="mb-6 w-full">
            <label htmlFor={id} className="label-input">{label}</label>
            <input onChange={onChange} type={type} id={id} name={id} className="input-form" placeholder={placeholder} required />
        </div>
    )
}
