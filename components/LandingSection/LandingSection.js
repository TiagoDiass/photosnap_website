import { CallToActionArrow } from '..';
import * as S from './LandingSection.elements';

/**
 * componente LandingSection - Section de uma tela de landing page
 * @param {object} params
 * @param {string}  params.heading - Heading da section
 * @param {string}  params.paragraph - Parágrafo da section
 * @param {string}  params.imageUrl - URL da imagem
 * @param {string}  params.callToActionText - Texto do call to action link
 * @param {boolean} params.imageOnLeft - Booleano para definir se a imagem fica na esquerda ou não
 * @returns
 */
export default function LandingSection({
  heading,
  paragraph,
  imageUrl,
  callToActionText,
  imageOnLeft,
}) {
  return (
    <S.Container imageOnLeft={imageOnLeft}>
      <S.ImageBlock imageUrl={imageUrl} />

      <S.TextBlock>
        <S.TextBlockContent>
          <h2>{heading}</h2>

          <p>{paragraph}</p>

          <CallToActionArrow isArrowLight={false} href='/stories'>
            {callToActionText}
          </CallToActionArrow>
        </S.TextBlockContent>
      </S.TextBlock>
    </S.Container>
  );
}
