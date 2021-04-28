import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const StoriesWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1160px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturesWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 45rem;
  padding: 3rem 0;
  background-color: #fff;
`;

export const FeaturesContent = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 3rem;
  }
`;
