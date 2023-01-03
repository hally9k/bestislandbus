/** @jsx jsx */

import { jsx, css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

const mapStyles = css`
  border: 1px black solid;
  /* height: 8rem; */

  @media (max-width: 960px) {
    border: none;
  }

  > div {
    height: 100%
  }
`

const mapContainerStyles = css`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`

const sectionStyles = css`
  
  padding: 2rem;

  @media (max-width: 960px) {
      padding: 0;
  }
`

export const FindingUs = () => 
<section css={sectionStyles}>
  <div css={mapContainerStyles}>
    <a href="https://goo.gl/maps/8hjrQeo9gzhoay5G7">
      <StaticImage src="../images/map.jpg" alt="map" css={mapStyles} />
    </a>
  </div>
</section>