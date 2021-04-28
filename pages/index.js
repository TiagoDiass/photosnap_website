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

      <MainBanner
        height={50}
        heading='Features'
        paragraph='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories'
        imageUrl='/images/pages/features/hero.jpg'
      />

      <MainBanner
        height={50}
        heading='Pricing'
        paragraph='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
        imageUrl='/images/pages/pricing/hero.jpg'
      />
    </div>
  );
}
