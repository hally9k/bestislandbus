/** @jsx jsx */
import { css } from '@emotion/react'
import { colorBrandPrimary } from './color'

export const primaryBrandHeadingStyles = css`
  font-family: 'Marcellus', serif;
  color: ${colorBrandPrimary};
  font-size: 4rem;

  margin: 1rem 0 2rem;

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

export const secondaryBodyTextStyles = css`
  margin: 1rem 0 2rem;
`