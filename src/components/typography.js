import React from "react";
import clsx from "clsx";

export function Title({ children, className }) {
  return (
    <h1 className={ clsx("text-indigo-500 text-5xl w-full", className) }>
      { children }
    </h1>
  );
}

export function TextNote({ children, className }) {
  return (
    <span className={ clsx("text-indigo-300 text-sm w-full", className) }>
      { children }
    </span>
  );
}