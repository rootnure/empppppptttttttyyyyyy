import PropTypes from "prop-types";

const FormRequiredErrorMsg = ({ msg = "*This field is required" }) => {
  return (
    <>
      <p className="text-xs text-red-500 italic">{msg}</p>
    </>
  );
};

FormRequiredErrorMsg.propTypes = {
  msg: PropTypes.string,
};

export default FormRequiredErrorMsg;
