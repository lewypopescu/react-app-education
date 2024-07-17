import React from 'react'

export default function Input({ type, label, value, handleChange}) {
  return (
    <label>
        <span>{label}</span>
        <input type={type} onChange={handleChange} value={value}></input>
    </label>
  )
}
