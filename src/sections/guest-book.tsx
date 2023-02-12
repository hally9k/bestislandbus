/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { asideStyles, sectionContainerStyles, quartinarySectionStyles } from '../styles/section'

const guestBookEntryStyle = css`
  font-weight: 500;
  margin-bottom: 5rem;

  > p > p {
    position: relative;
    padding-left: 3.2rem;
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
    /* margin-top: 7rem; */
  }
`

const guestNameStyle = css`
  font-weight: bold;
`

export const GuestBook = () => <section css={sectionContainerStyles}>
<section css={quartinarySectionStyles}>
  <div css={guestBookEntryStyle}>
    <p>
      <span className="quotes">&#x201C;</span><p> <br />Absolutely amazing place..the bus is so nice and the couple have done a fan- tastic job working on it..the place is very peaceful and have a very nice wiew.. the garden is beautiful...there is everything you need . it’s a 10 out 10.</p>
      <br />
      <p css={guestNameStyle}> - Lisa</p>
    </p>
  </div>

  <div css={guestBookEntryStyle}>
    <p>
      <span className="quotes">&#x201C;</span><p> <br />By far the most beautiful and unusual accommodation in which we were so far. The bus was rebuilt by Simon and Clare with a lot of passion and love down to the smallest detail, so that you feel comfortable and appreciate the accommodation even more. It is incredibly cozy, clean and felt like at home. You live in the middle of nature by the sea with a wonderful view, which you can enjoy in the evening on the sofa on the bus or on the chairs on the terrace with a cool drink. It is absolutely quiet, you only hear the birds and grilling around it. Simon and Clare are wonderful hosts who are always accessible and very helpful. They provided us with their two kayaks and bicycles, so that we could make our vacation there even more varied and experience more</p>
      <br />
      <p css={guestNameStyle}> - Simon</p>
    </p>
  </div>

  <div css={guestBookEntryStyle}>
    <p>
      <span className="quotes">&#x201C;</span><p> <br />This bus is really one of a kind with a lot of love into details. Pictures can’t describe how unique this place is. Clare and Simon are wonderful hosts that spent so much work and love in this unique accommodation.</p>
      <br />
      <p css={guestNameStyle}> - Amy</p>
    </p>
  </div>

  <div css={guestBookEntryStyle}>
    <p>
      <span className="quotes">&#x201C;</span><p> <br />Words can’t describe how truly amazing this place is! My sister and I were absolutely blown away with our night here. As we’ve travelled around New Zealand, this is our favor- ite stay so far. I always search for a unique or quirky accommodation, something a little different and out of the ordinary. Clare and Simon certainly went above and beyond to make this feel like a magical night away, a strong 10/10!</p>
      <br />
      <p css={guestNameStyle}> - Laura</p>
    </p>
  </div>

  <div css={guestBookEntryStyle}>
    <p>
      <span className="quotes">&#x201C;</span><p> <br />We felt immediately at peace when arriving at this unique bus. It was even more cozy and delicate than what we had thought. We spent our evening on the porch grilling and enjoying the lovely view. Quite regrettable that we only could stay one night as we would have loved to slow down and do some kayaking and more exploration of the island and Nelson area with the bus as base.</p>
      <br />
      <p css={guestNameStyle}> - Vilde</p>
    </p>
  </div>
</section>
<aside css={asideStyles}>
</aside>
</section>




// Words can’t describe how truly amazing this place is! My sister and I were absolutely blown away with our night here. As we’ve travelled around New Zealand, this is our favor- ite stay so far. I always search for a unique or quirky accommodation, something a little different and out of the ordinary. Clare and Simon certainly went above and beyond to make this feel like a magical night away, a strong 10/10!
// Laura
// We felt immediately at peace when arriving at this unique bus. It was even more cozy and delicate than what we had thought. We spent our evening on the porch grilling and enjoying the lovely view. Quite regrettable that we only could stay one night as we would have loved to slow down and do some kayaking and more exploration of the island and Nelson area with the bus as base.Vilde 