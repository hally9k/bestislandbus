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
  minWidth: "250px"
}

const headerStyle = css`
`

const logoWrapperStyle = css`
  position: absolute;
  z-index: 10;
  
  overflow-wrap: auto;

`

const logoStyle = css`
  height: 15rem;
  width: 15rem;

  > div {
    height: 100%
  }

  @media (max-width: 650px) {
    height: 8rem;
    width: 8rem;
  }
`

const logoTextStyle = css`
  width: 15rem;

  margin-top: -2rem;

  font-weight: 500;

  text-align: center;
  color: ${colorBaseWhite};

  @media (max-width: 650px) {
    display: none;
  }
`

const primarySectionStyles = css`
  padding: 3rem 6rem;
  max-width: 70rem;
  font-size: 3rem;
  font-family: 'GFS Didot', serif;

  a {
    font-size: 1.5rem;
  }

  @media (max-width: 1225px) {
    font-size: 2rem;
    padding: 1.5rem 3rem;
  }

  @media (max-width: 880px) {
    font-size: 1.5rem;
    padding: 1.5rem 3rem;
  }

  @media (max-width: 715px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 410px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }

  > h1, h2 {
    color: ${colorBrandPrimary};
    text-align: center;
  }
`

const whatWeOfferSectionStyles = css`
    padding: 3rem 6rem;
    max-width: 70rem;
    font-size: 2rem;
    font-weight: 200;

  @media (max-width: 1225px) {
    font-size: 1.6rem;
    padding: 1.5rem 3rem;
  }

  @media (max-width: 880px) {
    font-size: 1.5rem;
    padding: 1.5rem 3rem;
  }

  @media (max-width: 715px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 410px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
`

const primaryBrandHeadingStyles = css`
  font-family: 'GFS Didot', serif;
  color: ${colorBrandPrimary};
  font-size: 5rem;

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

const secondarySectionStyles = css`
  padding: 3rem 5rem;
  background-color: ${colorShadePrimary};

  font-size: 2rem;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 960px) {
    font-size: 1.8rem;
  }

  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
`

const sectionContainerStyles = css`
  display: flex;
