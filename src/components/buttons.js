import React from "react";
import clsx from 'clsx';

export function Button({ children, onClick = null, type = "button", className }) {
  return (
    <button
      className={ clsx("rounded focus:outline-none py-2 px-4", className) }
      type={ type }
      onClick={ onClick }
    >
      { children }
    </button>
  );
}

export function ButtonPrimary({ children, onClick = null, type = "button", className }) {
  return (
    <Button
      className={ clsx("bg-indigo-500 text-white", className) }
      onClick={ onClick }
      type={ type }
    >
      { children }
    </Button>
  );
}

export function ButtonGhost({ children, onClick = null, type = "button", className }) {
  return (
    <Button
      className={ clsx("bg-transparent text-indigo-500 border-2 border-indigo-500", className) }
      onClick={ onClick }
      type={ type }
    >
      { children }
    </Button>
  );
}