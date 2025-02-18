import PropTypes from "prop-types";
function AppButton({ type, className, children }) {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}

AppButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AppButton;
