const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} bg-white rounded-full p-2 cursor-pointer flex items-center justify-center relative`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
