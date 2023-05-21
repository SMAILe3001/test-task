import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import LogoType from 'components/LogoType/LogoType';
import { ButtonPosition, ElementPosition, HeaderStyle } from './Header.styled';

const Header = ({ usersRef, singUpRef }) => {
  const handleClickUsers = () => {
    usersRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickSingUp = () => {
    singUpRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeaderStyle>
      <ElementPosition>
        <LogoType />
        <ButtonPosition>
          <Button onClick={handleClickUsers}>User</Button>
          <Button onClick={handleClickSingUp}>Sing up</Button>
        </ButtonPosition>
      </ElementPosition>
    </HeaderStyle>
  );
};

Header.propType = {
  usersRef: PropTypes.number,
  singUpRef: PropTypes.number,
};

export default Header;
