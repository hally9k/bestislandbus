/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { tertiarySectionStyles, secondarySectionStyles, sectionContainerStyles, asideStyles } from '../styles/section'
import { primaryBrandHeadingStyles } from '../styles/typeography'
import ImageGallery from 'react-image-gallery'
import { Logo } from '../components/logo'
import { StaticImage } from 'gatsby-plugin-image'

import gallery1 from '../images/gallery/1.jpg'
import gallery2 from '../images/gallery/2.jpg'
import gallery3 from '../images/gallery/3.jpg'
import gallery7 from '../images/gallery/7.jpg'
import gallery9 from '../images/gallery/9.jpg'
import gallery11 from '../images/gallery/11.jpg'
import gallery12 from '../images/gallery/12.jpg'
import React from 'react'

const sectionStyles = css`
  ${tertiarySectionStyles}
  padding: 0;

  @media (max-width: 1225px) {
    padding: 0;
  }

  @media (max-width: 880px) {
    padding: 0;
  }

  @media (max-width: 715px) {
    padding: 0;
  }

  @media (max-width: 410px) {
    padding: 0;
  }
`

const accomodationGalleryImages = [
  { original: gallery1, thumnail: gallery1 },
  { original: gallery2, thumnail: gallery2 },
  { original: gallery3, thumnail: gallery3 },
  { original: gallery7, thumnail: gallery7 },
  { original: gallery9, thumnail: gallery9 },
  { original: gallery11, thumnail: gallery11 },
  { original: gallery12, thumnail: gallery12 },
]

const vistaImageStyles = css`
  min-height: 20rem;
`

export const Accommodation = () => <React.Fragment>
  <section css={sectionContainerStyles}>
    <section css={sectionStyles}>
      <ImageGallery items={accomodationGalleryImages}/>
      <p css={secondarySectionStyles}>The Best Island Bus is an original sixties bus
that has been lovingly modernised. We have endeavoured to combine comfortable and stylish accommodation with the charm and authenticity that a bus of this era has, in bucketloads.
<h1 css={primaryBrandHeadingStyles}>cosy... secluded... and surprisingly spacious</h1>
The bus is situated at the end of our large garden in a secluded corner with its own private lawn. There is a large deck outside for breakfast al fresco with numerous cushions and loungers for those lazy evenings. A generous bathroom and laundry that is separate from the bus but easily accessed by a corridor. A fully fitted kitchen looks out over the garden. A queen bed with cotton sheets. At one end there is a large sofa where you can chill out and watch the herons and kingfishers.
<br /><br />We have chosen not to have a TV but provide an i-pad with an assortment of films and documentaries. The i-pad also has information on what to do and where to eat out in the area.
<br /><br />The Best Island Bus sleeps two comfortably.
      </p>
    </section>
    <aside css={asideStyles}>
      <Logo/>
    </aside>
  </section>
  <StaticImage css={vistaImageStyles} src="../images/estuary.jpg" alt="mountain ranges with water in the foreground"></StaticImage>
</React.Fragment>