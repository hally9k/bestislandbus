/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { colorBrandPrimary, colorShadePrimary, colorBaseWhite } from '../styles/color'
import { Button } from '../components/button'
import bedImg from '../images/bed.jpg'
import indicatorImg from '../images/indicator.jpg'
import logoSvg from '../images/logo.svg'

import React from 'react'

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

const quartinarySectionStyles = css`
  padding: 3rem;
  width: calc(100% - 300px);

  @media (max-width: 960px) {
    width: 100%;
  }

  font-size: 3rem;


  > a, p, button {
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

const galleryDoubleSection = css`
  ${gallerySection}
  grid-template-columns: 1fr 1fr;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`
const imageBedStyles = css`
  background-image: url(${bedImg});

  ${imageContainerStyles}
`
const imageIndicatorStyles = css`
  background-image: url(${indicatorImg});

  ${imageContainerStyles}
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


const sendEquiry: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  event.preventDefault();

  window.location.href = "mailto:relax@bestislandbus.nz";
}

export const BookingYourStay = () => <React.Fragment>
  <section css={sectionContainerStyles}>
    <section css={quartinarySectionStyles}>
      <h5>You can book your Best Island Bus stay here</h5>
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
    <img src={logoSvg} css={logoStyle}/>
    </aside>
  </section>
  <section css={galleryDoubleSection}>
    <div css={imageBedStyles}>
    </div>
    <div css={imageIndicatorStyles}>
    </div>
  </section>
</React.Fragment>