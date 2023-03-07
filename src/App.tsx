import React from "react"
import { Route, Routes } from "react-router"
import { BrowserRouter, Navigate } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "@mui/material"
import { getQueryClient } from "./modules/queryClient"
import defaultTheme from "./themes/default"
import Search from "./pages/Search"
import MediaDetail from "./pages/MediaDetail"

function App() {
  const queryClient = getQueryClient()

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Navigate to="/search" />} />
            <Route path="/search" element={<Search />} />
            <Route path="/detail/:nasaId" element={<MediaDetail />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
