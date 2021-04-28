import styled, { css } from 'styled-components';

export const Container = styled.section`
  height: 60vh;
  display: flex;
  flex-direction: ${({ imageOnLeft }) => (imageOnLeft ? 'row' : 'row-reverse')};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    height: 80vh;
  }
`;

// wrapper da imagem, que fica na esquerda da section por padrão
export const ImageBlock = styled.div`
  width: 56%;
  ${({ imageUrl }) => css`
    background-image: url('${imageUrl}');
  `}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media (max-width: 768px) {
    width: 100%;
    height: 55%;
  }
`;

// wrapper do texto, que fica na direita por padrão
export const TextBlock = styled.article`
  width: 44%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 45%;
  }
`;

export const TextBlockContent = styled.main`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  h2 {
    text-transform: uppercase;
    font-size: 4.2rem;
    font-weight: 500;
    letter-spacing: 2px;

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

  @media (max-width: 1440px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
