import styled from 'styled-components';

const BenefitBlockContainer = styled.article`
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
 * componente BenefitBlock
 * @param {object} props
 * @param {object} props.benefit
 * @param {string} props.benefit.imagePath - caminho da imagem do BenefitBlock
 * @param {string} props.benefit.title - título do BenefitBlock
 * @param {string} props.benefit.description - descrição do BenefitBlock
 * @returns
 */
export default function BenefitBlock({ benefit }) {
  return (
    <BenefitBlockContainer>
      <div className='imgWrapper'>
        <img src={benefit.imagePath} alt={benefit.title} />
      </div>
      <h4>{benefit.title}</h4>
      <p>{benefit.description}</p>
    </BenefitBlockContainer>
  );
}
