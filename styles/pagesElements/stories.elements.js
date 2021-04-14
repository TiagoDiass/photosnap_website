import styled from 'styled-components';

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
