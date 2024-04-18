import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Button({ children, disabled, to, type, onClick }) {
  const className =
    "inline-block rounded-full bg-indigo-400 px-3 py-2 font-semibold uppercase tracking-wide text-sky-50  text-stone-800 transition-colors duration-300 hover:bg-indigo-300 focus:bg-indigo-300 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed  md:py-3";
  if (to) {
    return (
      <Link
        to={to}
        className={`${type === "small" ? "mr-3 inline-block  rounded-full bg-indigo-400 px-2 py-2 text-sm text-xs font-semibold uppercase  tracking-wide text-sky-50 transition-colors duration-300 hover:bg-indigo-300 focus:bg-indigo-300 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-offset-2  active:bg-slate-400 disabled:cursor-not-allowed md:py-2" : className}`}
      >
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        className={`${type === "small" ? "inline-block rounded-full bg-indigo-400 px-2 py-2 text-sm text-xs font-semibold uppercase  tracking-wide text-sky-50 transition-colors duration-300 hover:bg-indigo-300 focus:bg-indigo-300 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-offset-2  active:bg-slate-400 disabled:cursor-not-allowed md:py-2" : type === "round" ? "px-2.5 py-1 text-sm md:px-3.5 md:py-2" : className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={`${type === "small" ? "inline-block rounded-full bg-indigo-400 px-2 py-2 text-sm text-xs font-semibold uppercase  tracking-wide text-sky-50 transition-colors duration-300 hover:bg-indigo-300 focus:bg-indigo-300 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-offset-2  active:bg-slate-400 disabled:cursor-not-allowed md:py-2" : type === "round" ? "px-2.5 py-1 text-sm md:px-3.5 md:py-2" : className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // children can be any renderable React node and is required
  disabled: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};
