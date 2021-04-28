import { MainBanner } from '../components';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MainBanner
        height={67}
        heading='Create and share your photo stories'
        paragraph='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
        showCallToAction
        imageUrl='/images/pages/home/hero.jpg'
      />
    </div>
  );
}
