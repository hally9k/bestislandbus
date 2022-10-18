/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/react"

interface Props {
  videoSrcURL: string,
  videoTitle: string,
  css: SerializedStyles
}

export const Video: React.FC<Props> = ({ videoSrcURL, videoTitle, css }) =>
    <iframe
      css={css}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      allowFullScreen={false}
      height="100%"
      width="100%"
    />

