import styled, { css, keyframes } from 'styled-components';

const GradientHorizontal = keyframes` 
  0% {background-position:0% 50%}
  50% {background-position:100% 50%}
  100% {background-position:0% 50%}
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #eee;
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

  @media (max-width: 1295px) {
    background-position: center right;
    .content {
      width: 40%;
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
    background-position: center center;
    .content {
      width: 100%;
      margin: 0 auto;
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
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
      url('/images/pages/stories/${backgroundImageName}.jpg');
  `}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25%;
  display: flex;
  align-items: flex-end;
  transition: transform 0.3s ease;
  justify-content: center;
  padding: 4rem 4.5rem;

  &:hover {
    transform: translateY(-22px);
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      height: 0.6rem;
      width: 100%;
      bottom: -0.6rem;
      background-image: linear-gradient(
        15deg,
        rgb(255, 198, 148),
        rgb(188, 113, 152),
        rgb(87, 118, 255)
      );
      background-size: 300% 100%;
      animation: 5s ease 0s infinite normal none running ${GradientHorizontal};
    }
  }

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

    span.author {
      font-size: 1.3rem;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    div.read-more-wrapper {
      border-top: 1px solid #fff5;
      padding: 2rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-size: 1.3rem;
        font-weight: bold;
        letter-spacing: 1px;
      }
    }
  }
`;
