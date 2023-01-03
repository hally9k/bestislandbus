/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { Button } from '../components/button'


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
    justify-content: center;
  }

  @media (max-width: 715px) {
    font-size: 1.2rem;
    justify-content: center;
  }

  @media (max-width: 410px) {
    font-size: 1rem;
    justify-content: center;
  }
`

const enquiryButtonStyles = css`
  font-size: 1.6rem;

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

export const EnquiryButton = () => <div css={enquiryButtonContainerStyle}>
  <Button onClick={sendEquiry} styles={enquiryButtonStyles} text="send an enquiry" />
</div>

