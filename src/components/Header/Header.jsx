import Button from 'components/Button/Button';
import LogoType from 'components/LogoType/LogoType';
import { ButtonPosition, ElementPosition, HeaderStyle } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyle>
      <ElementPosition>
        <LogoType />
        <ButtonPosition>
          <Button>User</Button>
          <Button>Sing up</Button>
        </ButtonPosition>
      </ElementPosition>
    </HeaderStyle>
  );
};

export default Header;