`

const secondarySectionTextContainerStyles = css`
    max-width: 70rem;
    padding: 0 5rem;
    
    @media (max-width: 1200px) {
      padding: 0 2rem;
    }

    @media (max-width: 960px) {
      padding: 0 1rem;
    }

    @media (max-width: 750px) {
      padding: 0;
    }

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

    > h1, h2 {
      font-weight: 400;

      font-size: 3rem;

      text-align: center;
      padding-left: 5rem;
      padding-right: 5rem;

      @media (max-width: 1200px) {
        font-size: 2rem;
      }

      @media (max-width: 960px) {
        font-size: 2rem;
        padding-left: 3rem;
        padding-right: 3rem;
      }

      @media (max-width: 715px) {
        font-size: 1.8rem;
        padding-left: 2rem;
        padding-right: 2rem;
      }

      @media (max-width: 410px) {
        font-size: 1.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
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
`

const enquiryButtonStyles = css`
  font-size: 3rem;

  @media (max-width: 1400px) {
    font-size: 2rem;
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

const dividertextStyles = css`
  margin: 0;
  font-family: 'GFS Didot', serif;
  font-size: 2rem;
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

const accomodationSectionTextStyles = css`
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

const quartinarySectionStyles = css`
  padding: 3rem;
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

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
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

  > div > p {
    margin: 0;
  }
`

const phoneIconStyles = css`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`

const emailStyles = css`
`

const emailIconStyles = css`
  height: 40px;
  width: 40px;
  top: -5px;
  margin-right: 10px;
`

const footerStyles = css`
  height: 100px;
`

const infoTitleStyles = css`
  color: ${colorBrandPrimary};
  border: 1px ${colorBrandPrimary} solid;
  border-left: none;
  background-color: ${colorBaseWhite};
  padding: 0.2rem 1rem 0.2rem 3rem;
  width: fit-content;
  margin: 2rem 0 1rem;
`

const infoBodyStyles = css`
  padding: 1rem 3rem;
`

const guestBookEntryStyle = css`
  font-weight: 500;

  > p > p {
    position: relative;
    padding-left: 3.2rem;
    top: 35px;
  }

  > p > .quotes {
    position: absolute;
    font-size: 7rem;
    font-weight: 900;

    @media (max-width: 1200px) {
        font-size: 6rem;
      }

      @media (max-width: 960px) {
        font-size: 5.5rem;
      }

      @media (max-width: 715px) {
        font-size: 4.5rem;
      }

      @media (max-width: 410px) {
        font-size: 4rem;
      }
  }

  .guest-name {
    margin-top: 7rem;
  }
`

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

const sendEquiry: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  event.preventDefault();

  window.location.href = "mailto:relax@bestislandbus.nz";
}

const IndexPage = () => <Layout>
    <main style={pageStyles}>
      <div css={headerStyle}>
        <div css={logoWrapperStyle}>
          <StaticImage src="../images/logo.svg" alt="logo" css={logoStyle}></StaticImage>
            <h1 css={logoTextStyle}>South Island<br/>New Zealand</h1>
        </div>
        <StaticImage src="../images/hero.jpg" alt="beautiful orange bus by the water"></StaticImage>
      </div>
      <section css={primarySectionStyles}>
        <h2>the enchantment of a vintage stay <br /> in a truly unspoilt place</h2>
      </section>
      <section css={secondarySectionStyles}>
        <div css={secondarySectionTextContainerStyles}>
          <h2>The Best Island Bus sits on the shores of the Waimea Estuary near Nelson, on New Zealand’s 
            stunning South Island</h2>
          <p>This classic bus is surrounded by the ever changing landscape of the estuary, with its diverse 
            wildlife and dramatic views to the velvety hills of the Richmond Ranges. In the summer months the 
            beautiful evening sun nearly always turns into an eye-popping sunset and in the cooler months the snow 
            capped peaks of the Kahurangis are clearly visible on the horizon</p>
          </div>
          <div css={enquiryButtonContainerStyle}>
            <Button onClick={sendEquiry} styles={enquiryButtonStyles} text="send an enquiry" />
          </div>
      </section>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>accomodation</h2>
      </div>
      <section css={sectionContainerStyles}>
        <section css={tertiarySectionStyles}>
          <StaticImage src="../images/inside-front.jpg" alt="interior shot of pink sofa"></StaticImage>

          <p css={accomodationSectionTextStyles}>The Best Island Bus is an original sixties bus
that has been lovingly modernised. We have endeavoured to combine comfortable and stylish accommodation with the charm and authenticity that a bus of this era has, in bucketloads.
<h1 css={primaryBrandHeadingStyles}>cosy...secluded....and surprisingly spacious</h1>
The bus is situated at the end of our large garden in a secluded corner with its own private lawn. There is a large deck outside for breakfast al fresco with numerous cushions and loungers for those lazy evenings. A generous bathroom and laundry that is separate from the bus but easily accessed by a corridor. A fully fitted kitchen looks out over the garden. A queen bed with cotton sheets. At one end there is a large sofa where you can chill out and watch the herons and kingfishers.
<br /><br />We have chosen not to have a TV but provide an i-pad with an assortment of films and documentaries. The i-pad also has information on what to do and where to eat out in the area.
<br /><br />A continental breakfast is provided during your stay. <br /><br />The Best Island Bus sleeps two comfortably.
          </p>
        </section>
        <aside css={asideStyles}>
          <StaticImage src="../images/logo.svg" alt="logo" height={200} css={logoStyle}></StaticImage>
        </aside>
      </section>
      <StaticImage src="../images/estuary.jpg" alt="mountain ranges with water in the foreground"></StaticImage>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>what we offer</h2>
      </div>
      <section css={whatWeOfferSectionStyles}>
        <p>When we made our move to the Tasman region from Wellington five years ago, we decided to create a holiday stay on the island. How could we not share such outstanding panoramic views of the Kahurangi Mountains and the unspoilt natural ecosystem of the Waimea Estuary.
        <br /><br />Let’s do something different we said...enter the Best Island Bus!</p>
      </section>
      <section css={secondarySectionStyles}>
        <ul>
          <li><strong>kayaking....</strong> you can kayak onto the estuary a few metres from the end of the garden on a high tide. Kayaks available.</li>
          <li><strong>biking....</strong> the Great Taste Trail.... we can drop you off and pick you up. Bikes available.</li>
          <li><strong>walk</strong> the beaches around the island</li>
          <li><strong>packed lunches...</strong> a nourishing option when out and about</li>
          <li><strong>special occasion gifts....</strong> you can chat to us about these prior to arrival</li>
          <li><strong>takeaways</strong> for late arrivals</li>
          <li><strong>play golf</strong> on the island a few minutes away</li>
        </ul>
        <br /><span css={primaryBrandHeadingStyles}>ride the bike trail to Rabbit Island<br />or kayak up the estuary</span>
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
          <h1 css={primaryBrandHeadingStyles}>a few ideas to get you started</h1>
          <p><a href="https://www.nelsontasman.nz">Abel Tasman National Park</a></p>
          <p><a href="https://www.google.com/search?client=safa- ri&rls=en&q=suter+gallery&ie=UTF-8&oe=UTF-8">Suter Gallery and cafe in Nelson</a></p>
          <p><a href="https://www.google.com/search?client=safa- ri&rls=en&q=founders+park&ie=UTF-8&oe=UTF-8">Founders Heritage Park</a></p>
          <p><a href="https://www.google.com/search?cli- ent=safari&rls=en&q=cable+bay+adven- ture+park&ie=UTF-8&oe=UTF-8">Cable Bay Adventure Park</a></p>
          <p><a href="https://www.google.com/search?client=safa- ri&rls=en&q=Miyazu+Japanese+garden+nel- son+nz&ie=UTF-8&oe=UTF-8">Miyazu Japanese Gardens and Queens Gardens in Nelson Rabbit Island beach</a></p>
          <p><a href="https://www.mapuawharf.co.nz">Mapua Wharf</a> ...ferry to rabbit island</p>
          <p><a>Takaka in Golden Bay</a></p>
          <p><a href="https://www.google.com/search?client=sa- fari&rls=en&q=connings+food+mar- ket&ie=UTF-8&oe=UTF-8">Connings Food Market</a></p>
          <p><a href="https://playhousecafe.co.nz">The Playhouse Cafe and theatre</a></p>
          <p><a>Local markets Nelson/Motueka</a></p>
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
          <Button onClick={sendEquiry} styles={enquiryButtonStyles} text="send an enquiry" />
        </section>
        <aside css={asideStyles}>
        </aside>
      </section>

      <section css={sectionContainerStyles}>
        <section css={tertiarySectionStyles}>
          <br />
          <p css={infoBodyStyles}>We manage our bookings and enquiries personally. We endeavour to be in touch as soon as possible.</p>
          <p css={infoBodyStyles}>There are discounted rates for longer stays. All reservations are subject to confirmation.</p>

          <div css={infoTitleStyles}>Payment</div>
          <p css={infoBodyStyles}>
            <strong>Once your booking is agreed we will send you an invoice with all the details</strong>
            <br />
            <br />
            You can pay for your accommodation online with:
            <ul>
              <li>Credit card through <strong>PayPal</strong></li>
              <li><strong>Direct Credit</strong> - NZ Bank account required</li>
            </ul>
          </p>
          <div css={infoTitleStyles}>Tariffs</div>
          <p css={infoBodyStyles}>
            <strong>$225/night. Minimum two nights booking.</strong><br />
            Please be aware that The Best Island Bus is only available from October 1st - June 30th every year.
            <br /><br />Unfortunately there is no disabled access and we are unable to cater for pets. We can cater for one extra person;
            please contact us for further details.
          </p>
          <div css={infoTitleStyles}>Arrival/Departure times</div>
          <p css={infoBodyStyles}>
            <strong>Check in time 2pm</strong><br />
            <strong>Check out time 11am</strong><br />
            If you need to come earlier or leave later let us know and we’ll see what we can do.
          </p>
          <div css={infoTitleStyles}>Deposits & Payment</div>
          <p css={infoBodyStyles}>
            A <strong>50% deposit</strong> is required to secure your booking.<br />
            The full balance payment is required 14 days prior to arrival.
          </p>
          <div css={infoTitleStyles}>Cancellations*</div>
          <p css={infoBodyStyles}>
            Cancellations within 28 days of arrival date<br />
            50% of deposit to be retained<br /><br />
            Cancellation within 21 days of arrival date<br />
            100% of deposit to be retained<br /><br />
            <span css={primaryBrandHeadingStyles}>*</span><sub>Any transaction fees will be deducted from reimbursements</sub>
          </p>
          <br />
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
          <div css={guestBookEntryStyle}>
            <p>
              <span className="quotes">&#x201C;</span><p> <br />Awesome. Relaxing, stunning place to stay.The estuary with the mountains in the distance is a great view to have over brekky. We would recommend the Best Island Bus to anyone we know. Clare & Simon made us feel so welcome. Thankyou so much.<br /></p><span className="quotes">&#x201D;</span>
            </p>
            <p className="guest-name">Tania<br /><sub>Auckland</sub></p>
          </div>
        </section>
        <aside css={asideStyles}>
        </aside>
      </section>
      <div css={dividerStyles}>
        <h2 css={dividertextStyles}>finding us</h2>
      </div>
      <section css={mapInstaContainer}>
        <div css={mapContainerStyles}>
          <section css={primarySectionStyles}>
            <StaticImage src="../images/map.jpg" alt="map" css={mapStyles} />
            <div><a href="https://goo.gl/maps/8hjrQeo9gzhoay5G7">google link for map</a></div>
          </section>
        </div>
        <div css={instaContainerStyles}>
          <a href="https:/instagram.com/bestislandbus">
            <StaticImage src="../images/insta.png" alt="instagram logo" css={instaLogoStyles} />
          </a>
        </div>
      </section>
      <section css={galleryDoubleSection}>
        <div css={contactPanel}>
          <h4>Get in touch to find out more</h4>
          <div css={emailStyles}>
            <StaticImage src="../images/email.png" alt="email icon" css={emailIconStyles} />
            <a href="mailto:relax@bestislandbus.nz">relax@bestislandbus.nz</a></div>
          <div css={phoneNumberStyles}>
            <StaticImage src="../images/mobile.png" alt="phone icon" css={phoneIconStyles} />
            <div>
              <p>Clare <a href="tel:+6421775806">+64 21 775 806</a></p>
              <p>Simon <a href="tel:+64212228396">+64 21 222 8396</a></p>
            </div>
          </div>
          <br />
          <a>www.bestislandbus.nz</a>
        </div>
        <div css={imageGardenStyles}></div>
      </section>
      <footer css={footerStyles}></footer>
    </main>
  </Layout>





export default IndexPage

export const Head: HeadFC = () => <title>Best Island Bus</title>
