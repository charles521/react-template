import PropTypes from "prop-types";
function AppInput({ type, value, onChange }) {
  return <input type={type} value={value} onChange={onChange} />;
}

AppInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AppInput;
