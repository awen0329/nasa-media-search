import { SxProps } from "@mui/material"
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Box } from "."

interface ImageProps {
  src: string
  alt?: string
  sx?: SxProps
}

const Image: React.FC<ImageProps> = ({ src, alt, sx }) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        position: "relative",
        "& img": { objectFit: "cover", maxWidth: "100%", height: "auto" },
        ...sx,
      }}
    >
      <LazyLoadImage alt={alt} src={src} effect="blur" />
    </Box>
  )
}

export default Image
