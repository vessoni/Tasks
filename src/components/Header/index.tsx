import logo from '../../assets/logo.png';
import { Content, HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <img src={logo} alt="" />
      </Content>
    </HeaderContainer>
  );
}
