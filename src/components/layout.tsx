/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react"
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles'
import { colorBrandPrimary, colorBrandSecondary } from "../styles/color"
import "../styles/image-gallery.css"
import { baselineStyles } from "../styles/baseline"

const globalStyles = css`
  ${baselineStyles}
`

const theme = createTheme({
  typography: {
    fontFamily: '"Mulish", sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: colorBrandPrimary,
    },
    secondary: {
      main: colorBrandSecondary,
    },
  },
})

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>
    <StylesProvider injectFirst>
      <Global styles={globalStyles} />
      <div>{children}</div>
      </StylesProvider>
  </ThemeProvider>
}