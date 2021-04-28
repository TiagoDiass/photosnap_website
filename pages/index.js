import Head from 'next/head';
import * as S from '../styles/pagesElements/home.elements';
import {
  BenefitBlock,
  LandingSection,
  MainBanner,
  StoryCard,
} from '../components';
import storiesData from '../styles/pagesElements/stories.json';
import benefitsData from '../styles/pagesElements/benefits.json';

const stories = [0, 1, 2, 3].map((i) => storiesData[i]);
const benefits = [0, 1, 2].map((i) => benefitsData[i]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Photosnap | Home</title>
      </Head>
      <S.Container>
        <MainBanner
          height={67}
          heading='Create and share your photo stories'
          paragraph='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
          showCallToAction
          imageUrl='/images/pages/home/hero.jpg'
        />

        <LandingSection
          heading='Beatiful stories every time'
          paragraph='We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'
          callToActionText='View the stories'
          imageUrl='/images/pages/home/beautiful-stories.jpg'
          imageOnLeft
        />

        <LandingSection
          heading='Designed for everyone'
          paragraph='Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.'
          callToActionText='View the stories'
          imageUrl='/images/pages/home/designed-for-everyone.jpg'
          imageOnLeft={false}
        />

        <S.StoriesWrapper>
          {stories.map((story, index) => (
            <StoryCard story={story} key={index} />
          ))}
        </S.StoriesWrapper>

        <S.BenefitsWrapper>
          <S.BenefitsContent>
            {benefits.map((benefit, index) => (
              <BenefitBlock key={index} benefit={benefit} />
            ))}
          </S.BenefitsContent>
        </S.BenefitsWrapper>
      </S.Container>
    </>
  );
}
