import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.$color || '#666'};
  color: ${(props) => props.$textColor || '#fff'};
  padding: 0.6em 1em;
  cursor: pointer;
  font-size: ${(props) => props.$size || '16px'};

  :hover {
    background-color: ${(props) => props.$hoverColor || '#444'};
  }
`

export const LinkButton = styled.a`
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.$color || '#666'};
  color: ${(props) => props.$textColor || '#fff'};
  padding: 0.6em 1em;
  cursor: pointer;
  font-size: ${(props) => props.$size || '16px'};

  :hover {
    background-color: ${(props) => props.$hoverColor || '#444'};
  }
`
