/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { colorBrandPrimary, colorShadePrimary, colorBaseWhite } from '../styles/color'
import { StaticImage } from 'gatsby-plugin-image'
import { EnquiryButton } from '../components/enquiry-button'
import logoSvg from '../images/logo.svg'

const headerStyle = css`
`

const logoWrapperStyle = css`
  position: absolute;
  z-index: 10;
  
  overflow-wrap: auto;

`

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

const logoTextStyle = css`
  width: 12rem;
  margin: 1rem;

  font-weight: 500;

  text-align: center;
  color: ${colorBaseWhite};

  @media (max-width: 650px) {
    display: none;
  }
`

const primarySectionStyles = css`
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

const secondarySectionStyles = css`
  padding: 3rem 5rem;
  background-color: ${colorShadePrimary};

  font-size: 2rem;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 960px) {
    font-size: 1.8rem;
  }

  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
`

const secondarySectionTextContainerStyles = css`
    max-width: 70rem;
    padding: 0 5rem;
    
    @media (max-width: 1200px) {
      padding: 0 2rem;
    }

    @media (max-width: 960px) {
      padding: 0 1rem;
    }

    @media (max-width: 750px) {
      padding: 0;
    }

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

    > h1, h2 {
      font-weight: 400;

      font-size: 3rem;

      text-align: center;
      padding-left: 5rem;
      padding-right: 5rem;

      @media (max-width: 1200px) {
        font-size: 2rem;
      }

      @media (max-width: 960px) {
        font-size: 2rem;
        padding-left: 3rem;
        padding-right: 3rem;
      }

      @media (max-width: 715px) {
        font-size: 1.8rem;
        padding-left: 2rem;
        padding-right: 2rem;
      }

      @media (max-width: 410px) {
        font-size: 1.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
`

export const HeaderAndHero = () => <React.Fragment>
  <div css={headerStyle}>
    <div css={logoWrapperStyle}>
      <img src={logoSvg} css={logoStyle}/>
      <h1 css={logoTextStyle}>South Island<br/>New Zealand</h1>
    </div>
    <StaticImage src="../images/hero.jpg" alt="beautiful orange bus by the water"></StaticImage>
  </div>
  <section css={primarySectionStyles}>
    <h2>the enchantment of a vintage stay <br /> in a truly unspoilt place</h2>
  </section>
  <section css={secondarySectionStyles}>
    <div css={secondarySectionTextContainerStyles}>
      <h2>The Best Island Bus sits on the shores of the Waimea Estuary near Nelson, on New Zealand’s 
        stunning South Island</h2>
      <p>This classic bus is surrounded by the ever changing landscape of the estuary, with its diverse 
        wildlife and dramatic views to the velvety hills of the Richmond Ranges. In the summer months the 
        beautiful evening sun nearly always turns into an eye-popping sunset and in the cooler months the snow 
        capped peaks of the Kahurangis are clearly visible on the horizon</p>
      </div>
      <EnquiryButton/>
  </section>
</React.Fragment>
