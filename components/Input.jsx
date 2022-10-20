export const Input = ({ id, label, type, placeholder }) => {
    return (
        <div className="mb-6 w-full">
            <label for={id} className="label-input">{label}</label>
            <input type={type} id={id} className="input-form" placeholder={placeholder} required="" />
        </div>
    )
}
