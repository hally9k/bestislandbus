/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { primaryBrandHeadingStyles } from '../styles/typeography'
import { sectionContainerStyles, secondarySectionStyles, quartinarySectionStyles, asideStyles } from '../styles/section'
import { Logo } from '../components/logo'
import marketImg from '../images/market.png'
import islandsImg from '../images/islands.jpg'
import portholeImg from '../images/porthole.jpg'

const ideasLinkStyles = css`
  color: green;
  text-decoration: none;

  :hover {
    color: lightgreen;

  }
`

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
  height: 480px; 
  width: 100%;
  overflow: hidden;
`

const imageMarketStyles = css`
  background-image: url(${marketImg});

  ${imageContainerStyles}
`
const imageIslandsStyles = css`
  background-image: url(${islandsImg});

  ${imageContainerStyles}
`
const imagePortholeStyles = css`
  background-image: url(${portholeImg});

  ${imageContainerStyles}
`
const galleryTripleSection = css`
  ${gallerySection}
  grid-template-columns: 1fr 1fr 1fr;
`

export const OurLocalArea = () => <React.Fragment>
  <section css={sectionContainerStyles}>
    <section css={secondarySectionStyles}>
      <p>
        Nelson really is a buzzing, vibrant town, compact enough to ramble around over a long weekend but with lots more further afield. Spend a day in the Abel Tasman National Park with its turquoise waters and easy walking trail, head south to the Nelson Lakes or explore the local wineries and breweries.
      </p> 
      <h1 css={primaryBrandHeadingStyles}>take time out to explore <a href="https://nelsontasman.nz"> nelsontasman.nz</a></h1>
      <p>Hopping in one of our kayaks and paddling up the the estuary is a great way to start the day! You will see a variety of wading birds including the rare White Heron if you’re lucky and possibly a stingray on an out-going tide. The Great Taste Trail runs close by,
        a cruisy bike trail that takes you across swing bridges and through farmland and on towards Rabbit island, where you can take the ferry across to Mapua for lunch.
      </p>
    </section>
    <aside css={asideStyles}>
      <Logo/>
    </aside>
    </section>
    <section css={galleryTripleSection}>
    <div css={imageMarketStyles}>
    </div>
    <div css={imageIslandsStyles}>
    </div>
    <div css={imagePortholeStyles}>
    </div>
  </section>
  <section css={sectionContainerStyles}>
    <section css={quartinarySectionStyles}>
      <h1 css={primaryBrandHeadingStyles}>a few ideas to get you started</h1>
      <p><a css={ideasLinkStyles} href="https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/?tab-id=50578" target="_blank" rel="noopener noreferrer">Abel Tasman National Park</a></p>
      <p><a css={ideasLinkStyles} href="https://thesuter.org.nz" target="_blank" rel="noopener noreferrer">Suter Gallery and cafe in Nelson</a></p>
      <p><a css={ideasLinkStyles} href="https://www.founderspark.co.nz" target="_blank" rel="noopener noreferrer">Founders Heritage Park</a></p>
      <p><a css={ideasLinkStyles} href="https://www.cablebayadventurepark.com" target="_blank" rel="noopener noreferrer">Cable Bay Adventure Park</a></p>
      <p><a css={ideasLinkStyles} href="http://www.nelson.govt.nz/recreation/recreation/parks-and-reserves/miyazu-garden/" target="_blank" rel="noopener noreferrer">Miyazu Japanese Gardens and Queens Gardens in Nelson Rabbit Island beach</a></p>
      <p><a css={ideasLinkStyles} href="https://www.mapuawharf.co.nz" target="_blank" rel="noopener noreferrer">Mapua Wharf</a> ...ferry to <a css={ideasLinkStyles} href="https://www.nelsontasman.nz/visit-nelson-tasman/plan-your-trip/activities/3270-rabbit-island" target="_blank" rel="noopener noreferrer">Rabbit Island</a></p>
      <p><a css={ideasLinkStyles} href="https://www.nelsontasman.nz/visit-nelson-tasman/destinations/takaka-and-golden-bay/" target="_blank" rel="noopener noreferrer">Takaka in Golden Bay</a></p>
      <p><a css={ideasLinkStyles} href="https://www.connings.co.nz" target="_blank" rel="noopener noreferrer">Connings Food Market</a></p>
      <p><a css={ideasLinkStyles} href="https://playhousecafe.co.nz" target="_blank" rel="noopener noreferrer">The Playhouse Cafe and theatre</a></p>
      <p><a css={ideasLinkStyles} href="https://www.motuekasundaymarket.co.nz/" target="_blank" rel="noopener noreferrer">Local markets Nelson/Motueka</a></p>
    </section>
    <aside css={asideStyles}>
    <Logo/>
    </aside>
  </section>
</React.Fragment>