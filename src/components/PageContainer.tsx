import React from "react"

import { Typography, Box, AppBar, Toolbar } from "../UILibrary"

export const PageContainer: React.FC<
  React.PropsWithChildren<{
    title?: string
  }>
> = ({ children, title }) => {
  return (
    <Box sx={{ bgcolor: "text.disabled" }}>
      <AppBar position="sticky" sx={{ bgcolor: "text.disabled", opacity: 0.8 }}>
        <Toolbar>
          <Typography.Heading sx={{ color: "background.default" }}>
            NASA Media Library
          </Typography.Heading>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: { xs: "0 0.875rem", md: "1rem" }, flexGrow: 1 }}>
        {title && (
          <Box
            sx={{
              display: "flex",
              pt: "1.5rem",
              pb: "1rem",
              alignItems: "center",
            }}
          >
            <Typography.Heading
              color="primary"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.5rem" },
                lineHeight: { xs: "100%", md: "2rem" },
              }}
            >
              {title}
            </Typography.Heading>
          </Box>
        )}
        {children}
      </Box>
    </Box>
  )
}
