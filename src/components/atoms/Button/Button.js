import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ colorPurple }) => (colorPurple ? 'hsl(0,0%,60%)' : 'hsl(232.4,64.2%,66.1%)')};
  white-space: nowrap;
  padding: 16px 64px;
  color: #ffffff;
  font-size: ${({ fontBig }) => (fontBig ? '14px' : '24px')};
  /* outline: none; */
  border-radius: 23px;
  cursor: pointer;
  line-height: 1.466667;
  text-transform: uppercase;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ theme }) => theme.dark};
  }
`;
