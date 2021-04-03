import React from "react";
import clsx from "clsx";

export function ErrorMessage({ children, className }) {
  return (
    <span className={ clsx("block w-full text-center text-red-600 font-semibold border border-red-600 ", className) }>
      { children }
    </span>
  );
}