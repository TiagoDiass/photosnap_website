import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const PlansAndTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10rem 0;
`;

export const PlansSection = styled.section`
  width: 100%;
  min-height: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;

  @media (max-width: 1170px) {
    column-gap: 2rem;
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    row-gap: 2.5rem;
  }
`;

export const PlanBlock = styled.article`
  ${({ contrast }) => css`
    width: 350px;
    height: 100%;
    background-color: ${contrast ? '#000' : 'rgb(245, 245, 245)'};

    padding: 4rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      color: ${contrast ? '#fff' : '#000'};
      font-weight: bold;
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    p {
      text-align: center;
      font-size: 1.5rem;
      color: ${contrast ? '#fff8' : '#0008'};
      line-height: 2rem;
      margin-bottom: 4.5rem;
    }

    strong {
      font-weight: 500;
      letter-spacing: 2px;
      color: ${contrast ? '#fff' : '#000'};
      font-size: 4.5rem;
    }

    small {
      font-size: 1.5rem;
      color: ${contrast ? '#fff8' : '#0008'};
      margin-bottom: 4rem;
    }

    button {
      border: none;
      background-color: ${contrast ? '#fff' : '#000'};
      color: ${contrast ? '#000' : '#fff'};
      padding: 1.2rem 0;
      outline: none;
      width: 100%;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 1.3rem;
      cursor: pointer;

      transition: all 0.2s ease;

      &:hover {
        background-color: #ddd;
        color: #000;
      }
    }
  `}
`;

export const TableSection = styled.section``;
