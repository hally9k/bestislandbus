/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { colorBaseWhite } from '../styles/color'
import { primarySectionStyles, secondarySectionStyles } from '../styles/section'
import { primaryBrandHeadingStyles, secondaryBodyTextStyles } from '../styles/typeography'
import { Logo } from '../components/logo'
import { StaticImage } from 'gatsby-plugin-image'
import { EnquiryButton } from '../components/enquiry-button'
import { Button } from '../components/button'


const innerContainer = css`
  display: flex;
  flex-direction: column;
`

const calButtonContainerStyle = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 960px) {
    font-size: 1.5rem;
    justify-content: center;
  }

  @media (max-width: 715px) {
    font-size: 1.2rem;
    justify-content: center;
  }

  @media (max-width: 410px) {
    font-size: 1rem;
    justify-content: center;
  }
`


const calButtonStyles = css`
  margin-bottom: 0.5rem;
  font-size: 1.6rem;

  @media (max-width: 1400px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.6rem;
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
`

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

const introHeading = css`
  margin: 1rem 0 2rem;
  line-height: 1.2;

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
    <h1 css={primaryBrandHeadingStyles}>the enchantment of a vintage stay <br /> in a truly unspoilt place</h1>
  </section>
  <section css={secondarySectionStyles}>
      <h2 css={introHeading}>The Best Island Bus sits on the shores of the Waimea Estuary near Nelson, on New Zealand’s 
        stunning South Island</h2>
      <p css={secondaryBodyTextStyles}>This classic bus is surrounded by the ever changing landscape of the estuary, with its diverse 
        wildlife and dramatic views to the velvety hills of the Richmond Ranges. In the summer months the 
        beautiful evening sun nearly always turns into an eye-popping sunset and in the cooler months the snow 
        capped peaks of the Kahurangis are clearly visible on the horizon</p>
      <div css={calButtonContainerStyle}>
        <div css={innerContainer}>
          <a href="https://calendar.google.com/calendar/embed?src=relax%40bestislandbus.nz&ctz=Pacific%2FAuckland" target="_blank" rel="noopener">
            <Button text="check availability" onClick={() => {}} styles={calButtonStyles}></Button>
          </a>
          <EnquiryButton/>
        </div>
      </div>
  </section>
</React.Fragment>
