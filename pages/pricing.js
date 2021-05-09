import { MainBanner } from '../components';
import * as S from '../styles/pagesElements/pricing.elements';

export default function Pricing() {
  return (
    <S.Container>
      <MainBanner
        height={50}
        heading='Pricing'
        paragraph='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
        imageUrl='/images/pages/pricing/hero.jpg'
      />

      <S.PlansAndTableContainer>
        <S.PlansSection>
          <S.PlanBlock>
            <h3>Basic</h3>

            <p>
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>

            <strong>$19.90</strong>
            <small>per month</small>

            <button>Pick plan</button>
          </S.PlanBlock>
          <S.PlanBlock contrast>
            <h3>Pro</h3>

            <p>
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>

            <strong>$39.90</strong>
            <small>per month</small>

            <button>Pick plan</button>
          </S.PlanBlock>
          <S.PlanBlock>
            <h3>Business</h3>

            <p>
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>

            <strong>$99.90</strong>
            <small>per month</small>

            <button>Pick plan</button>
          </S.PlanBlock>
        </S.PlansSection>
      </S.PlansAndTableContainer>
    </S.Container>
  );
}
