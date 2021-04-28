import styled from 'styled-components';

export const MainBanner = styled.section`
  width: 100%;
  height: 67vh;
  background-color: #000;
  display: grid;
  grid-template-columns: 43% 57%;
  grid-template-rows: 1fr;

  @media (max-width: 1440px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const LeftTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`;
