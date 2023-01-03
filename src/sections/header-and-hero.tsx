/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { colorBaseWhite } from '../styles/color'
import { primarySectionStyles, secondarySectionStyles } from '../styles/section'
import { Logo } from '../components/logo'
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


const textContainerStyles = css`
    max-width: 70rem;
    padding: 0;

    @media (max-width: 1400px) {
      padding: 2rem 1rem;
    }

    @media (max-width: 1200px) {
      padding: 2rem 1rem;
    }

    @media (max-width: 960px) {
      padding: 2rem 1rem;
    }

    @media (max-width: 715px) {
      padding: 2rem 1rem;
    }

    @media (max-width: 410px) {
      padding: 2rem 1rem;
    }

    > * {
      font-weight: 200;
      font-size: 1.5rem;

      @media (max-width: 1400px) {
        font-size: 1.2rem;
      }

      @media (max-width: 1200px) {
        font-size: 1.2rem;
      }

      @media (max-width: 960px) {
        font-size: 1rem;
      }

      @media (max-width: 715px) {
        font-size: 1rem;
      }

      @media (max-width: 410px) {
        font-size: 1rem;
      }
    }

    > h1, h2 {
      font-weight: 400;

      font-size: 2rem;

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

const introHeading = css`
  @media (min-width: 1200px) {
    text-align: left !important;
    padding-left: 0 !important;
  }

`

export const HeaderAndHero = () => <React.Fragment>
  <div css={headerStyle}>
    <div css={logoWrapperStyle}>
      <Logo/>
      <h1 css={logoTextStyle}>South Island<br/>New Zealand</h1>
    </div>
    <StaticImage src="../images/hero.jpg" alt="beautiful orange bus by the water"></StaticImage>
  </div>
  <section css={primarySectionStyles}>
    <h1>the enchantment of a vintage stay <br /> in a truly unspoilt place</h1>
  </section>
  <section css={secondarySectionStyles}>
    <div css={textContainerStyles}>
      <h2 css={introHeading}>The Best Island Bus sits on the shores of the Waimea Estuary near Nelson, on New Zealand’s 
        stunning South Island</h2>
      <p>This classic bus is surrounded by the ever changing landscape of the estuary, with its diverse 
        wildlife and dramatic views to the velvety hills of the Richmond Ranges. In the summer months the 
        beautiful evening sun nearly always turns into an eye-popping sunset and in the cooler months the snow 
        capped peaks of the Kahurangis are clearly visible on the horizon</p>
      </div>
      <EnquiryButton/>
  </section>
</React.Fragment>
