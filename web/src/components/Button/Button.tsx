const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      className={`cursor-pointer rounded-md bg-main-red px-3 py-1 font-medium text-white shadow-sm hover:bg-gray-200 hover:bg-main-red/90 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
