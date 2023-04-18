import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FormStyled = styled.form`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: rgb(250, 250, 250, 0.8);
  border-radius: 8px;
`;

export const LabelStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InputStyled = styled.input`
  padding: 10px 10px;
  border-radius: 8px;
  color: rgb(101, 99, 99);
  border: none;
  &:focus {
    outline-color: rgb(103, 194, 182);
  }
`;

export const ButtonStyled = styled.button`
  font-size: 24px;
  padding: 5px 20px;
  color: #fff;
  background-color: rgb(103, 194, 182);
  border: none;
  border-radius: 8px;
  transition: all 250ms ease;
  &:hover,
  :focus {
    background-color: rgb(83, 174, 162);
    box-shadow: 10px 5px 15px rgba(103, 194, 182, 0.45);
  }
`;

export const LinkStyled = styled(NavLink)`
  color: rgb(83, 174, 162);
`;
