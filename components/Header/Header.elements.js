import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 7.2rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderNav = styled.nav`
  width: 76%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: 700;

  li:not(:last-child) {
    margin-right: 3.7rem;
  }

  li a {
    transition: opacity 0.25s ease;

    &:hover {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CallToActionButton = styled.button`
  outline: none;
  border: none;
  width: 15.8rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 1.2rem;
  font-weight: 700;
  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.black};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.button`
  display: none;
  background: transparent;
  border: none;
  outline: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.nav`
  position: absolute;
  width: 100vw;
  background-color: white;
  left: 0;
  padding: 1rem 10rem;

  ${(props) => css`
    top: ${props.isOpen ? '7.2rem' : '-7.2rem'};
    opacity: ${props.isOpen ? '1' : '0'};
  `}
`;

export const MobileNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.2rem;

  li {
    font-size: 1.65rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  li:last-of-type {
    margin-bottom: 1rem;
  }
`;

export const CallToActionButtonMobile = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  button {
    outline: none;
    border: none;
    width: 30rem;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 2rem 1.2rem;
    font-weight: 700;
    cursor: pointer;

    transition: all 0.25s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
