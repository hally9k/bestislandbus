/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { colorBrandPrimary } from '../styles/color'
import { StaticImage } from 'gatsby-plugin-image'

import gardenImg from '../images/garden.jpg'

const imageContainerStyles = css`
  height: 100%;
  width: auto;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const gallerySection = css`
  display: grid;
  /* height: 480px;  */
  width: 100%;
  overflow: hidden;
`

const galleryDoubleSection = css`
  ${gallerySection}
  grid-template-columns: 1fr 1fr;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const imageGardenStyles = css`
  background-image: url(${gardenImg});

  ${imageContainerStyles}
`
const contactPanel = css`
  padding: 3rem;
  font-size: 2rem;

  background-color: ${colorBrandPrimary};
  color: white;

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

const phoneNumberStyles = css`
  display: flex;

  align-items: center;

  margin-bottom: 0.5rem;

  > div > p {
    margin: 0;
  }
`

const phoneNumberIconStyles = css`
  display: flex;
  align-items: center;
`

const phoneIconStyles = css`
  height: 40px;
  width: 40px;
  margin-right: 10px;

  @media (max-width: 960px) {
    height: 30px;
    width: 30px;
  }
  `

const emailStyles = css`
`

const emailIconStyles = css`
  height: 40px;
  width: 40px;
  top: -5px;
  margin-right: 10px;

  @media (max-width: 960px) {
    height: 30px;
    width: 30px;
  }
`


const instaLogoStyles = css`
  height: 4rem;
  width: 4rem;

  > div {
    height: 100%
  }
`

const instaContainerStyles = css`
  margin-top: 1rem;
` 

const getInTouchHeading = css`
  color: white;
`

export const GetInTouch = () => <section css={galleryDoubleSection}>
  <div css={contactPanel}>
    <br />
    <h4 css={getInTouchHeading}>Get in touch to find out more</h4>
    <br />
    <br />
    <div css={emailStyles}>
      <StaticImage src="../images/email.png" alt="email icon" css={emailIconStyles} />
      <a href="mailto:relax@bestislandbus.nz">relax@bestislandbus.nz</a>
    </div>

    <div css={phoneNumberStyles}>
      <div css={phoneNumberIconStyles}>
        <StaticImage src="../images/mobile.png" alt="phone icon" css={phoneIconStyles} />
      </div>
      <div>
        <p><a href="tel:+6421775806">Clare +64 21 775 806</a></p>
      </div>
    </div>

    <div css={phoneNumberStyles}>
      <div css={phoneNumberIconStyles}>
        <StaticImage src="../images/mobile.png" alt="phone icon" css={phoneIconStyles} />
      </div>
      <div>
        <p><a href="tel:+64212228396">Simon +64 21 222 8396</a></p>
      </div>
    </div>


    <br />
    <a href="#">www.bestislandbus.nz</a>

    <div css={instaContainerStyles}>
     <a href="https:/instagram.com/bestislandbusnz">
       <StaticImage src="../images/insta.png" alt="instagram logo" css={instaLogoStyles} />
     </a>
   </div>
  </div>
  <div css={imageGardenStyles}></div>
</section>
