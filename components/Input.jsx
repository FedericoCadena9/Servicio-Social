import React from 'react'

export const Input = ({ id, label, type, placeholder }) => {
    return (
        <div class="mb-6 w-full">
            <label for={id} class="label-input">{label}</label>
            <input type={type} id={id} class="input-form" placeholder={placeholder} required="" />
        </div>
    )
}
