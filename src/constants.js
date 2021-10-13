import { css } from 'styled-components'

export const CSSShadows = {
  small: css`
    --shadow-color: #0002;
    box-shadow: 0 1px 1px var(--shadow-color);
  `,
  medium: css`
    --shadow-color: #0002;
    box-shadow: 0 1px 1px var(--shadow-color), 0 2px 2px var(--shadow-color), 0 4px 4px var(--shadow-color);
  `,
  large: css`
    --shadow-color: #0002;
    box-shadow: 0 1px 1px var(--shadow-color), 0 2px 2px var(--shadow-color), 0 4px 4px var(--shadow-color),
      0 8px 8px var(--shadow-color), 0 16px 16px var(--shadow-color);
  `,
}
