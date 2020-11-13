import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  height: 25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const FooterContent = styled.div`
  width: 76%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  padding: 6.4rem 0;

  display: flex;
  justify-content: space-between;
`;

export const LeftBlockFooter = styled.div`
  border: 1px solid white;
  width: 40%;

  svg {
    margin-bottom: 7.5rem;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.5rem;
  grid-template-rows: 1fr;
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
