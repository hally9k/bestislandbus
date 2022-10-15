/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { default as MuiButton } from '@mui/material/Button';
import { colorBrandPrimary } from '../styles/color'

const buttonStyles = css`
  border-radius: 0;
  background-color: ${colorBrandPrimary};

  :hover {
    background-color: ${colorBrandPrimary}
  }
`

export const Button: React.FC<{ text: string, onClick: React.MouseEventHandler<HTMLButtonElement> }> = ({ text, onClick }) => 
  <MuiButton onClick={onClick} color={"primary"} css={buttonStyles} variant="contained" disableRipple={true}>
    {text}
  </MuiButton>
