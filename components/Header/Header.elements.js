import styled from 'styled-components';
import Link from 'next/link';

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
`;
