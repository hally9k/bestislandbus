/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { colorBrandPrimary, colorShadePrimary } from '../styles/color'
import ImageGallery from 'react-image-gallery'
import logoSvg from '../images/logo.svg'
import { StaticImage } from 'gatsby-plugin-image'

import gallery1 from '../images/gallery/1.jpg'
import gallery2 from '../images/gallery/2.jpg'
import gallery3 from '../images/gallery/3.jpg'
// import gallery4 from '../images/gallery/4.jpg'
// import gallery5 from '../images/gallery/5.jpg'
// import gallery6 from '../images/gallery/6.jpg'
import gallery7 from '../images/gallery/7.jpg'
// import gallery8 from '../images/gallery/8.jpg'
import gallery9 from '../images/gallery/9.jpg'
// import gallery10 from '../images/gallery/10.jpg'
import gallery11 from '../images/gallery/11.jpg'
import gallery12 from '../images/gallery/12.jpg'
import React from 'react'

const accomodationGalleryImages = [
  { original: gallery1, thumnail: gallery1 },
  { original: gallery2, thumnail: gallery2 },
  { original: gallery3, thumnail: gallery3 },
  // { original: gallery4, thumnail: gallery4 },
  // { original: gallery5, thumnail: gallery5 },
  // { original: gallery6, thumnail: gallery6 },
  { original: gallery7, thumnail: gallery7 },
  // { original: gallery8, thumnail: gallery8 },
  { original: gallery9, thumnail: gallery9 },
  // { original: gallery10, thumnail: gallery10 },
  { original: gallery11, thumnail: gallery11 },
  { original: gallery12, thumnail: gallery12 },
] 

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

const primaryBrandHeadingStyles = css`
  font-family: 'GFS Didot', serif;
  color: ${colorBrandPrimary};
  font-size: 4rem;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 960px) {
    font-size: 2rem;
  }

  @media (max-width: 750px) {
    font-size: 1.8rem;
  }
`

const sectionContainerStyles = css`
  display: flex;
`

const asideStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 300px;

  @media (max-width: 960px) {
    display: none;
  }
`

const tertiarySectionStyles = css`
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

const accommodationSectionTextStyles = css`
  padding: 3rem;
  font-size: 1.5rem;

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


export const Accommodation = () => <React.Fragment>
  <section css={sectionContainerStyles}>
                <section css={tertiarySectionStyles}>
      <ImageGallery items={accomodationGalleryImages}/>
      {/* <StaticImage src="../images/inside-front.jpg" alt="interior shot of pink sofa"></StaticImage> */}

      <p css={accommodationSectionTextStyles}>The Best Island Bus is an original sixties bus
that has been lovingly modernised. We have endeavoured to combine comfortable and stylish accommodation with the charm and authenticity that a bus of this era has, in bucketloads.
<h1 css={primaryBrandHeadingStyles}>cosy...secluded....and surprisingly spacious</h1>
The bus is situated at the end of our large garden in a secluded corner with its own private lawn. There is a large deck outside for breakfast al fresco with numerous cushions and loungers for those lazy evenings. A generous bathroom and laundry that is separate from the bus but easily accessed by a corridor. A fully fitted kitchen looks out over the garden. A queen bed with cotton sheets. At one end there is a large sofa where you can chill out and watch the herons and kingfishers.
<br /><br />We have chosen not to have a TV but provide an i-pad with an assortment of films and documentaries. The i-pad also has information on what to do and where to eat out in the area.
<br /><br />A continental breakfast is provided during your stay. <br /><br />The Best Island Bus sleeps two comfortably.
      </p>
    </section>
    <aside css={asideStyles}>
      <img src={logoSvg} css={logoStyle}/>
    </aside>
  </section>
  <StaticImage src="../images/estuary.jpg" alt="mountain ranges with water in the foreground"></StaticImage>
</React.Fragment>