import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name,
    clickHandler,
    color,
    wide,
  } = props;
  const handleClick = () => (clickHandler(name));
  const size = wide ? '50%' : '25%';
  const style = {
    width: `${size}`,
    backgroundColor: `${color}`,
    border: '1px solid #d8d8d8',
    fontSize: '24px',
  };

  return (
    <button type="button" name="button" style={style} onClick={handleClick}>{name}</button>
  );
};

Button.propTypes = { name: PropTypes.string.isRequired };

Button.propTypes = { clickHandler: PropTypes.func.isRequired };

Button.propTypes = { color: PropTypes.string };
Button.defaultProps = { color: '#e0e0e0' };

Button.propTypes = { wide: PropTypes.bool };
Button.defaultProps = { wide: false };

export default Button;
