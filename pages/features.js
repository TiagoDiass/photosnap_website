import Head from 'next/head';
import { MainBanner } from '../components';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export default function Features() {
  return (
    <>
      <Head>
        <title>Photosnap | Features</title>
      </Head>
      <Container>
        <MainBanner
          height={50}
          heading='Features'
          paragraph='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories'
          imageUrl='/images/pages/features/hero.jpg'
        />
      </Container>
    </>
  );
}
