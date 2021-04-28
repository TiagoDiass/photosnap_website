import * as S from './StoryCard.elements';
import { Arrow } from '..';

export default function StoryCard({ story }) {
  return (
    <S.StoryContainer backgroundImageName={story.imageName}>
      <div className='content'>
        <p className='date'>{story.date}</p>
        <h5 className='title'>{story.title}</h5>
        <span className='author'>by {story.author}</span>
        <div className='read-more-wrapper'>
          <a href='#'>READ MORE</a>
          <Arrow />
        </div>
      </div>
    </S.StoryContainer>
  );
}
