import styled from 'styled-components';

const FeatureBlockContainer = styled.article`
  width: 100%;
  text-align: center;

  .imgWrapper {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h4 {
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  p {
    margin-top: 1.6rem;
    font-size: 1.5rem;
    opacity: 0.7;
    line-height: 2rem;
  }
`;

/**
 * componente FeatureBlock
 * @param {object} props
 * @param {object} props.feature
 * @param {string} props.feature.imagePath - caminho da imagem do FeatureBlock
 * @param {string} props.feature.title - título do FeatureBlock
 * @param {string} props.feature.description - descrição do FeatureBlock
 * @returns
 */
export default function FeatureBlock({ feature }) {
  return (
    <FeatureBlockContainer>
      <div className='imgWrapper'>
        <img src={feature.imagePath} alt={feature.title} />
      </div>
      <h4>{feature.title}</h4>
      <p>{feature.description}</p>
    </FeatureBlockContainer>
  );
}
