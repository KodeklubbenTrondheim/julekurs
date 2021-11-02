import styled, { css } from 'styled-components'
import { CSSShadows } from '../constants'

const ButtonStyles = css`
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.$color || '#666'};
  color: ${(props) => props.$textColor || '#fff'};
  padding: 0.6em 1em;
  cursor: pointer;
  user-select: none;
  font-size: ${(props) => props.$size || '16px'};
  ${CSSShadows.large}

  transition-duration: 0.1s;
  transition-property: background box-shadow;

  :hover {
    background-color: ${(props) => props.$hoverColor || '#444'};
  }

  :active {
    ${CSSShadows.small}
  }
`

export const Button = styled.button`
  ${ButtonStyles}
`

export const LinkButton = styled.a`
  ${ButtonStyles}
`
