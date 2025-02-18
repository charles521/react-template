import PropTypes from "prop-types";
function AppInput({ type, className, value, onChange }) {
  return (
    <input
      type={type}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
}

AppInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AppInput;
