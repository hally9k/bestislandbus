/** @jsx jsx */
import { colorBrandPrimary, colorBaseWhite } from '../styles/color'

import { jsx, css } from '@emotion/react'
import type { HeadFC } from 'gatsby'
import { Layout } from '../components/layout'

import { HeaderAndHero } from '../sections/header-and-hero'
import { Accommodation } from '../sections/accomodation'
import { WhatWeOffer } from '../sections/what-we-offer'
import { OurLocalArea } from '../sections/our-local-area'
import { BookingYourStay } from '../sections/booking-your-stay'
import { FindingUs } from '../sections/finding-us'
import { GetInTouch } from '../sections/get-in-touch'

const pageStyles = {
  color: "#232129",
  margin: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minWidth: "250px"
}

const dividerStyles = css`
  background-color: ${colorBrandPrimary};
  padding: 1rem;
  color: ${colorBaseWhite};
`

const dividertextStyles = css`
  margin: 0;
  font-family: 'GFS Didot', serif;
  font-size: 3rem;
`

const footerStyles = css`
  height: 100px;
`

const IndexPage = () => <Layout>
    <main style={pageStyles}>
      <HeaderAndHero/>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>accommodation</h2>
      </div>
      <Accommodation />
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>what we offer</h2>
      </div>
      <WhatWeOffer />
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>our local area</h2>
      </div>
      <OurLocalArea/>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>booking your stay</h2>
      </div>
      <BookingYourStay/>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>finding us</h2>
      </div>
      <FindingUs />
      <GetInTouch />
      <footer css={footerStyles}></footer>
    </main>
  </Layout>





export default IndexPage

export const Head: HeadFC = () => <title>Best Island Bus</title>
