const Dots = ({ className }) => {
  return (
    <div
      className={`left-1/2 bottom-0 pointer-events-none absolute transform -translate-x-1/2 ${className}`}
    >
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default Dots;
