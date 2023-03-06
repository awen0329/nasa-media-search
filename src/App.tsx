import React from "react"
import { ThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router"
import Search from "./pages/Search"
import defaultTheme from "./themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
