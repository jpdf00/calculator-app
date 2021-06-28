import PropTypes from 'prop-types';
import './style.css';

const Display = (props) => {
  const { result } = props;
  return (
    <h2 className="Size Display">{result}</h2>
  );
};

Display.defaultProps = { result: '0' };
Display.propTypes = { result: PropTypes.string };

export default Display;
