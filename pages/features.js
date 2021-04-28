import Head from 'next/head';
import { FeatureBlock, MainBanner } from '../components';
import featuresData from '../styles/pagesElements/features.json';
import * as S from '../styles/pagesElements/features.elements';

export default function Features() {
  return (
    <>
      <Head>
        <title>Photosnap | Features</title>
      </Head>
      <S.Container>
        <MainBanner
          height={50}
          heading='Features'
          paragraph='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories'
          imageUrl='/images/pages/features/hero.jpg'
        />

        <S.FeaturesWrapper>
          <S.FeaturesContent>
            {featuresData.map((feature, index) => (
              <FeatureBlock key={index} feature={feature} />
            ))}
          </S.FeaturesContent>
        </S.FeaturesWrapper>
      </S.Container>
    </>
  );
}
