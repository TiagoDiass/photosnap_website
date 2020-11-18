import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderLogo,
  NavigationList,
  CallToActionButton,
  MobileIcon,
} from './Header.elements';

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Head>
        <title>Photosnap</title>
      </Head>
      <HeaderWrapper>
        <HeaderNav>
          <HeaderLogo>
            <Link href='/'>
              <img src='/images/logo.svg' alt='PHOTOSNAP' />
            </Link>
          </HeaderLogo>

          <MobileIcon onClick={handleClick}>
            {clicked ? (
              <img src='/images/close.svg' alt='Close menu' />
            ) : (
              <img src='/images/menu.svg' alt='Open menu' />
            )}
          </MobileIcon>

          {/* <MobileMenu></MobileMenu> */}

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
    </>
  );
};

export default Header;
