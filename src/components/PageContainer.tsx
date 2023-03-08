import React from "react"
import { PAGE_CONTAINER_TEST_ID } from "../constants"

import { Typography, Box, AppBar, Toolbar, Breadcrumbs, Link } from "../UILibrary"

export const PageContainer: React.FC<
  React.PropsWithChildren<{
    title?: string
    paths?: { label: string; link?: string }[]
  }>
> = ({ children, title, paths }) => {
  return (
    <Box data-testid={PAGE_CONTAINER_TEST_ID} sx={{ bgcolor: "text.disabled", minHeight: "100vh" }}>
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
              flexDirection: "column",
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
            {paths && (
              <Breadcrumbs
                separator={
                  <Typography.Action sx={{ color: "background.default" }}>{">"}</Typography.Action>
                }
              >
                {paths.map(({ label, link }) => (
                  <Link
                    key={label}
                    underline="hover"
                    href={link}
                    sx={{ color: "background.default", fontSize: "0.75rem" }}
                  >
                    {label}
                  </Link>
                ))}
              </Breadcrumbs>
            )}
          </Box>
        )}
        {children}
      </Box>
    </Box>
  )
}
