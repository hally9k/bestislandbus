/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { Button } from '../components/button'

const enquiryButtonStyles = css`
  font-size: 1.6rem;
  padding-left: 1.65rem;
  padding-right: 1.65rem;

  @media (max-width: 1400px) {
    font-size: 1.6rem;
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

const sendEquiry: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  event.preventDefault();

  window.location.href = "mailto:relax@bestislandbus.nz";
}

export const EnquiryButton = () => <Button onClick={sendEquiry} styles={enquiryButtonStyles} text="send an enquiry" />

