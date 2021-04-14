import { Logo, CallToActionArrow } from '..';

import {
  FooterWrapper,
  FooterContent,
  LeftBlockFooter,
  SocialMediaRow,
  LogoAndSocialMediaBlock,
  NavigationList,
  RightBlockFooter,
  CopyrightText,
} from './Footer.elements';

const socialMedias = [
  { src: '/images/social-media-svgs/facebook.svg', alt: 'Our Facebook' },
  { src: '/images/social-media-svgs/youtube.svg', alt: 'Our Youtube' },
  { src: '/images/social-media-svgs/twitter.svg', alt: 'Our Twitter' },
  { src: '/images/social-media-svgs/pinterest.svg', alt: 'Our Pinterest' },
  { src: '/images/social-media-svgs/instagram.svg', alt: 'Our Instagram' },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <LeftBlockFooter>
          <LogoAndSocialMediaBlock>
            <Logo />

            <SocialMediaRow>
              {socialMedias.map((socialMedia, index) => (
                <img src={socialMedia.src} alt={socialMedia.alt} key={index} />
              ))}
            </SocialMediaRow>
          </LogoAndSocialMediaBlock>
          <NavigationList>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Stories</a>
            </li>
            <li>
              <a href='#'>Features</a>
            </li>
            <li>
              <a href='#'>Pricing</a>
            </li>
          </NavigationList>
        </LeftBlockFooter>

        <RightBlockFooter>
          <CallToActionArrow>Get an Invite</CallToActionArrow>

          <CopyrightText>Copyright 2020. All Rights Reserved</CopyrightText>
        </RightBlockFooter>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
