import Link from 'next/link';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderLogo,
  NavigationList,
  CallToActionButton,
} from './Header.elements';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderNav>
        <HeaderLogo>
          <Link href='/'>
            <img src='/images/logo.svg' alt='PHOTOSNAP' />
          </Link>
        </HeaderLogo>

        <NavigationList>
          <li>
            <Link href='/'>Stories</Link>
          </li>
          <li>
            <Link href='/'>Features</Link>
          </li>
          <li>
            <Link href='/'>Pricing</Link>
          </li>
        </NavigationList>
        <CallToActionButton>Get an invite</CallToActionButton>
      </HeaderNav>
    </HeaderWrapper>
  );
};

export default Header;
