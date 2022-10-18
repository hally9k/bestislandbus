/** @jsx jsx */
import { jsx } from '@emotion/react'
import type { HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { Layout } from '../components/layout'
import { Button } from '../components/button'
import { Video } from '../components/video'
import { colorBrandPrimary, colorShadePrimary, colorBaseWhite } from '../styles/color'
import bikingImg from '../images/biking.jpg'
import beachImg from '../images/beach.jpg'
import waterVideo from '../images/water.mp4'
import marketImg from '../images/market.png'
import islandsImg from '../images/islands.jpg'
import portholeImg from '../images/porthole.jpg'
import bedImg from '../images/bed.jpg'
import indicatorImg from '../images/indicator.jpg'
import gardenImg from '../images/garden.jpg'

const pageStyles = {
  color: "#232129",
  margin: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headerStyle = {
}

const logoStyle = css`
  position: absolute;
  z-index: 10;
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

const quartinarySectionStyles = css`
  padding: 3rem;
  width: calc(100% - 300px);
`

const videoStyles = css`
  flex-grow: 1; border: none; margin: 0; padding: 0;
`

const videoContainerStyles = css`
  display: flex; width: 100%; height: 100%; flex-direction: column; background-color: blue; overflow: hidden;
`

const imageContainerStyles = css`
  height: 100%;
  width: auto;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const imageBikingStyles = css`
  background-image: url(${bikingImg});

  ${imageContainerStyles}
`

const imageBeachStyles = css`
  background-image: url(${beachImg});

  ${imageContainerStyles}
`

const gallerySection = css`
  display: grid;
  height: 480px; 
  width: 100%;
  overflow: hidden;
`

const galleryVideoHackSection = css`
  ${gallerySection}
  grid-template-columns: 853px 1fr 1fr;
`
const galleryTripleSection = css`
  ${gallerySection}
  grid-template-columns: 1fr 1fr 1fr;
`
const galleryDoubleSection = css`
  ${gallerySection}
  grid-template-columns: 1fr 1fr;
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
const imageBedStyles = css`
  background-image: url(${bedImg});

  ${imageContainerStyles}
`
const imageIndicatorStyles = css`
  background-image: url(${indicatorImg});

  ${imageContainerStyles}
`
const imageGardenStyles = css`
  background-image: url(${gardenImg});

  ${imageContainerStyles}
`
const contactPanel = css`
  background-color: ${colorBrandPrimary};
  color: white;
`

const phoneNumberStyles = css`
  :before {
    content: "";
    display: block;
    background: url("../images/mobile.png") no-repeat;
    width: 40px;
    height: 60px;
    float: left;
    margin: 0 6px 0 0;
  }
`

const emailStyles = css`
  :before {
    content: "";
    display: block;
    background: url("../images/email.png") no-repeat;
    width: 40px;
    height: 20px;
    float: left;
    margin: 0 6px 0 0;
  }
`

const footerStyles = css`
  height: 100px;
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
      <section css={galleryVideoHackSection}>
        <div css={videoContainerStyles}>
          <Video
            css={videoStyles}
            videoSrcURL={waterVideo}
            videoTitle='Water'
          ></Video>
        </div>
        <div css={imageBikingStyles}>
        </div>
        <div css={imageBeachStyles}>
        </div>
      </section>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>our local area</h2>
      </div>
      <section css={sectionContainerStyles}>
        <section css={tertiarySectionStyles}>
          <p>Nelson really is a buzzing, vibrant town, compact enough to ramble around over a long weekend but with lots more further afield. Spend a day in the Abel Tasman National Park with its turquoise waters and easy walking trail, head south to the Nelson Lakes or explore the local wineries and breweries.
take time out to explore
nelsontasman.nz
Hopping in one of our kayaks and paddling up the the estuary is a great way to start the day! You will see a variety of wading birds including the rare White Heron if you’re lucky and possibly a stingray on an out-going tide. The Great Taste Trail runs close by,
a cruisy bike trail that takes you across swing bridges and through farmland and on towards Rabbit island, where you can take the ferry across to Mapua for lunch.
          </p>
        </section>
        <aside css={asideStyles}>
          <StaticImage src="../images/logo.svg" alt="logo" height={200} css={logoStyle}></StaticImage>
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
          <p>a few ideas to get you started
Abel Tasman National Park
Suter Gallery and cafe in Nelson
Founders Heritage Park
Cable Bay Adventure Park
Miyazu Japanese Gardens and Queens Gardens in Nelson Rabbit Island beach
Mapua Wharf...ferry to rabbit island
Takaka in Golden Bay
Connings Food Market
The Playhouse Cafe and theatre
Local markets Nelson/Motueka
          </p>
        </section>
        <aside css={asideStyles}>
          <StaticImage src="../images/logo.svg" alt="logo" height={200} css={logoStyle}></StaticImage>
        </aside>
      </section>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>booking your stay</h2>
      </div>
      <section css={sectionContainerStyles}>
        <section css={quartinarySectionStyles}>
          <p>You can book your Best Island Bus stay here
          </p>
          <Button onClick={sendEquiry} text="send an enquiry" />
        </section>
        <aside css={asideStyles}>
        </aside>
      </section>

      <section css={sectionContainerStyles}>
        <section css={tertiarySectionStyles}>
          <p>We manage our bookings and enquiries personally. We endeavour to be in touch as soon as possible.
There are discounted rates for longer stays. All reservations are subject to confirmation.
Payment
Once your booking is agreed we will send you an invoice with all the details
You can pay for your accommodation online with: • Credit card through PayPal
• Direct Credit - NZ Bank account required Tariffs
$225/night. Minimum two nights booking.
Please be aware that The Best Island Bus is only available from October 1st - June 30th every year.
Unfortunately there is no disabled access and we are unable to cater for pets. We can cater for one extra person;
please contact us for further details.
Arrival/Departure times
Check in time 2pm
Check out time 11am
If you need to come earlier or leave later let us know and we’ll see what we can do.
Deposits & Payment
A 50% deposit is required to secure your booking.
The full balance payment is required 14 days prior to arrival.
Cancellations*
Cancellations within 28 days of arrival date 50% of deposit to be retained
Cancellation within 21 days of arrival date 100% of deposit to be retained
* Any transaction fees will be deducted from reimbursements
          </p>
        </section>
        <aside css={asideStyles}>
          <StaticImage src="../images/logo.svg" alt="logo" height={200} css={logoStyle}></StaticImage>
        </aside>
      </section>
      <section css={galleryDoubleSection}>
        <div css={imageBedStyles}>
        </div>
        <div css={imageIndicatorStyles}>
        </div>
      </section>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>guest book</h2>
      </div>
      <section css={sectionContainerStyles}>
        <section css={quartinarySectionStyles}>
          <p>"Awesome. Relaxing, stunning place to stay.
The estuary with the mountains in the distance is a great view to have over brekky. We would recommend the Best Island Bus to anyone we know. Clare & Simon made us feel so welcome. Thankyou so much. “
Tania Auckland"
          </p>
        </section>
        <aside css={asideStyles}>
        </aside>
      </section>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>finding us</h2>
      </div>
      <section css={sectionContainerStyles}>
        <section css={primarySectionStyles}>
          <StaticImage src="../images/map.jpg" alt="map" height={200}></StaticImage>
        </section>
        <a href="https://goo.gl/maps/8hjrQeo9gzhoay5G7">google link for map</a>
        <a href="https:/instagram.com/bestislandbus" ></a>
      </section>
      <section css={galleryDoubleSection}>
        <div css={contactPanel}>
          <h4>Get in touch to find out more</h4>
          <div css={emailStyles}><p>relax.bestislandbus.nz</p></div>
          <div css={phoneNumberStyles}>
            <div >
              <p>Simon 0064 21 775 806</p>
              <p>Clare 0064 21 222 8396</p>
            </div>
          </div>
          <a>www.bestislandbus.nz</a>
        </div>
        <div css={imageGardenStyles}></div>
      </section>
      <footer css={footerStyles}></footer>
    </main>
  </Layout>





export default IndexPage

export const Head: HeadFC = () => <title>Best Island Bus</title>
