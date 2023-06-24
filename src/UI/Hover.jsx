const Hover = ({ children, className }) => {
  return (
    <div
      className={`relative after:absolute after:inset-0 after:transition-all hover:after:bg-gray-50 hover:after:opacity-30 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};
export default Hover;
