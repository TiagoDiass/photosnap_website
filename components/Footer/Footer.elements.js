import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  height: 25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: 768px) {
    height: 50rem;
  }
`;

export const FooterContent = styled.div`
  width: 76%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  padding: 6.4rem 0;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftBlockFooter = styled.div`
  width: 40%;

  svg {
    margin-bottom: 7.5rem;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.5rem;
  grid-template-rows: 1fr;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      margin-bottom: 2rem;
    }
  }
`;

export const LogoAndSocialMediaBlock = styled.div`
  grid-column: 1/2;
`;

export const SocialMediaRow = styled.div`
  width: 17rem;
  display: grid;
  gap: 1.4rem;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  place-content: center;

  img {
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export const NavigationList = styled.ul`
  grid-column: 2/3;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 700;

  li a {
    transition: opacity 0.25s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
    row-gap: 1.5rem;
    align-items: center;

    li {
      font-size: 1.4rem;
    }
  }
`;

export const RightBlockFooter = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
  }
`;

export const CopyrightText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
