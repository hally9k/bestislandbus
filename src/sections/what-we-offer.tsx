/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { primaryBrandHeadingStyles } from '../styles/typeography'
import { secondarySectionStyles } from '../styles/section'
import React from 'react'
import waterVideo from '../images/water.mp4'
import { Video } from '../components/video'
import bikingImg from '../images/biking.jpg'
import beachImg from '../images/beach.jpg'

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

const listStyles = css`
  li {
    margin-bottom: 1rem;
  }
`

export const WhatWeOffer = () => <React.Fragment>
      <section css={secondarySectionStyles}>
        <p>When we made our move to the Tasman region from Wellington five years ago, we decided to create a holiday stay on the island. How could we not share such outstanding panoramic views of the Kahurangi Mountains and the unspoilt natural ecosystem of the Waimea Estuary.
        <br /><br />Let’s do something different we said...enter the Best Island Bus!</p>
        <br />
        <ul css={listStyles}>
          <li><strong>kayaking....</strong> you can kayak onto the estuary a few metres from the end of the garden on a high tide. Kayaks available.</li>
          <li><strong>biking....</strong> the Great Taste Trail.... we can drop you off and pick you up. Bikes available.</li>
          <li><strong>walk</strong> the beaches around the island</li>
          <li><strong>packed lunches...</strong> a nourishing option when out and about</li>
          <li><strong>special occasion gifts....</strong> you can chat to us about these prior to arrival</li>
          <li><strong>takeaways</strong> for late arrivals</li>
          <li><strong>play golf</strong> on the island a few minutes away</li>
        </ul>
        <br /><h1 css={primaryBrandHeadingStyles}>ride the bike trail to Rabbit Island<br />or kayak up the estuary</h1>
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
    </React.Fragment>