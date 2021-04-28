import { CallToActionArrow } from '..';
import * as S from './MainBanner.elements';

/**
 * componente MainBanner
 * @param {object} params
 * @param {string}  params.heading - Heading do banner
 * @param {string}  params.paragraph - Parágrafo do banner
 * @param {boolean}  params.showCallToAction - Booleano para ver se irá mostrar ou não o callToActionArrow
 * @param {number} params.height - Altura do banner (pois ele é maior na home e menor nas outras telas)
 * @param {string}  params.imageUrl - URL da imagem
 * @returns
 */
export default function MainBanner({
  heading,
  paragraph,
  showCallToAction,
  height,
  imageUrl,
}) {
  return (
    <S.Container bannerHeight={height}>
      <S.LeftTextContainer>
        <S.LeftTextContentWrapper>
          <h1>{heading}</h1>

          <p>{paragraph}</p>

          {showCallToAction && (
            <CallToActionArrow>Get an Invite</CallToActionArrow>
          )}
        </S.LeftTextContentWrapper>
      </S.LeftTextContainer>

      <S.RightBlockImageContainer imageUrl={imageUrl} />
    </S.Container>
  );
}
