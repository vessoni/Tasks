import { TextField } from '@mui/material';
import styled from 'styled-components';

export const PurpleTextField = styled(TextField)`
  & label.Mui-focused {
    color: #6058ff;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #6058ff;
    }
  }
  &:disabled {
    background-color: #ccc;
    color: #fff;
    box-shadow: none;
  }
`;

export const PurpleButton = styled.button`
  color: white;
  margin-top: 0.5rem;
  background-color: #6058ff;
  border-radius: 8px;
  padding: 10px 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-transform: none;
  font-weight: bold;
  border: #4f47e0;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #4f47e0;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: #4239d1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #ccc;
    color: #fff;
    box-shadow: none;
  }
`;

export const CancelButton = styled.button`
  color: #6058ff;
  margin-top: 0.5rem;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-transform: none;
  font-weight: bold;
  border: #4f47e0;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #4f47e0;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: #4239d1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #ccc;
    color: #fff;
    box-shadow: none;
  }
`;
