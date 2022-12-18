export const Input = ({ id, label, type, placeholder, onChange, error, errorText, value }) => {
    5
    return (
        <div className="w-full">
            <label htmlFor={id} className="label-input">{label}</label>
            <input value={value} onChange={onChange} type={type} id={id} name={id} className={`input-form ${error ? 'ring-2 !ring-red-600 dark:!ring-red-500 ' : ''}`} placeholder={placeholder} />
            {error && <p className="text-red-600 text-xs font-medium mt-1 dark:text-red-400">{errorText}</p>}
        </div>
    )
}
