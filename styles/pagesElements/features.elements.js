import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const FeaturesWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75rem;
  padding: 3rem 0;
  background-color: #fff;
`;

export const FeaturesContent = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12rem 5rem;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    row-gap: 6rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 3rem;
  }
`;
