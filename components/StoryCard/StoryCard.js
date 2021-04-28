import * as S from './StoryCard.elements';
import { Arrow } from '..';

/**
 * componente StoryCard
 * @param {object} props
 * @param {object} props.story
 * @param {string} props.story.imageName - nome da imagem do StoryCard
 * @param {string} props.story.date - data do StoryCard
 * @param {string} props.story.title - título do StoryCard
 * @param {string} props.story.author - autor da story do StoryCard
 * @returns
 */
export default function StoryCard({ story }) {
  return (
    <S.StoryContainer backgroundImageName={story.imageName}>
      <div className='content'>
        <p className='date'>{story.date}</p>
        <h5 className='title'>{story.title}</h5>
        <span className='author'>by {story.author}</span>
        <div className='read-more-wrapper'>
          <a href='#'>READ MORE</a>
          <Arrow isArrowLight={true} />
        </div>
      </div>
    </S.StoryContainer>
  );
}
