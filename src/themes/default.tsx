import { createTheme } from "@mui/material"

const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: "#E8244D",
      contrastText: "#FFFFFF",
    },
    text: {
      disabled: "#FAFAFA",
    },
  },
})

export default defaultTheme
