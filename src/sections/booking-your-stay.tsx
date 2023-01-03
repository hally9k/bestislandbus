/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { colorBrandPrimary, colorBaseWhite, colorShadePrimary } from '../styles/color'
import { tertiarySectionStyles, sectionContainerStyles, asideStyles } from '../styles/section'
import { primaryBrandHeadingStyles } from '../styles/typeography'
import { EnquiryButton } from '../components/enquiry-button'
import { Logo } from '../components/logo'
import bedImg from '../images/bed.jpg'
import indicatorImg from '../images/indicator.jpg'

import React from 'react'

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
  width: fit-content;
  margin: 2rem 0 1rem;
  padding: 0.2rem 1rem 0.2rem 6rem;
  @media (max-width: 1225px) {
    padding: 0.2rem 1rem 0.2rem 3rem;
  }

  @media (max-width: 880px) {
    padding: 0.2rem 1rem 0.2rem 3rem;
  }

  @media (max-width: 715px) {
    padding: 0.2rem 1rem 0.2rem 2rem;
  }

  @media (max-width: 410px) {
    padding: 0.2rem 1rem 0.2rem 1rem;
  }
`

const infoBodyStyles = css`
  padding: 1rem 6rem;

  @media (max-width: 1225px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 880px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 715px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 410px) {
    padding: 0.5rem 1rem;
  }
`

const bookHereStyles = css`
  padding: 3rem 6rem;

  @media (max-width: 1225px) {
    padding:3rem 3rem;
  }

  @media (max-width: 880px) {
    padding: 3rem 3rem;
  }

  @media (max-width: 715px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 410px) {
    padding: 3rem 1rem;
  }
  
  display: flex;
  width: 100%;

  align-items: center;

  h1 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  @media (max-width: 1380px) {
    flex-direction: column;
    justify-items: center;
    h1 {
      font-size: 1.5rem;
      text-align: center;
    }
  }

`

const buttonContainerStyles = css`
 padding: 0 2rem 0 2rem;
`

const infoSectionStyles = css`
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

const bookingAsideStyles = css`
  ${asideStyles}
  background-color: ${colorShadePrimary};
`

export const BookingYourStay = () => <React.Fragment>
  <section css={sectionContainerStyles}>
    <section css={bookHereStyles}>
      <h1>You can book your Best Island Bus stay here</h1>
      <div css={buttonContainerStyles}>
        <EnquiryButton/>
      </div>
      </section>
    <aside css={asideStyles}>
    </aside>
  </section>

  <section css={sectionContainerStyles}>
    <section css={infoSectionStyles}>
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
    <aside css={bookingAsideStyles}>
    <Logo/>
    </aside>
  </section>
  <section css={galleryDoubleSection}>
    <div css={imageBedStyles}>
    </div>
    <div css={imageIndicatorStyles}>
    </div>
  </section>
</React.Fragment>