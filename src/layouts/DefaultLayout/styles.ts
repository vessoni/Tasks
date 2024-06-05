import Toolbar from '@mui/material/Toolbar';
import styled from 'styled-components';

// Template Literals
export const Header = styled.header`
  background-color: #6058ff;
  padding: 1.25rem;

  display: flex;
  justify-content: space-between;

  img {
    width: 12.5rem;
  }
`;

export const CustomizedToolbar = styled(Toolbar)`
  border: none;
  img {
    width: 9.4rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;

  svg {
    margin: 1rem;
    @media (max-width: 500px) {
      margin: 0.5rem;
    }
  }
  @media (max-width: 500px) {
    font-size: 0.6rem;
    margin-left: 1.3rem;
  }
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
