/* eslint-disable react/prop-types */
export const Button = ({ children, ...props }) => {
  return (
    <button 
      className="px-4 py-2 text-xs md:text-base rounded-md bg-blue-600 text-blue-100 hover:bg-blue-500 hover:text-blue-50" 
      {...props}
    >
      {children}
    </button>
  )
}