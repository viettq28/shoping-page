const Input = ({type = 'text', id, placeholder, className, options = {}, handleChange, value}) => {
  
  return (
    <input
      className={`appearance-none border px-3 py-2 leading-tight text-zinc-900 shadow placeholder:text-zinc-500 focus:border-gray-700 focus:shadow-lg focus:outline-none ${className ? className : ''}`}
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      {...options}
      onChange={handleChange}
      value={value}
    />
  );
};
export default Input;
