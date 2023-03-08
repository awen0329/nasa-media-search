import React from "react"
import { useNavigate } from "react-router-dom"
import {
  MEDIA_CARD_CONTIANER_TEST_ID,
  MEDIA_CARD_LOCATION_TYPO_TEST_ID,
  MEDIA_CARD_PHOTOGRAPHER_TYPO_TEST_ID,
} from "../constants"
import { MediaItem } from "../types"

import { Image, Typography, Box, Paper } from "../UILibrary"

interface MediaCardProps {
  media: MediaItem
}

export const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
  const navigate = useNavigate()
  const { links, data } = media
  const { nasa_id, title, photographer, location } = data[0]

  return (
    <Box
      component={Paper}
      data-testid={MEDIA_CARD_CONTIANER_TEST_ID}
      sx={{
        p: 1,
        display: { xs: "flex", md: "block" },
        height: { xs: "100%", md: "280px" },
        width: { xs: "100%", md: "220px" },
        bgcolor: "background.default",
        gap: 1.25,
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={() => navigate(`/detail/${nasa_id}`)}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: 120, md: "100%" },
        }}
      >
        <Image
          src={links[0].href}
          alt={title}
          sx={{
            height: { xs: "88px", md: "158px" },
          }}
        />
      </Box>
      <Box
        sx={{ flexGrow: 1, px: { xs: 0, md: 1.25 }, py: { xs: 0, md: 2 }, color: "text.primary" }}
      >
        <Typography.Description
          color="primary"
          title={title}
          textAlign="center"
          sx={{
            fontWeight: "600",
            lineHeight: "1.25rem",
            mb: { xs: 0.5, md: 1 },
          }}
        >
          {title}
        </Typography.Description>
        {location && (
          <Typography.Description data-testid={MEDIA_CARD_LOCATION_TYPO_TEST_ID}>
            Location: {location}
          </Typography.Description>
        )}
        {photographer && (
          <Typography.Action data-testid={MEDIA_CARD_PHOTOGRAPHER_TYPO_TEST_ID}>
            Creator: {photographer}
          </Typography.Action>
        )}
      </Box>
    </Box>
  )
}
