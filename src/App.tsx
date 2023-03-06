import React from "react"
import { ThemeProvider } from "@mui/material"
import { BrowserRouter, Navigate } from "react-router-dom"
import { Route, Routes } from "react-router"
import { QueryClientProvider } from "@tanstack/react-query"
import Search from "./pages/Search"
import defaultTheme from "./themes/default"
import { getQueryClient } from "./modules/queryClient"

function App() {
  const queryClient = getQueryClient()

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Navigate to="/search" />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
