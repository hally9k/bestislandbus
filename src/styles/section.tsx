/** @jsx jsx */
import { css } from '@emotion/react'

import { colorBrandPrimary, colorShadePrimary } from './color'

export const sectionContainerStyles = css`
  display: flex;
`

export const primarySectionStyles = css`
  padding: 3rem 6rem;
  /* max-width: 70rem; */
  font-family: 'GFS Didot', serif;

  a {
    font-size: 1.5rem;
  }

  > h1, h2 {
    color: ${colorBrandPrimary};
    text-align: center;
    font-size: 3.5rem;
  }

  @media (max-width: 1225px) {
    > h1, h2 {
      font-size: 2rem;
    }
    padding: 1.5rem 3rem;
  }

  @media (max-width: 880px) {
    > h1, h2 {
      font-size: 1.5rem;
    }
    padding: 1.5rem 3rem;
  }

  @media (max-width: 715px) {
    > h1, h2 {
      font-size: 1.2rem;
    }
    padding: 1rem 2rem;
  }

  @media (max-width: 410px) {
    > h1, h2 {
      font-size: 1.2rem;
    }
    padding: 0.5rem 1rem;
  }
`

export const secondarySectionStyles = css`
  padding: 3rem 5rem;
  background-color: ${colorShadePrimary};
  font-size: 1.5rem; 

  > h1, h2 {
    font-size: 2rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.5rem;
    padding: 1.5rem 3rem;
    > h1, h2 {
      font-size: 1.5rem;
      padding-left: 1rem;
    }
  }

  @media (max-width: 960px) {
    font-size: 1.2rem;
    padding: 1.5rem 3rem;
    > h1, h2 {
      font-size: 1.2rem;
      padding-left: 1.2rem;
    }
  }

  @media (max-width: 750px) {
    font-size: 1rem;
    padding: 1rem 1rem;
    > h1, h2 {
      font-size: 1.2rem;
      padding-left: 1.5rem;
    }
  }
`

export const tertiarySectionStyles = css`
padding: 0;
background-color: ${colorShadePrimary};
width: calc(100% - 300px);
  
@media (max-width: 960px) {
  width: 100%;
}

font-size: 3rem;

> * {
    font-weight: 200;
    font-size: 2rem;

    @media (max-width: 1200px) {
      font-size: 1.5rem;
    }

    @media (max-width: 960px) {
      font-size: 1.5rem;
    }

    @media (max-width: 715px) {
      font-size: 1.2rem;
    }

    @media (max-width: 410px) {
      font-size: 1rem;
    }
  }
`

export const quartinarySectionStyles = css`
  padding: 3rem;
  width: calc(100% - 300px);

  @media (max-width: 960px) {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
  }


  > button {
      font-weight: 200;
      font-size: 2rem;

      @media (max-width: 1200px) {
        font-size: 1.5rem;
      }

      @media (max-width: 960px) {
        font-size: 1.5rem;
      }

      @media (max-width: 715px) {
        font-size: 1.2rem;
      }

      @media (max-width: 410px) {
        font-size: 1rem;
      }
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
