import styled, { css } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: ${({ bannerHeight }) => `${bannerHeight}vh`};
  background-color: #000;
  display: grid;
  grid-template-columns: 43% 57%;
  grid-template-rows: 1fr;

  @media (max-width: 1440px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media (max-width: 500px) {
    height: 80vh;
  }
`;

export const LeftTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 50%;
  }
`;

export const LeftTextContentWrapper = styled.main`
  width: 55%;
  color: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  h1 {
    width: 80%;
    text-transform: uppercase;
    font-size: 4.2rem;
    font-weight: 500;
    letter-spacing: 2px;

    @media (max-width: 1680px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      font-size: 3rem;
      letter-spacing: 1px;
    }
  }

  p {
    font-size: 1.5rem;
    opacity: 0.7;
  }

  a {
    margin-top: 2rem;
  }

  @media (max-width: 1170px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const RightBlockImageContainer = styled.div`
  background-image: url('/images/pages/home/create-and-share-3x.jpg');
  ${({ imageUrl }) => css`
    background-image: url('${imageUrl}');
  `}
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;

  @media (max-width: 768px) {
    height: 50%;
  }
`;
