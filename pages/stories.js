import React from 'react';
import { CallToActionArrow } from '../components';
import * as S from '../styles/pagesElements/stories.elements';
import storiesData from '../styles/pagesElements/stories';

export default function stories() {
  return (
    <S.Container>
      <S.Banner>
        <div className='content'>
          <p>Last month's featured story</p>
          <h1>Hazy full moon of Appalachia</h1>
          <span>
            March 2nd 2020 <strong>by John Snow</strong>
          </span>
          <p className='description'>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>

          <CallToActionArrow>Read the story</CallToActionArrow>
        </div>
      </S.Banner>

      <S.StoriesContainer>
        {storiesData.map((story, index) => (
          <S.Story key={index} backgroundImageName={story.imageName}>
            <div className='content'></div>
          </S.Story>
        ))}
      </S.StoriesContainer>
    </S.Container>
  );
}
