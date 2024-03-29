/** @jsx jsx */
import { css } from '@emotion/react'

import { colorShadePrimary } from './color'

export const sectionContainerStyles = css`
  display: flex;
`

export const sectionPadding = css`
  padding: 4rem 6rem;

  @media (max-width: 1225px) {
    padding: 2.5rem 3rem;
  }

  @media (max-width: 880px) {
    padding: 2.5rem 3rem;
  }

  @media (max-width: 715px) {
    padding: 2.5rem 2rem;
  }

  @media (max-width: 410px) {
    padding: 2rem 1rem;
  }
`

export const sectionFontSize = css`
  font-size: 1.4rem;

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 960px) {
    font-size: 1.1rem;
  }

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`


export const primarySectionStyles = css`
  font-family: 'GFS Didot', serif;

  ${sectionPadding}
  ${sectionFontSize}
`

export const secondarySectionStyles = css`
  background-color: ${colorShadePrimary};
  
  ${sectionPadding}
  ${sectionFontSize}
`

export const tertiarySectionStyles = css`
  ${sectionPadding}
  ${sectionFontSize}

  background-color: ${colorShadePrimary};
  width: calc(100% - 300px);
    
  @media (max-width: 960px) {
    width: 100%;
  }
`

export const quartinarySectionStyles = css`
  ${sectionPadding}
  ${sectionFontSize}
  width: calc(100% - 300px);

  @media (max-width: 960px) {
    width: 100%;
  }
`

export const asideStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 300px;

  @media (max-width: 960px) {
    display: none;
  }
`
