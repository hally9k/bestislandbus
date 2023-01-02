/** @jsx jsx */

import { jsx, css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

import { primarySectionStyles } from '../styles/section'


const mapStyles = css`
  border: 1px black solid;
  /* height: 8rem; */

  > div {
    height: 100%
  }
`

const mapContainerStyles = css`
  flex-grow: 1;
`

const mapInstaContainer = css`
  display: flex;
  padding: 3rem;

  @media (max-width: 1400px) {
    padding: 2rem 4rem;
    font-size: 1.2rem;
  }

  @media (max-width: 1200px) {
    padding: 1.6rem 3.2rem;
    font-size: 1.2rem;
  }

  @media (max-width: 960px) {
    padding: 1.5rem 3rem;
    font-size: 1rem;
  }

  @media (max-width: 715px) {
    padding: 1.2rem 2.4rem;
    font-size: 1rem;
  }

  @media (max-width: 410px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`

const instaContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 10rem;

  padding: 4rem 0;
`

const instaLogoStyles = css`
  height: 4rem;
  width: 4rem;

  > div {
    height: 100%
  }
`

export const FindingUs = () => <section css={mapInstaContainer}>
  <div css={mapContainerStyles}>
    <section css={primarySectionStyles}>
      <StaticImage src="../images/map.jpg" alt="map" css={mapStyles} />
      <div><a href="https://goo.gl/maps/8hjrQeo9gzhoay5G7">google link for map</a></div>
    </section>
  </div>
  <div css={instaContainerStyles}>
    <a href="https:/instagram.com/bestislandbusnz">
      <StaticImage src="../images/insta.png" alt="instagram logo" css={instaLogoStyles} />
    </a>
  </div>
</section>
  