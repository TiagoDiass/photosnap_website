import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
`;

export const Banner = styled.section`
  width: 100%;
  background: url('/images/pages/stories/moon-of-appalacia.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 65rem;
  display: flex;
  align-items: center;
  padding-left: 8rem;

  .content {
    color: #fff;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    width: 22%;

    p:first-of-type {
      font-size: 1.3rem;
      letter-spacing: 1px;
    }

    h1 {
      font-size: 4.5rem;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 4px;
    }

    span {
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: 1px;
    }

    p.description {
      font-size: 1.6rem;
      opacity: 0.7;
      font-weight: 300;
    }
  }
`;

export const StoriesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Story = styled.div`
  height: 50rem;
  ${({ backgroundImageName }) => css`
    background: url('/images/pages/stories/${backgroundImageName}.jpg');
  `}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25%;
  display: flex;
  align-items: flex-end;
  transition: transform 0.3s ease;
  justify-content: center;

  /* &:hover {
    transform: translateY(-22px);
    cursor: pointer;
  } */

  .content {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    color: #fff;
    /* background-color: #fff; */

    p.date {
      font-size: 1.2rem;
      letter-spacing: 2px;
      font-weight: 400;
    }

    h5.title {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
`;
