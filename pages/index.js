import { CallToActionArrow } from '../components';
import * as S from '../styles/pagesElements/home.elements';

export default function Home() {
  return (
    <>
      <S.MainBanner>
        <S.LeftTextContainer>
          <S.LeftTextContentWrapper>
            <h1>Create and share your photo stories</h1>

            <p>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>

            <CallToActionArrow>Get an Invite</CallToActionArrow>
          </S.LeftTextContentWrapper>
        </S.LeftTextContainer>

        <S.RightBlockImageContainer />
      </S.MainBanner>
    </>
  );
}
