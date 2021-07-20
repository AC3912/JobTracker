const Button = ({ children, onClick }) => (
  <button
    className="px-3 py-1 rounded bg-blue-400 text-white font-medium"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
