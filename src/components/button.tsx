/** @jsx jsx */
import { jsx, css, SerializedStyles } from "@emotion/react"
import { default as MuiButton } from '@mui/material/Button';
import { colorBrandPrimary } from '../styles/color'



export const Button: React.FC<{ text: string, onClick: React.MouseEventHandler<HTMLButtonElement>, styles?: SerializedStyles }> = ({ text, onClick, styles }) => {

  const buttonStyles = css`
  border-radius: 0;
  background-color: ${colorBrandPrimary};
  font-family: 'GFS Didot', serif;

  :hover {
    background-color: ${colorBrandPrimary}
  }

  ${styles || ''}
`
  return <MuiButton onClick={onClick} sx={{textTransform: "none"}} color={"primary"} css={buttonStyles} variant="contained" disableRipple={true}>
    {text}
  </MuiButton>
}
