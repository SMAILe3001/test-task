import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';

const Button = ({ onClick, children, disabled = false, type = 'button' }) => (
  <ButtonStyle type={type} onClick={onClick} disabled={disabled}>
    {children}
  </ButtonStyle>
);
export default Button;

Button.propType = {
  onClick: PropTypes.func,
  children: PropTypes.object,
};
