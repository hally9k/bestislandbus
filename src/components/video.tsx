/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/react"

interface Props {
  videoTitle: string,
  css: SerializedStyles
}

export const Video: React.FC<Props> = ({ videoTitle, css }) =>
    <iframe
      css={css}
      src="https://www.youtube.com/embed/H-lF_6IJ4u8?controls=0&autoplay=1&loop=1"
      title={videoTitle}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      frameBorder="0"
      allowFullScreen={false}
      height="100%"
      width="100%"
    />