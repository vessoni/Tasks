import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #6058ff;

  height: 15rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1.3rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 720px) {
    font-size: 87.5%;
    justify-content: center;
    flex-direction: column;
  }
`;
