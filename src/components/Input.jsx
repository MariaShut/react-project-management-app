/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

export const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  const classes = "w-full p-1 border-b-2 rounded-sm border-blue-300 bg-blue-50 text-blue-600 focus:outline-none focus:border-blue-600";
  
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-blue-800">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props}/>
      )}
    </p>
  )
});