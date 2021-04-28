import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderLogo,
  NavigationList,
  CallToActionButton,
  MobileIcon,
  MobileMenu,
  MobileNavigationList,
  CallToActionButtonMobile,
} from './Header.elements';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          <MobileIcon onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <img src='/images/close.svg' alt='Close menu' />
            ) : (
              <img src='/images/menu.svg' alt='Open menu' />
            )}
          </MobileIcon>

          {isMobileMenuOpen && (
            <MobileMenu isOpen={isMobileMenuOpen}>
              <MobileNavigationList>
                <li onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href='/stories'>Stories</Link>
                </li>
                <li>
                  <Link href='/'>Features</Link>
                </li>
                <li>
                  <Link href='/'>Pricing</Link>
                </li>
              </MobileNavigationList>

              <hr />

              <CallToActionButtonMobile>
                <button>Get an invite</button>
              </CallToActionButtonMobile>
            </MobileMenu>
          )}

          <NavigationList>
            <li>
              <Link href='/stories'>Stories</Link>
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
