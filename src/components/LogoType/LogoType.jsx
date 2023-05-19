import logoSrs from '../../img/logo.svg';
import { Logo, Images, LogoText } from './LogoType.styled';

const LogoType = () => (
  <Logo href="#">
    <Images loading="lazy" src={logoSrs} alt="logo" width="39" />
    <LogoText>testtask</LogoText>
  </Logo>
);

export default LogoType;
