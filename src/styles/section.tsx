/** @jsx jsx */
import { css } from '@emotion/react'

import { colorBrandPrimary } from './color'

export const primarySectionStyles = css`
  padding: 3rem 6rem;
  max-width: 70rem;
  font-size: 3rem;
  font-family: 'GFS Didot', serif;

  a {
    font-size: 1.5rem;
  }

  @media (max-width: 1225px) {
    font-size: 2rem;
    padding: 1.5rem 3rem;
  }

  @media (max-width: 880px) {
    font-size: 1.5rem;
    padding: 1.5rem 3rem;
  }

  @media (max-width: 715px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 410px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }

  > h1, h2 {
    color: ${colorBrandPrimary};
    text-align: center;
  }
`