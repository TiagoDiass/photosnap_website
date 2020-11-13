import styled from 'styled-components';

const MY = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 3.5rem;
  background-color: #f9f9f9;
  color: ${({ theme }) => theme.colors.turkishRose};
`;

export default function Home() {
  return (
    <MY>
      <h1>page</h1>
    </MY>
  );
}
