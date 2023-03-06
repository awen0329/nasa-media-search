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
      disabled: "#203255",
    },
  },
})

export default defaultTheme
