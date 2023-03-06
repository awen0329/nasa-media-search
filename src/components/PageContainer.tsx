import React from "react"

import { Typography, Box } from "../UILibrary"

export const PageContainer: React.FC<
  React.PropsWithChildren<{
    title?: string
  }>
> = ({ children, title }) => {
  return (
    <Box sx={{ p: { xs: "0 0.875rem", md: "1rem" }, flexGrow: 1, bgcolor: "text.disabled" }}>
      {title && (
        <Box
          sx={{
            display: "flex",
            pt: { xs: "3.125rem", md: "2.75rem" },
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
  )
}
