import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler } = props;
  const handleClick = () => (clickHandler(name));

  return (
    <div>
      <button type="button" name="button" onClick={handleClick}>{name}</button>
    </div>
  );
};

Button.propTypes = { name: PropTypes.string.isRequired };
Button.propTypes = { clickHandler: PropTypes.func.isRequired };

export default Button;
