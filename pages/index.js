import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.turkishRose};
`;

export default function Home() {
  return <Title>My page</Title>;
}
