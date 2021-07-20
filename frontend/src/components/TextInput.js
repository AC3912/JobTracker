const TextInput = ({ value, setValue, placeholder, type = "text" }) => (
  <div className="border shadow rounded h-10 flex flex-row flex-shrink justify-center items-center w-56">
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="pl-2 w-full outline-none"
      type={type}
    />
  </div>
);

export default TextInput;
