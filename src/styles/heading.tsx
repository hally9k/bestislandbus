/** @jsx jsx */
import { css } from '@emotion/react'
import { colorBrandPrimary } from '../styles/color'

export const primaryBrandHeadingStyles = css`
  font-family: 'GFS Didot', serif;
  color: ${colorBrandPrimary};
  font-size: 4rem;

  margin-top: 1rem;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 960px) {
    font-size: 2.5rem;
  }

  @media (max-width: 750px) {
    font-size: 2.5rem;
  }
`