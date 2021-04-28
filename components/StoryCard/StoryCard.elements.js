import styled, { keyframes, css } from 'styled-components';

const GradientHorizontal = keyframes` 
  0% {background-position:0% 50%}
  50% {background-position:100% 50%}
  100% {background-position:0% 50%}
`;

export const StoryContainer = styled.article`
  height: 50rem;
  width: 100%;
  ${({ backgroundImageName }) => css`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
      url('/images/pages/stories/${backgroundImageName}.jpg');
  `}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  transition: transform 0.3s ease;
  justify-content: center;
  padding: 4rem 4.5rem;

  &:hover {
    transform: translateY(-22px);
    cursor: pointer;

    /* Border animation in bottom side */
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
