/** @jsx jsx */
import { jsx } from '@emotion/react'
import type { HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { Layout } from '../components/layout'
import { Button } from '../components/button'
import { Video } from '../components/video'
import { colorBrandPrimary, colorShadePrimary, colorBaseWhite } from '../styles/color'


const pageStyles = {
  color: "#232129",
  margin: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headerStyle = {
  // height: '50px'
}

const logoStyle = css`
  position: absolute;
  z-index: 10;
`

const heroStyle = css`
  width: 100%;
`

const primarySectionStyles = css`
  padding: 3rem;
`

const secondarySectionStyles = css`
  padding: 3rem;
  background-color: ${colorShadePrimary};
`

const sectionContainerStyles = css`
  display: flex;
`

const dividerStyles = css`
  background-color: ${colorBrandPrimary};
  /* height: 3rem; */

  padding: 1rem;

  color: ${colorBaseWhite};
`

const enquiryButtonContainerStyle = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`

const dividertextStyles = css`
  margin: 0;
`

const asideStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 300px;
`

const tertiarySectionStyles = css`
  padding: 3rem;
  background-color: ${colorShadePrimary};
  width: calc(100% - 300px);
`
const gallerySection = css`
  display: flex;
  justify-items: space-evenly;
  height: 480px; 
  width: 100%;
  overflow: hidden;
`

const videoStyles = css`
  box-sizing: border-box;
    /* height: 56.25vw; */
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    /* width: 177.77777778vh; */
`
const videoContainerStyles = css`
  flex-grow: 1;
  background: #eee;
    height: 100%;
    overflow: hidden;
    padding: 0;
    position: relative;
`

const imageContainerStyles = css`
  height: 100%;
  width: auto;
  overflow: hidden
`

const galleryImageStyles = css`
  height: 100%;
  width: auto;
`

const sendEquiry: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  event.preventDefault();

  window.location.href = "mailto:relax@bestislandbus.nz";
}

const IndexPage = () => <Layout>
    <main style={pageStyles}>
      <div style={headerStyle}>
        <StaticImage src="../images/logo.svg" alt="logo" height={100}></StaticImage>
        <StaticImage src="../images/hero.jpg" alt="beautiful orange bus by the water"></StaticImage>
      </div>
      <section css={primarySectionStyles}>
        <h2>the enchantment of a vintage stay in a truly unspoilt place</h2>
      </section>
      <section css={secondarySectionStyles}>
        <h2>The Best Island Bus sits on the shores of the Waimea Estuary near Nelson, on New Zealand’s 
          stunning South Island</h2>
        <p>This classic bus is surrounded by the ever changing landscape of the estuary, with its diverse 
          wildlife and dramatic views to the velvety hills of the Richmond Ranges. In the summer months the 
          beautiful evening sun nearly always turns into an eye-popping sunset and in the cooler months the snow 
          capped peaks of the Kahurangis are clearly visible on the horizon</p>
          <div css={enquiryButtonContainerStyle}>
            <Button onClick={sendEquiry} text="send an enquiry" />
          </div>
      </section>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>accomodation</h2>
      </div>
      <section css={sectionContainerStyles}>
        <section css={tertiarySectionStyles}>
          <p>The Best Island Bus is an original sixties bus
that has been lovingly modernised. We have endeavoured to combine comfortable and stylish accommodation with the charm and authenticity that a bus of this era has, in bucketloads.
cosy...secluded....and surprisingly spacious
The bus is situated at the end of our large garden in a secluded corner with its own private lawn. There is a large deck outside for breakfast al fresco with numerous cushions and loungers for those lazy evenings. A generous bathroom and laundry that is separate from the bus but easily accessed by a corridor. A fully fitted kitchen looks out over the garden. A queen bed with cotton sheets. At one end there is a large sofa where you can chill out and watch the herons and kingfishers.
We have chosen not to have a TV but provide an i-pad with an assortment of films and documentaries. The i-pad also has information on what to do and where to eat out in the area.
A continental breakfast is provided during your stay. The Best Island Bus sleeps two comfortably.
          </p>
        </section>
        <aside css={asideStyles}>
          <StaticImage src="../images/logo.svg" alt="logo" height={200} css={logoStyle}></StaticImage>
        </aside>
      </section>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>what we offer</h2>
      </div>
      <section css={primarySectionStyles}>
        <h2>When we made our move to the Tasman region from Wellington five years ago, we decided to create a holiday stay on the island. How could we not share such outstanding panoramic views of the Kahurangi Mountains and the unspoilt natural ecosystem of the Waimea Estuary.
Let’s do something different we said...enter the Best Island Bus!</h2>
      </section>
      <section css={secondarySectionStyles}>
        <h2>- kayaking....you can kayak onto the estuary a few metres from the end of the garden on a high tide. Kayaks available.
- biking....the Great Taste Trail.... we can drop you off and pick you up. Bikes available.
- walk the beaches around the island
- packed lunches... a nourishing option when out and about
- special occasion gifts....you can chat to us about these prior
to arrival
- takeaways for late arrivals
- play golf on the island a few minutes away
ride the bike trail to Rabbit Island
or kayak up the estuary</h2>
      </section>
      <section css={gallerySection}>
        <div css={videoContainerStyles}>
          <Video
            css={videoStyles}
            videoSrcURL='https://player.vimeo.com/video/760665688?h=8f12acdd75&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1&amp;player_id=0&amp;app_id=58479'
            videoTitle='Water'
          ></Video>
        </div>
        <div css={imageContainerStyles}>
          <StaticImage src="../images/biking.jpg" alt="logo" css={galleryImageStyles} width={400}></StaticImage>
        </div>
        <div css={imageContainerStyles}>
          <StaticImage src="../images/beach.jpg" alt="logo" css={galleryImageStyles} width={300}></StaticImage>
        </div>
      </section>
    </main>
  </Layout>





export default IndexPage

export const Head: HeadFC = () => <title>Best Island Bus</title>
