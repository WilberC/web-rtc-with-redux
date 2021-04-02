import React from "react";
import clsx from 'clsx';

export function Input
({
   value = null,
   placeholder = null,
   onChange = null,
   type = "text",
   name = null,
   className
 }) {
  const onChangeInput = event => {
    value[name] = event.target.value
    onChange({ ...value })
  }
  return (
    <input
      className={ clsx("border border-current rounded focus:outline-none bg-white p-2 text-black w-full", className) }
      type={ type }
      onChange={ onChangeInput }
      placeholder={ placeholder }
      value={ value[name] || "" }
      name={ name }
      id={ `${ name }-id` }
    />
  );
}

export function InputGroup
({
   label = null,
   value = null,
   placeholder = null,
   onChange = null,
   type = "text",
   name = null,
   classNameInput,
   classNameLabel,
   className
 }) {
  const inputId = `${ name }-id`
  return (
    <div className={ clsx("py-2 w-full", className) }>
      <label htmlFor={ inputId } className={ clsx("block", classNameLabel) }>
        { label || placeholder || value }
      </label>
      <Input
        className={ classNameInput }
        type={ type }
        onChange={ onChange }
        placeholder={ placeholder }
        value={ value }
        name={ name }
        id={ inputId }
      />
    </div>
  )
}