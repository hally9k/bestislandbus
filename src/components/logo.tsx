/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import logoSvg from '../images/logo.svg'

const logoStyle = css`
  height: 12rem;
  width: 12rem;

  margin: 1rem;

  > div {
    height: 100%
  }

  @media (max-width: 650px) {
    height: 6rem;
    width: 6rem;
  }
`

export const Logo = () => <img src={logoSvg} css={logoStyle}/>
