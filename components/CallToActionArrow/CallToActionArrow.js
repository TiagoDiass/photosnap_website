import styled from 'styled-components';
import { Arrow } from '..';
import Link from 'next/link';

const CallToAction = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-left: 1rem;
    transition: transform 0.15s ease;
  }

  &:hover {
    text-decoration: underline;

    svg {
      transform: translateX(0.8rem);
    }
  }
`;

export default function CallToActionArrow({
  children,
  isArrowLight = true,
  href = '',
}) {
  return (
    <Link href={href} passHref>
      <CallToAction>
        {children} <Arrow isArrowLight={isArrowLight} />
      </CallToAction>
    </Link>
  );
}
