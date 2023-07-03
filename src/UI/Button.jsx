const Button = ({children, className, isDisabled, handleClick}) => {
  return (
    <button className={`bg-neutral-700 px-6 py-1 text-sm font-light italic text-neutral-100 outline-none hover:bg-neutral-800 hover:text-neutral-50 ${className ? className : ''}`} disabled={isDisabled} onClick={handleClick}>
      {children}
    </button>
  );
};
export default Button;
