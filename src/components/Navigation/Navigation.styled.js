import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { accentColor } from 'styles/variables';
export const HomeLink = styled(NavLink)`
  font-weight: 700;
  margin-right: 35px;
  transition: all 250ms ease;
  &:hover {
    color: ${accentColor};
  }
`;

export const ContactsLink = styled(HomeLink)`
  padding: 5px 10px;
  border: 1px solid #67c2b6;
  border-radius: 8px;
`;
